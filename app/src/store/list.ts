import { defineStore } from "pinia";
import ListModel from '@/models/ListModel';
import ListService from '@/api/ListService'


export const useList = defineStore('list',{
    state: ()=>{
        return {
            list: Array<ListModel>()

        }
    },
    getters : {
        getList: (state) => state.list,

    },
    actions: {
        async findList(name: string) {
            let result = await ListService.fetchList(name);
            this.list = result.data;
            
        }

    }
})