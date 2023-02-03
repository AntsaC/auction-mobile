import axios from "axios";
import {baseUrl, bearer} from "./Common";

const findByMemberId = async (id: string) => {
    return (await axios.get<any>(baseUrl + `membres/${id}/comptes`, bearer())).data
}

const recharge = async (id: string, solde: number) => {
    return (await axios.post<any>(baseUrl + `membres/${id}/comptes`,{solde: solde}, bearer())).data
}

const findRechargeHistory = async (id: string) => {
    return (await axios.get<any>(baseUrl + `membres/${id}/recharges`, bearer())).data
}

const AccountService = {
    findByMemberId,
    recharge,
    findRechargeHistory
}

export default AccountService;