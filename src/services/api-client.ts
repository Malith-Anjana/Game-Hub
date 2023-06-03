import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0c4aef28c6074bbd93d73f4297e66ce3'
    }
})