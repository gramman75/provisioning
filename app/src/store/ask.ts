import AskService from "@/api/AskService";
import AskModel from "@/models/AskModel";
import ItemModel from "@/models/ItemModel";
import _ from "lodash";
import { defineStore } from "pinia";

export const useAsk = defineStore('ask', {
    state: () =>{
        return {
            ask: Array<AskModel>() ,
            item : {} as ItemModel
        }
    },
    getters : {
        getAsk: (state) => state.ask,
        getItem: (state) => state.item,
        getPrefixAsk: (state) =>{
            let prefixJobs = Array<AskModel>();
            for (let index = 0; index < state.ask.length; index++) {
                let newJob =  _.cloneDeep(state.ask[index]);
                newJob.title = AskService.setTitlePrefix(newJob.type, newJob.title); 
                prefixJobs.push(newJob);
            }

            return prefixJobs;
        }
    },

    actions : {
        async findAll() {
            let result = await AskService.fetchList();
            this.ask = result.data;
        },
        async findItem(id: String) {
            let result = await AskService.fetchItem(id);
            this.item = result.data;

        }
    }

})