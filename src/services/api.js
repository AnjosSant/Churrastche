import axios from "axios";

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});


export const apiRUA = axios.create({
  baseURL: "https://discover.search.hereapi.com/v1/",
});
