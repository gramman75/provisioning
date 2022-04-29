import { defineStore } from 'pinia'

const useStore = defineStore('main', {
    state : () => {
        return {
            counter : 0,
            name : 'pinia',
            isAdmin : true
        }
    }
})


const useNews = defineStore('news', {
    state : () => {
        return {
            counter : 0,
            name : 'useNews',
            isAdmin :false 
        }
    }
})

export {
    useStore, useNews
}