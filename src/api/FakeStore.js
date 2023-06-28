import axios from "axios";

export const FakeStore = axios.create({
    baseURL:"https://fakestoreapi.com"
})