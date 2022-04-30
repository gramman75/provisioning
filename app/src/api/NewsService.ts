import axios from "axios";
import HackerNewsService from "./HackerNewsService";
class NewsService extends HackerNewsService{

    fetchList() : Promise<any> {
        return axios.get( process.env.VUE_APP_BASE_URL + '/news/1.json');
    }
} 

export default new NewsService();