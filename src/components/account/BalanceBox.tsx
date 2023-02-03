import {FC, useEffect, useState} from "react";

import "./BalanceBox.css"
import {IonButton, useIonToast} from "@ionic/react";
import {OverlayEventDetail} from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import {RechargeModal} from "./RechargeModal";
import AccountService from "../../service/AccountService";

interface Props {
    onRecharge: CallableFunction
}

const BalanceBox: FC<Props> = ({onRecharge}) => {
    const [balance, setBalance] = useState(0);
    const [present] = useIonToast();

    useEffect(function () {
        getBalance()
    },[])

    async function getBalance() {
        try {
            let balance = await AccountService.findByMemberId(sessionStorage.getItem("authId")!);
            setBalance(balance.data.solde);
        } catch (e: any) {
            present({
                message: e.response !== undefined ? e.response.data.error.message : 'CONNECTION ERROR',
                color: "danger",
                duration: 5000
            })
        }
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if(ev.detail.role === 'confirm'){
            recharge(ev.detail.data)
        }
    }

    function openRechargeModal() {

    }

    async function recharge(amount: number) {
        try {
            await AccountService.recharge(sessionStorage.getItem("authId")!, amount)
            onRecharge()

            present({
                message: "Success",
                color: "success",
                duration: 2000
            })
        } catch (e: any) {
            present({
                message: e.response !== undefined ? e.response.data.error.message : 'CONNECTION ERROR',
                color: "danger",
                duration: 5000
            })
        }
    }

    return (
      <div className={"box-container"}>
          <div className={"box"}>
              <h6><strong>Total Balance</strong></h6>
              <h1>{balance} $</h1>
              <IonButton id="open-recharge" className={"ion-margin-top"} onClick={() => openRechargeModal()}>
                  Recharge
              </IonButton>
              <RechargeModal onWillDismiss={onWillDismiss} />
          </div>
      </div>
  )
}

export default BalanceBox;