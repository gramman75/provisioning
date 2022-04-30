import JobsModel from "@/models/JobsModel";
import axios from "axios";
import HackerNewsService from "./HackerNewsService";

class JobsService extends HackerNewsService{
    
    fetchList(): Promise<any> {
        return axios.get(process.env.VUE_APP_BASE_URL + '/jobs/1.json')
    }
}


export default new JobsService();