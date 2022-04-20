<template>
    <div>
        News
        <div v-for="count in counts" :key="count">
            {{count}}
        </div>
        <div v-for="list in lists" :key="list">
            {{list}}
        </div>
        
        <ul v-for="user in users" :key="user.name">
            <li>{{user.name}}</li>
        </ul>

       

        <p>html test {{htmltext}}</p>
        <p>html test <span v-html="htmltext"></span></p>

        <p :id="htmlid">HTML ID</p>
        <p :class="htmlid">HTML ID</p>
        <button :disabled="isDisabled">Button</button>
        <p v-bind="attr">Multi binding</p>
        <p v-if="seen">Show</p>
        <a v-bind:href="url">Daum</a>
        <p><button v-on:click="getNews()">call news</button></p>
        <ul v-for="n in news" :key="n.id" id="header">
            <li>{{n.title}}</li>
        </ul>
        <v-btn @click="incrementCount()">Increment Count</v-btn>
        <!-- <p>
            <div><span>{{ getCount }}</span></div>
        </p> -->
    </div>
</template>

<script lang='ts'>
import {defineComponent, nextTick } from "vue";
import User from "../models/User";
import UserService from "../api/UserService";
import NewsModel from "@/models/NewsModel";
import _ from "lodash";

export default defineComponent({
    // name: "NEWS",

    components: {

    },

    data() {
        return {
            seen: Boolean(), 
            counts: Array<number>(),
            lists : Array<String>(),
            users: Array<User>(),
            news : Array<NewsModel>(),
            htmltext : String(),
            htmlid: String(),
            isDisabled: Boolean(),
            attr : {
                id: 123,
                class : 'class'
            },
            url: String(),
            increment: Number()
        };
    },
    methods : {
        getNews() : void {
            debugger;
            UserService.getAll().then((response) =>{
                this.news =  response.data;
            });

       

            let cnt: number = $('#header').children.length;     

            // console.log(`cnt : $cnt`);

        },
        incrementCount() {
            this.increment++;
        }
    },

    computed : {
        getCount() {
            // return this.increment;
        }
    },
    mounted() {
        this.url = "https://www.daum.net"; 
        this.seen = true;
        this.isDisabled = false;
        this.htmlid = "htmlid";
        this.htmltext = "<B>HI</B>";
        let a : number[] = [1,2,3, 4];
        this.counts = a;
        this.lists = ['a','b','c']
        let u1: User = {
            name: 'kim',
            age: 20
        }
        let u2: User = {
            name: 'lee',
            age: 20
        }
        this.users.push(u1);
        this.users.push(u2);

        // UserService.getAll().then((response) =>{
        //     this.news =  response.data;
        // })

        

  }

});


</script>

<style>

</style>
