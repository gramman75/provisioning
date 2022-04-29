import axios from "axios";

class JobsService {

    fetchJobsList(): Promise<any>{
        return axios.get(process.env.VUE_APP_BASE_URL + '/jobs/1.json')
    }
}


export default new JobsService();