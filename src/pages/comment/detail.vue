<template>
    <d2-container >
<!--贴文-->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{list.title}} </span>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                <i class="fa fa-thumbs-down" aria-hidden="true"></i>
            </div>
               <li v-html="list.content" style="list-style: none">{{list.content}}</li>
        </el-card>

<!--评论-->
        <el-card class="box-card">
            <el-button type="primary">回贴</el-button>
        </el-card>
    </d2-container>
</template>
<script>
  import axios from 'axios';
  import moment from 'moment';

  export default {
    data() {
      return {
          list:[],
          likes: 0,
          dislikes: 0,
          action: null,
          moment,
          loading: false,
          pagination: {
              currentPage: 1,
              pageSize: 5,
              total: 0
          }
      }
    },

    methods: {
        getData(id){  //获取详情页内容
            var api = 'http://localhost:8082/getDetail/' + id;
            axios.get(api).then(response=>{
                console.log(response);
                this.list = response.data;
            }).catch(function(err){
                console.log(err)
            })
        },
        like() {
            this.likes = 1;
            this.dislikes = 0;
            this.action = 'liked';
        },
        dislike() {
            this.likes = 0;
            this.dislikes = 1;
            this.action = 'disliked';
        },

    },
    mounted(){
      //console.log(this.$route.params); //获取动态路由传值
        let id = this.$route.params.id;
        this.getData(id);
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