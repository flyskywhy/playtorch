# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

project(PlayTorch)
cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)

# This should be matched with the Unit Test Build. Please keep them in sync. See ../cxx/test/CMakeLists.txt
set (CMAKE_CXX_STANDARD 14)

if(${REACT_NATIVE_MINOR_VERSION} GREATER_EQUAL 71)
        include("${NODE_MODULES_DIR}/react-native/ReactAndroid/cmake-utils/folly-flags.cmake")
        add_compile_options(${folly_FLAGS})
else()
        set (CMAKE_CXX_FLAGS "-DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_HAVE_MEMRCHR=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_MOBILE=1 -DON_ANDROID -DONANDROID")
endif()

set (PACKAGE_NAME "torchlive")
set (BUILD_DIR ${CMAKE_SOURCE_DIR}/build)

if(${REACT_NATIVE_MINOR_VERSION} GREATER_EQUAL 71)
        # Consume shared libraries and headers from prefabs
        find_package(fbjni REQUIRED CONFIG)
        find_package(ReactAndroid REQUIRED CONFIG)
else()
        set (RN_SO_DIR ${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/jni/first-party/react/jni)
endif()

# PyTorch Core shared

add_library(
        ${PACKAGE_NAME}
        SHARED
        ../cxx/src/torchlive/torchlive.cpp
        ../cxx/src/torchlive/common/BaseHostObject.cpp
        ../cxx/src/torchlive/experimental/ExperimentalNamespace.cpp
        ../cxx/src/torchlive/filesystem/FilesystemNamespace.cpp
        ../cxx/src/torchlive/media/Blob.cpp
        ../cxx/src/torchlive/media/BlobHostObject.cpp
        ../cxx/src/torchlive/media/MediaNamespace.cpp
        ../cxx/src/torchlive/media/audio/AudioHostObject.cpp
        ../cxx/src/torchlive/media/image/ImageHostObject.cpp
        ../cxx/src/torchlive/Promise.cpp
        ../cxx/src/torchlive/ThreadPool.cpp
        ../cxx/src/torchlive/torch/DictHostObject.cpp
        ../cxx/src/torchlive/torch/IValueHostObject.cpp
        ../cxx/src/torchlive/torch/jit/JITNamespace.cpp
        ../cxx/src/torchlive/torch/jit/mobile/ModuleHostObject.cpp
        ../cxx/src/torchlive/torch/TensorHostObject.cpp
        ../cxx/src/torchlive/torch/TorchNamespace.cpp
        ../cxx/src/torchlive/torch/utils/ArgumentParser.cpp
        ../cxx/src/torchlive/torch/utils/constants.cpp
        ../cxx/src/torchlive/torch/utils/converter.cpp
        ../cxx/src/torchlive/torch/utils/helpers.cpp
        ../cxx/src/torchlive/torchvision/AbstractScriptModule.cpp
        ../cxx/src/torchlive/torchvision/CenterCropModule.cpp
        ../cxx/src/torchlive/torchvision/GrayscaleModule.cpp
        ../cxx/src/torchlive/torchvision/NormalizeModule.cpp
        ../cxx/src/torchlive/torchvision/ResizeModule.cpp
        ../cxx/src/torchlive/torchvision/TorchvisionHostObject.cpp
        ../cxx/src/torchlive/torchvision/VisionTransformHostObject.cpp
        ../cxx/src/torchlive/vision/TransformsHostObject.cpp
        ../cxx/src/torchlive/vision/VisionHostObject.cpp
        src/main/cpp/OnLoad.cpp
        src/main/cpp/torchlive/media/NativeJSRefBridge.cpp
        src/main/cpp/torchlive/media/audio/Audio.cpp
        src/main/cpp/torchlive/media/audio/JIAudio.cpp
        src/main/cpp/torchlive/media/image/Image.cpp
        src/main/cpp/torchlive/media/image/JIImage.cpp
)

# includes

file (GLOB PYTORCH_INCLUDE_DIRS "${BUILD_DIR}/pytorch_android_lite*.aar/headers")

if(${REACT_NATIVE_MINOR_VERSION} GREATER_EQUAL 71)
        target_include_directories(
                ${PACKAGE_NAME}
                PRIVATE
                "${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/jni/react/turbomodule"
                "${NODE_MODULES_DIR}/react-native/ReactCommon"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/callinvoker"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/react/renderer/graphics/platform/cxx"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/runtimeexecutor"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/yoga"
                "${PYTORCH_INCLUDE_DIRS}"
                "../cxx/src"
                "src/main/cpp"
        )
else()
        file (GLOB LIBFBJNI_INCLUDE_DIR "${BUILD_DIR}/fbjni-*-headers.jar/")

        target_include_directories(
                ${PACKAGE_NAME}
                PRIVATE
                "${LIBFBJNI_INCLUDE_DIR}"
                "${NODE_MODULES_DIR}/react-native/React"
                "${NODE_MODULES_DIR}/react-native/React/Base"
                "${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/jni"
                "${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni"
                "${NODE_MODULES_DIR}/react-native/ReactCommon"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/callinvoker"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi"
                "${NODE_MODULES_DIR}/react-native/ReactCommon/runtimeexecutor"
                "${PYTORCH_INCLUDE_DIRS}"
                "../cxx/src"
                "src/main/cpp"
        )
endif()

# find libraries

file (GLOB LIBRN_DIR "${BUILD_DIR}/react-native-0*/jni/${ANDROID_ABI}")
file (GLOB PYTORCH_LINK_DIRS "${BUILD_DIR}/pytorch_android_lite*.aar/jni/${ANDROID_ABI}")

find_library(
        LOG_LIB
        log
)

if(${REACT_NATIVE_MINOR_VERSION} LESS 71)
        find_library(
                FBJNI_LIBRARY
                fbjni
                PATHS ${LIBRN_DIR}
                NO_CMAKE_FIND_ROOT_PATH
        )

        find_library(
                REACT_NATIVE_JNI_LIB
                reactnativejni
                PATHS ${LIBRN_DIR}
                NO_CMAKE_FIND_ROOT_PATH
        )
endif()

find_library(
        PYTORCH_LIBRARY
        pytorch_jni_lite
        PATHS ${PYTORCH_LINK_DIRS}
        NO_CMAKE_FIND_ROOT_PATH
)

if(${REACT_NATIVE_MINOR_VERSION} GREATER_EQUAL 71)
        target_link_libraries(
                ${PACKAGE_NAME}
                ReactAndroid::folly_runtime
                ReactAndroid::glog
                ReactAndroid::jsi
                ReactAndroid::reactnativejni
                fbjni::fbjni
                ${PYTORCH_LIBRARY}
        )
elseif(${REACT_NATIVE_MINOR_VERSION} LESS 66)
        # JSI lib didn't exist on RN 0.65 and before. Simply omit it.
        set (JSI_LIB "")
else()
        # For RN 0.66+, use the distributed libjsi.so
        find_library(
                JSI_LIB
                jsi
                PATHS ${LIBRN_DIR}
                NO_CMAKE_FIND_ROOT_PATH
        )
endif()

# linking

target_link_libraries(
        ${PACKAGE_NAME}
        ${LOG_LIB}
        ${REACT_NATIVE_JNI_LIB}
        ${PYTORCH_LIBRARY}
        ${FBJNI_LIBRARY}
        ${JSI_LIB}
        android
)
