 <template>
    <d2-container>
      <div>
        <!-- <Button v-on:add="add"></Button> -->
          <ul>
              <li v-for="item in list" :key='item' style="list-style: none" >
<!--                 <router-link :to="'comment/detail/'+ item.id">头像：{{item.avatar}}</router-link> -->
                  <img :src="item.avatar" style="border-radius: 25px;width: 50px;height: 50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <router-link :to="'comment/detail/'+ item.id">{{item.title}}</router-link>  <br/>

                  <hr style="FILTER: progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)" width="900px" color=#e5e5e4 SIZE=1 />


              </li>
          </ul>





     
        </div>
    </d2-container>
  </template>

  <script>
  import Button from './button'
  import Detail from './detail'
  import axios from 'axios'
    export default {
      components:{
          // Button,Detail
      },
      data() {
        return {
          info: null,
          list:[],


        }
      },
      methods:{
         requestData(){
            axios.get('http://s43.natfrp.org:11439/contents').then(response=>{
              this.list = response.data.data
                console.log(this.list)
                console.log(111)
            }).catch(function(err){
              console.log(err);
            });

        }
      },
      mounted(){
        this.requestData();
      }

       
     
    }
  </script>

