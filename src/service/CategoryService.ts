import axios from "axios";
import {baseUrl} from "./Common";

const findAll = async () => {
    return (await axios.get<any>(baseUrl + `categories`)).data
}

const CategoryService = {
    findAll
}

export default CategoryService;