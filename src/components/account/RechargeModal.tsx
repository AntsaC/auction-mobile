import {FC, useRef} from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonToolbar
} from "@ionic/react";

interface Props {
    onWillDismiss: CallableFunction
}

export const RechargeModal: FC<Props> = ({onWillDismiss}) => {

    const modal = useRef<HTMLIonModalElement>(null)
    const input = useRef<HTMLIonInputElement>(null)

    function recharge() {
        modal.current?.dismiss(input.current?.value, 'confirm')
    }

    return (
      <IonModal ref={modal} trigger="open-recharge" onWillDismiss={(ev) => onWillDismiss(ev)} >
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot={"start"}>
                      <IonButton
                          onClick={() => modal.current?.dismiss()}
                      >
                          Cancel
                      </IonButton>
                  </IonButtons>
                  <IonButtons slot={"end"}>
                      <IonButton onClick={() => recharge()}>
                          Recharge
                      </IonButton>
                  </IonButtons>
              </IonToolbar>
          </IonHeader>
          <IonContent className={"ion-padding"}>
              <IonItem>
                  <IonLabel>Your amount</IonLabel>
                  <IonInput
                      ref={input}
                      type={"number"}
                  />
              </IonItem>
          </IonContent>
      </IonModal>
  )
}