import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import EnchereBrand from "../components/shared/EnchereBrand";
import "../components/shared/Global.css"
import SignUpForm from "../components/signup/SignUpForm";

const SignUp: React.FC = () => {
  return (
      <IonPage>
        <IonContent className={"ion-padding-horizontal"}>
            <div className={"form-container"}>
                <EnchereBrand />
                <SignUpForm />
            </div>
        </IonContent>
      </IonPage>
  )
}

export default SignUp;