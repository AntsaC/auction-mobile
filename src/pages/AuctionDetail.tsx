import React, {FC, useEffect, useState} from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import AuctionList from "../components/auction/AuctionList";
import MyFab from "../components/shared/MyFab";
import {Auction} from "../model/Auction";
import {MySpinner} from "../components/shared/MySpinner";
import {useParams} from "react-router";

interface Props {
    auctions: Array<Auction>
}

const AuctionDetail: FC<Props> = ({auctions}) => {
    const [auction, setAuction] = useState<Auction>({
        id_enchere: '',
        membre_id: -1,
        owner_id: -1,
        prix_minimum: -1,
        photos: [],
        description: '',
        date_fin: '',
        date_debut: '',
        statut: '',
        prix_courant: -1,
        categorie: '',
        categorie_id: 1,
        owner: ''
    });

    const { id } = useParams<{ id: string; }>();
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        setLoading(true)
         if(auctions.length !== 0) {
            setAuction(auctions.filter(value => value.id_enchere == id)[0]);
            setLoading(false)
         }
        }, [auctions])

  return (
      <IonPage>
                <IonContent fullscreen>
                    {
                        loading ? 
                            <MySpinner />
                            :
<>
                        <div>
                    <img src={auction.photos.length === 0 ? '' : auction.photos[0]}/>
                </div>
                <div className={"ion-margin-horizontal"}>
                    <div style={{display: 'flex'}} className={"ion-justify-content-between"}>
                        <h6>Current price</h6>
                        <h3>{auction.prix_courant} $</h3>
                    </div>
                    <div style={{display: 'flex'}} className={"ion-justify-content-between"}>
                        <h6>End game</h6>
                        <h6>{auction.date_fin.substring(0,10)}</h6>
                    </div>
                    <h4><strong>{auction.categorie}</strong></h4>
                    <p>
                        {auction.description}
                    </p>
                </div>
                    </>
                    }
                </IonContent>
      </IonPage>
  )
}

export default AuctionDetail;