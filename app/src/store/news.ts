import NewsService from '@/api/NewsService'
import NewsModel from '@/models/NewsModel'
import { defineStore } from 'pinia'

export const useNews = defineStore('news', {
    state : () => {
        return {
           news : Array<NewsModel>(),
           customNews : Array<NewsModel>()
        }
    },
    getters : {
        orignNews : (state) => state.news,
        customNews : (state)  =>{
            state.news.forEach(news => {
                `custom ${news.title}`
            })
        }
    },
    actions : {
        async getNews() {
            this.news =  await NewsService.fetchNewsList();
        }
    }
})