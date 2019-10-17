<template>
  <d2-container>
    <div>
        <Button v-on:add="add"></Button>
       <h1> 标题是 {{title}} </h1>
   
    </div>
  </d2-container>
</template>


<script>
import Button from './button'
export default {
    components:{
      Button
    },
    data(){
      return{
        title:''
      }
    },
    methods:{
      add:function(title){
        this.title = title
      }
    }
 

}
</script>