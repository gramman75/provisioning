import {defineStore} from "pinia"

export const useMain = defineStore('main', {
    state: () =>{
        return {
            loadingStatus: Boolean()
        }
    },
    getters :{
        getLoadingStatus : (state) => state.loadingStatus,
    },
    actions :{
        startSpinner(){
            this.loadingStatus = true;
        },
        stopSpinnger(){
            this.loadingStatus = false;
        }
    }
})