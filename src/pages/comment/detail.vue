<template>
    <d2-container >
<!--贴文-->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{list.title}} </span> <br/>
                <img :src="this.$route.query.data[1]" style="border-radius: 55px;width: 50px;height: 50px">
                {{this.$route.query.data[2]}}
                {{this.$route.query.data[4]}}

                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                <i class="fa fa-thumbs-down" aria-hidden="true"></i>
            </div>

               <li v-html="list.content" style="list-style: none">{{list.content}}</li>

        </el-card>

<!--评论-->
<!--        <el-card class="box-card">-->
<!--            <el-button type="primary">回贴</el-button>-->
<!--        </el-card>-->
    </d2-container>
</template>
<script>
  import axios from 'axios';
  import moment from 'moment';
  import { getDetail } from '@/api/comment/getDetail'
  export default {
    data() {
      return {
          list:[],




      }
    },

    methods: {
        getData(id){  //获取详情页内容
          // var api = 'http://localhost:8082/getDetail/' + id;
          // axios.get(api)
            getDetail({
                id: id,
            })
                .then(response=>{
                // console.log(response);
                this.list = response;

            }).catch(function(err){
                console.log(err)
            })
        },



    },
    mounted(){
      //console.log(this.$route.params); //获取动态路由传值
        this.getData(this.$route.params.id);
      //   console.log('okk')
      //   console.log(this.$route.query.data)


    }
  };
</script>

<style>
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 1000px;
    }
</style>