import {FC} from "react";
import {IonList} from "@ionic/react";
import RechargeListItem from "./RechargeListItem";
import {Recharge} from "../../model/Recharge";

interface Props {
    recharges: Array<Recharge>
}

export const RechargeHistory: FC<Props> = ({recharges}) => {

  return (
      <IonList>
          {
              recharges.map((value, index) => (
                  <RechargeListItem
                      key={index}
                      recharge={value}
                  />
              ))
          }
      </IonList>
  )
}

