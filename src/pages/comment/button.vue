<template>
  <div>

    <!-- 点击按钮 -->
    <el-button type="text,success" @click="dialogFormVisible = true" round>发帖</el-button>
    <!-- 弹出框 -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible" :append-to-body="true">
        <el-form :model="form">
          <el-form-item label="标题" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="内容" :label-width="formLabelWidth"  >
            <el-input type="textarea" v-model="form.content" autocomplete="off" :rows="10"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add"  >发 布</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
            title: '',
            content: ''
        },
        formLabelWidth: '50px',
      }
    },
    methods: {
      add(comment){
        this.dialogFormVisible = false
        console.log(this.form.title);
        console.log(this.form.content);
        // this.$emit('add',this.form.title)

      },
        postComment(){
          this.$refs.button.add();
        }
    }
  };
</script>