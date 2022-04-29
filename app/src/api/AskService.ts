import axios from "axios";

class AskService {
    fetchAskList() : Promise<any> {
        return axios.get(process.env.VUE_APP_BASE_URL +'/jobs/1.json');
    }
}


export default new AskService();