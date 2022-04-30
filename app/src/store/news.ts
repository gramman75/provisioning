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
        getNews : (state) => state.news,
        getPrefixNews: ( {news})  =>{
            let c : Array<NewsModel> = [];
            for(let i = 0 ; i < news.length; i++){
                let newObj:NewsModel = _.cloneDeep(news[i]);
                newObj.title = NewsService.setTitlePrefix(newObj.type, newObj.title); 
                c.push(newObj);

            }
            return c; 
            
        }
    },
    actions : {
        async findAll() {
            let result = await NewsService.fetchList();
            this.news = result.data;
            return this.news;
        },
        findByTitle(title: string) : Array<NewsModel>{

            debugger;
            let filteredNews = this.news.filter(news =>{
                news.title.includes(title)
            })

            return filteredNews;
        }
    }
})

// const unsubscribe = useNews().$onAction(
//     ({
//         name, store, args, after, onError
//     }) => {
//         const startTime = Date.now()
//         console.log(`Start "${name}" with params [${args.join(', ')}].`)

//         after((result) => {
//         console.log(
//             `Finished "${name}" after ${
//             Date.now() - startTime
//             }ms.\nResult: ${result}.`
//         )
//         })

//         // this will trigger if the action throws or returns a promise that rejects
//         onError((error) => {
//             console.warn(
//                 `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
//             )
//         })
//     }
// )