 <template>
    <d2-container>
      <div>

        <Button v-on:add="add"></Button>
      <el-table
        :data="tableData"
        style="width: 100%">
            
         <el-table-column
          prop="avatar"
          label=""
          width="180">

          <template slot-scope="scope">
              <img  :src="scope.row.avatar" alt="" style="border-radius: 25px;width: 50px;height: 50px" >
          </template>
        </el-table-column>

        <el-table-column
          prop="title"
          label="今日热议"
          width="840">
        </el-table-column>


      </el-table>

     
    </div>
    </d2-container>
  </template>

  <script>
  import Button from './button'
    export default {
      components:{
          Button
      },
      data() {
        return {
          tableData: [{
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            title: '大家有木有觉得南京网络赛略难><',
          
          }, {
            avatar: 'https://avatars3.githubusercontent.com/u/35989937?s=460&v=4',
            title: '求银川网络赛第三题题解～～～',
          }, {
            avatar: 'https://avatars0.githubusercontent.com/u/34258355?s=460&v=4',
            title: 'ACM省赛即将要来啦，大家如何准备呢？？'
          }]
        }
      }
    }
  </script>