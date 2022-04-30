import UserService from "@/api/UserService";
import { defineStore } from "pinia";
import UserModel from "@/models/UserModel";
export const useUser = defineStore('user', {
    state: ()=> {
        return {
            //NOTE: state에서 Tyep지정 방법
            userInfo: undefined as UserModel | undefined
        }
    },
    getters : {
        getUserInfo: (state) => state.userInfo

    },
    actions: {
        async findUser(userName: string | string[]) {
            let result =  await UserService.getUser(userName);
            this.userInfo = result.data;
        }
            

    } 
})