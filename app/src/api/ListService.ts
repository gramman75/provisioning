import axios from "axios";

class ListService {
    fetchList(name: String){
        return axios.get(process.env.VUE_APP_BASE_URL + `/${name}/1.json`);
    }
}

export default new ListService();