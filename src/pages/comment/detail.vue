<template>
    <d2-container>
  <div>


      <div v-html>{{list.title}}</div>
      <br/>
     <div v-html="list.content"> {{list.content}}</div>




  </div>
    </d2-container>

</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
            list:[]
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
        }
  
    },
    mounted(){
      //console.log(this.$route.params); //获取动态路由传值
        let id = this.$route.params.id;
        this.getData(id);
    } 
  };
</script>