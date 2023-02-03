import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import EnchereBrand from "../components/shared/EnchereBrand";
import LoginForm from "../components/login/LoginForm";
import "../components/shared/Global.css"

const Login: React.FC = () => {
  return (
      <IonPage>
        <IonContent className={"ion-padding-horizontal"}>
            <div className={"form-container"}>
                <EnchereBrand />
                <LoginForm />
            </div>
        </IonContent>
      </IonPage>
  )
}

export default Login;