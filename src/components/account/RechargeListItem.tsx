import {FC} from "react";
import {IonCard, IonChip, IonItem, IonLabel} from "@ionic/react";
import {Recharge} from "../../model/Recharge";

interface Props {
    recharge: Recharge,
}

const RechargeListItem: FC<Props> = ({recharge}) => {
  return (
      <IonCard className={"ion-padding-vertical"}>
          <IonItem lines={"none"} >
              <IonLabel className={"ion-margin-start"}>
                  <h2><strong>{recharge.solde} $</strong></h2>
                  <small>{recharge.dates}</small>
              </IonLabel>
              <IonChip slot={"end"} color={recharge.etat === 0 ? 'success' : 'primary'}>{recharge.etat === 0 ? 'Non valide' : 'Valide'}</IonChip>
          </IonItem>
      </IonCard>
  )
}

export default RechargeListItem;