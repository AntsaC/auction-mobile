import {FC, useState} from "react";
import {IonButton, IonInput, IonItem, IonLabel, useIonToast} from "@ionic/react";

import "./LoginForm.css";
import {useHistory} from "react-router";
import AuthService from "../../service/AuthService";
import { MySpinner } from "../shared/MySpinner";

const LoginForm: FC = () => {

    const history = useHistory();
    const [username,setUsername] = useState("Jonhs");
    const [password,setPassword] = useState("jonhs");

    const [present] = useIonToast();
    const [loading, setLoading] = useState(false);

    async function login() {
        try {
            setLoading(true)
            await AuthService.login({
                username: username,
                password: password
            })
            setLoading(false)
            history.push("/me/auction")
        } catch (e: any) {
            present({
                    message: e.response !== undefined ? e.response.data.error.message : 'CONNECTION ERROR',
                    color: "danger",
                    duration: 5000
            })
            setLoading(false)
        }
    }

    return (
        <>
        {
            loading && <MySpinner />
        }
        <>
            <div className={"form"}>
        <IonItem className={"ion-margin-top"}>
            <IonLabel position={"floating"}>
                Username
            </IonLabel>
            <IonInput
                value={username}
                onIonChange={(e: any) => setUsername(e.target.value)}
            />
        </IonItem>
          <IonItem className={"ion-margin-top"}>
              <IonLabel position={"floating"}>
                  Password
              </IonLabel>
              <IonInput
                  type={"password"}
                  value={password}
                  onIonChange={(e: any) => setPassword(e.target.value)}
              />
          </IonItem>
          <div className={"button-group"}>
              <IonButton onClick={() => login()}>
                  Sign in
              </IonButton>
              <strong className={"ion-text-center"}>or</strong>
              <IonButton onClick={() => history.push("/sign-up")} className={"ion-color-success"}>
                  Create account
              </IonButton>
          </div>
      </div>
        </>
        </>
  )
}

export default LoginForm;