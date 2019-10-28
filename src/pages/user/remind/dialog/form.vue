<template>
    <el-dialog title="填写提醒相关信息" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="sizeForm" label-width="80px">
          <el-form-item label="提醒时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1"
                              style="width: 100%;" :picker-options="pickerOptions"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="推送方式">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="邮箱"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系方式">
              <el-input v-model="sizeForm.contact" placeholder="请输入内容" clearable></el-input>
          </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="updateEmail">确 定</el-button>
      </div>
    </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        sizeForm: {
          contact: '',
          date1: '',
          date2: '',
          resource: ''
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '后天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      };
    },

    methods: {
      open(){
        this.dialogFormVisible = true
      },
      cancel(){
        this.dialogFormVisible = false
        this.$message('取消输入')
      }
    },
    components:{
    }
  }
</script>

<style>
  .el-col-2{
    text-align: center;
  }
</style>