import axios from "axios";
import HackerNewsService from "./HackerNewsService";

class AskService extends HackerNewsService{
    fetchList() : Promise<any> {
        return axios.get(process.env.VUE_APP_BASE_URL +'/ask/1.json');
    }
}


export default new AskService();