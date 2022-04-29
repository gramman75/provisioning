import NewsService from '@/api/NewsService'
import NewsModel from '@/models/NewsModel'
import _ from 'lodash'
import { defineStore } from 'pinia'

export const useNews = defineStore('news', {
    state : () => {
        return {
           news : Array<NewsModel>(),
        }
    },
    getters : {
        originNews : (state) => state.news,
        customNews : (state)  =>{
            debugger;
            let c : Array<NewsModel> = [];
            for(let i = 0 ; i < state.news.length; i++){
                let newObj:NewsModel = _.cloneDeep(state.news[i]);
                newObj.title = `custom ${newObj.title}`;
                c.push(newObj);

            }
            return c; 
            
        }
    },
    actions : {
        async getNews() {
            let result = await NewsService.fetchNewsList();
            this.news = result.data;
            debugger;
        }
    }
})