import {FC} from "react";
import {IonList} from "@ionic/react";
import AuctionListItem from "./AuctionListItem";
import {Auction} from "../../model/Auction";

interface Props {
    auctions: Array<Auction>,
}

const AuctionList: FC<Props> = ({auctions}) => {


  return (
      <IonList>
          {
              auctions.map((auction) => (
                  <AuctionListItem
                      recharge={auction}
                      key={auction.id_enchere}
                  />
              ))
          }
      </IonList>
  )
}

export default AuctionList;