import axios from "axios";

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});


const apiRUA = axios.create({
  baseURL: "https://discover.search.hereapi.com/v1/",
});

export default apiRUA;

