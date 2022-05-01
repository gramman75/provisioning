import axios from "axios";
import HackerNewsService from "./HackerNewsService";

class AskService extends HackerNewsService{
    fetchList() : Promise<any> {
        return axios.get(process.env.VUE_APP_BASE_URL +'/ask/1.json');
    }

    fetchItem(id: String) : Promise<any> {
        return axios.get(`${process.env.VUE_APP_BASE_URL}/item/${id}.json`);
    }
}



export default new AskService();