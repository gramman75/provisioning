import JobsService from "@/api/JobsService";
import JobsModel from "@/models/JobsModel";
import { Util } from "@/views/utils/util";
import _ from "lodash";
import { defineStore } from "pinia";


export const useJobs = defineStore('jobs', {
    state : () => {
        return {
            jobs : Array<JobsModel>() 
        }
    },
    getters : {
        getJobs: (state) => state.jobs,
        getPrefixJobs: (state) =>{
            let prefixJobs = Array<JobsModel>();
            for (let index = 0; index < state.jobs.length; index++) {
                let newJob =  _.cloneDeep(state.jobs[index]);
                newJob.title = JobsService.setTitlePrefix(newJob.type, newJob.title); 
                prefixJobs.push(newJob);
            }

            return prefixJobs;
        }

    },
    actions: {
        async findAll() {
            let result = await JobsService.fetchList();
            this.jobs = result.data;
        }
    }
})