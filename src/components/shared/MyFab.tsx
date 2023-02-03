import {FC} from "react";
import {IonFab, IonFabButton, IonIcon} from "@ionic/react";
import {add} from "ionicons/icons";

const MyFab: FC = () => {
  return (
      <IonFab
          slot={"fixed"}
          vertical={"bottom"}
          horizontal={"end"}
          className={"ion-margin-end ion-margin-bottom"}
      >
          <IonFabButton routerLink={"/me/new-auction"}>
              <IonIcon icon={add}></IonIcon>
          </IonFabButton>
      </IonFab>
  )
}

export default MyFab;