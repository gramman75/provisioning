import UserModel from "@/models/UserModel";
import axios, {Axios} from "axios";
import _ from "lodash";
import HackerNewsService from "./HackerNewsService";

class UserService {
    getUser(name: String | String[]): Promise<any> {
        return axios.get(`${process.env.VUE_APP_BASE_URL}/user/${name}.json`);
    }

}

export default new UserService();