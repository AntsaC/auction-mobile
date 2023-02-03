import React, {FC, useEffect, useState} from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import BalanceBox from "../components/account/BalanceBox";
import {RechargeHistory} from "../components/account/RechargeHistory";
import {Recharge} from "../model/Recharge";
import AccountService from "../service/AccountService";

const Account: FC = () => {

    const [recharges, setRecharges] = useState<Array<Recharge>>([]);

    useEffect(function () {
        historyRecharge()
    }, [])

    async function historyRecharge() {
        try {
            let rechar = await AccountService
                .findRechargeHistory(sessionStorage.getItem("authId")!)
            setRecharges(rechar.data)
        } catch (e: any) {
            alert(e)
        }
    }

    function onRecharge() {
        historyRecharge()
    }

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <BalanceBox onRecharge={() => onRecharge()} />
            <RechargeHistory recharges={recharges} />
        </IonContent>
      </IonPage>
  )
}

export default Account;