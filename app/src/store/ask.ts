import AskService from "@/api/AskService";
import AskModel from "@/models/AskModel";
import _ from "lodash";
import { defineStore } from "pinia";

export const useAsk = defineStore('ask', {
    state: () =>{
        return {
            ask: Array<AskModel>() 
        }
    },
    getters : {
        getAsk: (state) => state.ask,
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
        }
    }

})