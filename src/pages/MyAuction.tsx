import React, {FC} from "react";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import AuctionList from "../components/auction/AuctionList";
import MyFab from "../components/shared/MyFab";
import {Auction} from "../model/Auction";
import {MySpinner} from "../components/shared/MySpinner";
import {person} from "ionicons/icons";
import { useHistory } from "react-router";
import AuthService from "../service/AuthService";


interface Props {
    loading: boolean,
    auctions: Array<Auction>,
}

const MyAuction: FC<Props> = ({auctions, loading}) => {

  const history = useHistory();
  
  async function logOut() {
  await AuthService.logOut();
  history.push('/login');
}

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>My Auction</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => logOut()}>
                <IonIcon icon={person}>
                </IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            {
                loading ?
                    <MySpinner /> :
                    <AuctionList auctions={auctions} />
            }
            <MyFab />
        </IonContent>
      </IonPage>
  )
}

export default MyAuction;