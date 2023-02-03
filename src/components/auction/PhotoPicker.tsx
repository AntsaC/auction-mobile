import {FC} from "react";
import {IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonRow} from "@ionic/react";
import {camera} from "ionicons/icons";
import {usePhotoGallery} from "../../hooks/usePhotoGallery";
import {AuctionPhoto} from "../../model/AuctionPhoto";

interface Props {
    photos: Array<AuctionPhoto>,
    takePhoto: CallableFunction
}

const PhotoPicker: FC<Props> = ({photos, takePhoto}) => {

  return (
      <div className={"ion-margin-top"}>
          <div className={"ion-justify-content-around"}>
              <h5>Photos ({photos.length})</h5>
          </div>
          <IonGrid>
              <IonRow>
                  {
                      photos.map((photo, index) => (
                          <IonCol size="6" key={index}>
                              <IonImg src={photo.webviewPath} />
                          </IonCol>
                      ))
                  }
                  <IonCol>
                      <IonButton fill={"outline"} onClick={() => takePhoto()}>
                          <IonIcon icon={camera} />
                      </IonButton>
                  </IonCol>
              </IonRow>
          </IonGrid>
      </div>
  )
}

export default PhotoPicker;