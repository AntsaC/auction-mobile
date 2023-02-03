import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {useState} from "react";
import {AuctionPhoto} from "../model/AuctionPhoto";

export function usePhotoGallery() {

    const [photos, setPhotos] = useState<AuctionPhoto[]>([])

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });

        const fileName = new Date().getTime() + '.jpeg';
        const data = await base64FromPath(photo.webPath!)

        const phot: AuctionPhoto = {
            filePath: fileName,
            webviewPath: photo.webPath,
            data: data
        }

        const newPhotos = [
            phot,
            ...photos
        ]
        setPhotos(newPhotos)
    };

    return {
        photos,
        takePhoto
    };
}

export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            if(typeof reader.result === 'string'){
                resolve(reader.result)
            } else {
                reject('method did not return a string')
            }
        };
        reader.readAsDataURL(blob)
    })
}

