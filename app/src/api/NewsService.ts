import NewsModel from "@/models/NewsModel";
import axios from "axios";
import {useNews} from '@/store/news'
class NewsService {


    async fetchNewsList() : Promise<any> {
        const newsStore = useNews();
        await axios.get( process.env.VUE_APP_BASE_URL + '/news/1.json');

    }

} 

export default new NewsService();