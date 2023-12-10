import { fakeProducts } from "../../shared/constants/requestsVariables";
import axios from 'axios';

export async function getProductsData () {
    return await axios.get(fakeProducts, {})
}