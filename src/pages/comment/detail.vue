<template>
  <div>
        详情页！！
<!--    <li v-for="item in list" :key="item"> <h2>{{item.title}}</h2></li>-->

<!--      <a-button type="primary">Primary</a-button>-->

  </div>

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
        getData(){  //获取详情页内容
            var api = 'http://localhost:8082/getComment';
            axios.get(api).then(response=>{
                this.list = response.data;
                console.log(this.list)
            }).catch(function(err){
                console.log(err)
            })
        }
  
    },
    mounted(){
      /*console.log(this.$route.params); 获取动态路由传值 */
        var aid = this.$route.params.aid;
        this.getData(aid);
    } 
  };
</script>