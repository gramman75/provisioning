import NewsModel from "@/models/NewsModel";
import axios from "axios";
import {storeToRefs} from 'pinia'
class NewsService {


    fetchNewsList() : Promise<any> {
        return axios.get( process.env.VUE_APP_BASE_URL + '/news/1.json');

    }

} 

export default new NewsService();