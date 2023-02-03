import {Authenticable} from "../model/Authenticable";
import axios from "axios";
import {baseUrl, bearer} from "./Common";

const login = async (auth: Authenticable) => {
    let token = (await axios.post<any>(baseUrl + `login`, auth)).data
    sessionStorage.setItem("token", token.data.value);
    sessionStorage.setItem("authId", token.data.authId);
}

const logOut = async () => {
    await axios.delete<any>(baseUrl + `logout`, bearer())
    sessionStorage.clear();
}

const signUp = async (auth: Authenticable) => {
    return (await axios.post<any>(baseUrl + `membres`, auth)).data
}

const AuthService = {
    login,
    logOut,
    signUp
}

export default AuthService;