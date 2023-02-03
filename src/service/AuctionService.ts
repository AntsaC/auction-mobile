import axios from "axios";
import {baseUrl, bearer} from "./Common";

const findAll = async (authId: string) => {
    return (await axios.get<any>(baseUrl + `membres/${authId}/encheres`, bearer())).data
}

const save = async (authId: string, auction: any) => {
    return (await axios.post<any>(baseUrl + `membres/${authId}/encheres`, auction, bearer())).data
}

const AuctionService = {
    findAll,
    save
}

export default AuctionService;