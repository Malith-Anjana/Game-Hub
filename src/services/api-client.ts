import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'e03c828b76994d2184193ef01d1e13b3'
    }
})