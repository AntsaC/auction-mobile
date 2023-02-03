import {FC} from "react";
import {IonCard, IonChip, IonItem, IonLabel, IonThumbnail} from "@ionic/react";
import {Auction} from "../../model/Auction";

interface Props {
    recharge: Auction,
}

const AuctionListItem: FC<Props> = ({recharge}) => {
  return (
      <IonCard className={"ion-padding-vertical"}>
          <IonItem href={"me/auctions/"+recharge.id_enchere+""} lines={"none"} >
              <IonThumbnail>
                  <img src={recharge.photos.length === 0 ? "assets/icon/icon.png" : recharge.photos[0]}/>
              </IonThumbnail>
              <IonLabel className={"ion-margin-start"}>
                  <h2><strong>{recharge.id_enchere+"-"+recharge.categorie}</strong></h2>
                  <small>{recharge.prix_courant} $</small>
              </IonLabel>
              <IonChip slot={"end"} color={recharge.statut === 'ended' ? 'success' : 'primary'}>{recharge.statut}</IonChip>
          </IonItem>
      </IonCard>
  )
}

export default AuctionListItem;