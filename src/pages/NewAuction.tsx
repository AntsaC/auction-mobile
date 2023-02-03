import React, {FC} from "react";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import AuctionForm from "../components/auction/AuctionForm";

interface Props {
    onSave: CallableFunction
}

const NewAuction: FC<Props> = ({onSave}) => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>New Auction</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div>
                <AuctionForm onSave={onSave} />
            </div>
        </IonContent>
      </IonPage>
  )
}

export default NewAuction;