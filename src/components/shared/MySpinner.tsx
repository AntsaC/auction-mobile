import {FC} from "react";
import {IonSpinner} from "@ionic/react";

import "./MySpinner.css"

export const MySpinner: FC = () => {
  return (
      <div className={"spinner-container"}>
          <IonSpinner name={"circular"} color={"primary"}></IonSpinner>
      </div>
  )
}