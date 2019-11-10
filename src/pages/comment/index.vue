 <template>
    <d2-container>
      <div>
          <!-- 点击按钮 -->
          <el-button type="text,success" @click="jump" round>发帖</el-button>
            <ul>
              <li v-for="item in list" :key='item' style="list-style: none" >


<!--                 <router-link :to="'comment/detail/'+ item.id">头像：{{item.avatar}}</router-link> -->
<!--                  <img :src="this.info.avatar" style="border-radius: 25px;width: 50px;height: 50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
                  <router-link :to="'comment/detail/'+ item.id">{{item.title}}</router-link>  <br/>

                    {{item.date}}

                  <hr style="border:none;border-bottom:1px solid #DaDaDa; height:1px;-webkit-transform: scaleY(0.5);-webkit-transform-origin:0 0;">
              </li>
            </ul>

        </div>
    </d2-container>
  </template>

  <script>
  import axios from 'axios'

  import { mapState} from 'vuex'

    export default {
      components:{
      },
      data() {
        return {
          list:[],


        }
      },
      methods:{
         requestData(){
            axios.get('http://localhost:8082/getTitle').then(response=>{
              this.list = response.data
                console.log(this.list);

            }).catch(function(err){
              console.log(err);
            });

        },
          //写贴文路由跳转
          jump(){
              this.$router.push({path: '/comment/postComment'})
          },

          // getAvata(){
          //         console.log(this.info.avatar)
          //          this.$refs.avatar.open()
          // }

      },
      mounted(){
        this.requestData();


      },
        computed: {
            ...mapState('d2admin/user', [
                'info'
            ])
        },
        filters:{

        }

    }
  </script>

