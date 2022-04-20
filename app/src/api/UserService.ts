import axios, {Axios} from "axios";
import _ from "lodash";
import TopObject from "./TopObject";

class UserService extends TopObject{
    getAll(): Promise<any> {
        return axios.get('https://api.hnpwa.com/v0/jobs/1.json');
    }

    getTemplate(param: String): string {
        return ""; 
    }
}

export default new UserService();