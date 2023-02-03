import {FC, useEffect, useState} from "react";
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, useIonToast} from "@ionic/react";
import {Route} from "react-router-dom";
import MyAuction from "./MyAuction";
import NewAuction from "./NewAuction";
import Account from "./Account";
import {logoEuro, newspaper} from "ionicons/icons";
import {Auction} from "../model/Auction";
import AuctionService from "../service/AuctionService";
import AuctionDetail from "./AuctionDetail";
import MyAvatar from "../components/shared/MyAvatar";

const MainContent: FC = () => {

    //State lifting
    const [auctions, setAuctions] = useState<Array<Auction>>([]);
    const [loading, setLoading] = useState(true);


    const [present] = useIonToast();

    useEffect(function () {
        findMyAuctions()
    }, [])

    async function findMyAuctions() {
        try{
            setAuctions(
                (await AuctionService.findAll(sessionStorage.getItem("authId")!))
                    .data
            )
            setLoading(false)
        } catch(e: any){
            present({
                message: e.response !== undefined ? e.response.data.error.message : 'CONNECTION ERROR',
                color: "danger",
                duration: 5000
            })
        }
    }

  return (
      <IonPage>
          <IonTabs>
              <IonRouterOutlet>
                  <Route exact path="/me/auction"
                    render={() => (<MyAuction auctions={auctions} loading={loading} />)}
                  />
                  <Route exact path="/me/new-auction"
                    render={() => (<NewAuction onSave={findMyAuctions} />)}
                  />
                  <Route exact path="/me/auctions/:id"
                         render={() => (<AuctionDetail auctions={auctions} />)}
                  />
                  <Route exact path="/me/account" component={Account} />
              </IonRouterOutlet>
              <IonTabBar slot={"bottom"}>
                  <IonTabButton tab={"/me/auction"} href={"/me/auction"}>
                      <IonIcon icon={newspaper}></IonIcon>
                      <IonLabel>Auctions</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab={"/me/account"} href={"/me/account"}>
                      <IonIcon icon={logoEuro}></IonIcon>
                      <IonLabel>Account</IonLabel>
                  </IonTabButton>
                  <MyAvatar />
              </IonTabBar>
          </IonTabs>
      </IonPage>
  )
}

export default MainContent;