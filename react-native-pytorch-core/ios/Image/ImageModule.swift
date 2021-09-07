/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Foundation

@objc(ImageModule)
public class ImageModule: NSObject {

    static let REACT_MODULE = "PyTorchCoreImageModule"

    enum ImageModuleError : Error {
        case castingObject
        case castingDict
    }

    @objc
    public func getName() -> String {
        return ImageModule.REACT_MODULE
    }

    @objc(fromURL:resolver:rejecter:)
    public func fromURL(_ urlString: NSString, resolver resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) {
        if let cfURL = CFURLCreateWithString(nil, urlString, nil),
        let imageSource = CGImageSourceCreateWithURL(cfURL, nil),
        let image = CGImageSourceCreateImageAtIndex(imageSource, 0, nil) {
            let bitmapImage = Image(image: image)
            let ref = JSContext.wrapObject(object: bitmapImage).getJSRef()
            resolve(ref)
        } else {
            reject(RCTErrorUnspecified, "Couldn't create image from URL", nil)
        }
    }

    @objc(fromBundle:resolver:rejecter:)
    public func fromBundle(_ assetImage: NSDictionary, resolver resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) {
        DispatchQueue.main.sync {
            if let dictionary = assetImage as? [AnyHashable: Any] {
                let uiImage = Macros.toUIImage(dictionary)
                if let cgImage = uiImage.cgImage {
                    let bitmapImage = Image(image: cgImage)
                    let ref = JSContext.wrapObject(object: bitmapImage).getJSRef()
                    resolve(ref)
                }
            } else {
                reject(RCTErrorUnspecified, "Couldn't create image from bundle", nil)
            }
        }
    }

    public static func unwrapImage(_ imageRef: NSDictionary) throws -> IImage {
        guard let ref = imageRef["ID"] as? String else { throw ImageModuleError.castingDict }
        let castedImage = try JSContext.unwrapObject(jsRef: ["ID": ref]) as? IImage
        guard let image = castedImage else { throw ImageModuleError.castingObject }
        return image
    }

    public static func unwrapImage(_ imageRef: String) throws -> IImage {
        let castedImage = try JSContext.unwrapObject(jsRef: ["ID": imageRef]) as? IImage
        guard let image = castedImage else { throw ImageModuleError.castingObject }
        return image
    }

    @objc
    public func getWidth(_ imageRef: NSDictionary) -> Any {
        do {
            let image = try ImageModule.unwrapImage(imageRef)
            return NSNumber(value: Float(image.getWidth()));
        } catch {
            print("Invalid image reference in getWidth")
            return -1
        }
    }

    @objc
    public func getHeight(_ imageRef: NSDictionary) -> Any {
        do {
            let image = try ImageModule.unwrapImage(imageRef)
            return NSNumber(value: Float(image.getHeight()));
        } catch {
            print("Invalid image reference in getHeight")
            return -1
        }
    }

    @objc(scale:sx:sy:resolver:rejecter:)
    public func scale(_ imageRef: NSDictionary, sx: NSNumber, sy: NSNumber, resolver resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) {
        do {
            let image = try ImageModule.unwrapImage(imageRef)
            let scaledImage = try image.scale(sx: CGFloat(truncating: sx), sy: CGFloat(truncating: sy))
            let ref = JSContext.wrapObject(object: scaledImage).getJSRef()
            resolve(ref)
        } catch {
            reject(RCTErrorUnspecified, "Invalid image reference in scale: \(error)", error)
        }
    }

    @objc(release:resolver:rejecter:)
    public func release(_ imageRef: NSDictionary, resolver resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) {
        do {
            if let imageRef = imageRef as? [ String: String] {
                try JSContext.release(jsRef: imageRef)
            }
            resolve(nil)
        } catch {
            reject(RCTErrorUnspecified, "Invalid image reference in release: \(error)", error)
        }
    }
}