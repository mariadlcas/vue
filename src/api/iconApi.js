import axios from "axios"

const iconApi = axios.create({
    baseURL: 'https://opensalus-api.azurewebsites.net/' ,
    headers : { "accept": "*/*","Content-Type": "application/octet-stream",},
    credentials: 'include'
})

export default iconApi
// headers : {
//     "Authorization": localStorage.getItem("DoubleFactorToken")
// }