 <template>
    <d2-container>
      <div>
          <!-- 点击按钮 -->
          <el-button type="text,success" @click="jump" round>发帖</el-button>
            <ul>
              <li v-for="item in list" :key='item' style="list-style: none" >

                 <!-- 头像 -->
                 <img :src="item[1]" style="border-radius: 55px;width: 50px;height: 50px">

                  <!-- 标题 -->
                  <el-link @click="JumpToDetail(item)" :underline="false" target="_blank">{{item[3]}}</el-link> <br/>

                  <!-- 姓名 -->
                  <div v-bind:style="{ color: activeColor, size:fontSize + 'px'}">&#12288&#12288&#12288&#12288&#12288{{item[2]}}&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288
                      <!-- 日期 -->
                      &#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288
                      {{item[4]}}
                      浏览4 &nbsp;&nbsp;&nbsp; 回复2&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-thumbs-up" aria-hidden="true"></i> 3
                  </div>

                  <hr style="border:none;border-bottom:1px solid #DaDaDa; height:1px;-webkit-transform: scaleY(0.5);-webkit-transform-origin:0 0;">
                </li>
            </ul>



        </div>
    </d2-container>
  </template>

  <script>
  import axios from 'axios'

  import { mapState} from 'vuex'
  import { getCommentList } from '@/api/comment/getCommentList'
  import {getDetail} from "../../api/comment/getDetail";

    export default {
        components: {},
        data() {
            return {
                list: [],
                activeColor: 'grey',
                fontSize: 1,
                count: 0,
            }
        },
        methods: {
            requestData() {
                //  axios.get('http://localhost:8082/getTitle')
                getCommentList().then(response => {
                     // console.log(response)
                     this.list = response

                })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
            //写贴文路由跳转
            jump() {
                this.$router.push({path: '/comment/postComment'})
            },
            JumpToDetail(item){
                this.$router.push({path: 'comment/detail/'+ item[0], query:{data: item}})
            }

        },
        mounted(){
        this.requestData();
        this.JumpToDetail(item);



      },
        computed: {
            ...mapState('d2admin/user', [
                'info'
            ])
        },


    }
  </script>


