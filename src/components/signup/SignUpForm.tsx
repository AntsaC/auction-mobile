import {FC, useState} from "react";
import {IonButton, IonInput, IonItem, IonLabel, useIonToast} from "@ionic/react";
import {useHistory} from "react-router";
import AuthService from "../../service/AuthService";

const SignUpForm: FC = () => {

    const history = useHistory();
    const [username,setUsername] = useState("Fandry");
    const [password,setPassword] = useState("fandry");

    const [present] = useIonToast();

    async function signup() {
        try {
            let user = await AuthService.signUp({
                username: username,
                password: password
            })

            await AuthService.login({
                username: username,
                password: password
            })
            history.push("/me/auction")
        } catch (e: any) {
            present({
                message: e.response !== undefined ? e.response.data.error.message : 'CONNECTION ERROR',
                color: "danger",
                duration: 5000
            })
        }
    }

    return (
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
          <IonItem className={"ion-margin-top"}>
              <IonLabel position={"floating"}>
                  Confirm password
              </IonLabel>
              <IonInput

              />
          </IonItem>
          <IonButton className={"ion-margin-top"} onClick={() => signup()}>
              Create
          </IonButton>
      </div>
  )
}

export default SignUpForm;