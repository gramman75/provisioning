import ListView from '@/views/ListView.vue'

export default function createListView(name: string){
    return {
        name,
        created(){

        },
        render(createElement){
            createElement(ListView);
        }
    }
}