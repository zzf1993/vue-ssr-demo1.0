<template>
    <div>
        <ul>
            <li v-for="item,index in lists">
                <span>{{item.id}}</span>
                <span>{{item.addTime}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import{mapActions} from '../store/index.js'
    export default{
        name:'index',
        //获取所需ssr数据
        asyncData (store, route) {
            return store.dispatch('getCaseListData') // 服务端渲染触发
        },
        data(){
            return{
                caseLists:[],
                gets:{}
            }
        },
        created() {
            
        },
        computed: {
            lists (){
                return this.$store.getters.getCaseList;
            }
        },
        methods:{

        },
        mounted() {
            
        }
    }
</script>