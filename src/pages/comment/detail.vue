<template>
    <d2-container >
<!--贴文-->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title">
                    <span>{{list.title}} </span> <br/>
                </div>
                <div class="avatar">
                    <img :src="this.$route.query.data[1]" style="border-radius: 55px;width: 45px;height: 45px">
                </div>

                <div class="name_date">
                    {{this.$route.query.data[2]}}&#12288
                    {{this.$route.query.data[4]}}&#12288
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp
                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                </div>

            </div>
            <li v-html="list.content" style="list-style: none"> {{list.content}}</li>
        </el-card>
    <br/>
    <!--评论-->
        <el-card class="box-card"><!--<el-card class="box-card" body-style="height:300px">-->
            <b>{{this.counts}}条回帖</b>
                <ul>
                    <li v-for="item in commentList" :key='item' style="list-style: none" >
                        <div class="avatar">
                            <img :src="item[2]" style="border-radius: 55px;width: 45px;height: 45px">
                        </div>


                            <!--内容-->
                            <div v-html="item[0]">{{item[0]}}</div>
                            <!--时间-->
                        <div style="color:#909399;">    {{item[1]}}  &#12288 {{item[3]}}</div>

                        <hr style="border:none;border-bottom:1px solid #DaDaDa; height:1px;-webkit-transform: scaleY(0.5);-webkit-transform-origin:0 0;">
                    </li>
                </ul>
            </el-card>
        <br/>

        <!--回贴-->
        <el-card class="box-card" body-style="height:350px">
             <div ref="editor" v-model="currentValue"></div>
        </el-card>
        <br/>

        <el-button type="primary" @click="postComment">回贴</el-button>

    </d2-container>
</template>

<script>
  import axios from 'axios';
  import { getDetail } from '@/api/forum/article/getDetail'
  import { postComment } from '@/api/forum/comment/postComment'
  import {getComment} from "../../api/forum/comment/getComment";
  import {getCommentCounts} from "../../api/forum/comment/getCommentCounts";
  import Quill from 'quill'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  export default {
    name: 'd2-quill',
    props: {
      value: {
          type: String,
          required: false,
          default: ''
      }
    },
    components: {

   },
    data() {
      return {
          counts: '',  //评论数
          aid: this.$route.params.id,
          list:[],  //详情内容
          //评论
          commentList: [],
          time: new Date(),
          //文本编辑器
          Quill: undefined,
          currentValue: '', //内容
          options: {
              theme: 'snow',
              bounds: document.body,
              debug: 'warn',
              modules: {
                  toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      ['blockquote', 'code-block'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                      // [{ 'script': 'sub' }, { 'script': 'super' }],
                      // [{ 'indent': '-1' }, { 'indent': '+1' }],
                      // [{ 'direction': 'rtl' }],
                      [{ 'size': ['small', false, 'large', 'huge'] }],
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      [{ 'color': [] }, { 'background': [] }],
                      // [{ 'font': [] }],
                      [{ 'align': [] }],
                      ['clean'],
                      ['link', 'image']
                  ]
              },
              placeholder: '书写你的内容',
              readOnly: false,

          }
      }
    },
      watch: {
          value: {
              handler (val) {
                  // 确认是新的值
                  if (val !== this.currentValue) {
                      this.currentValue = val
                      // 尝试更新
                      if (this.Quill) {
                          this.Quill.pasteHTML(this.value)
                      }
                  }
              },
              immediate: true
          }
      },
    methods: {
        getData(id){  //获取详情页内容
            getDetail({
                id: id,
            })
                .then(response=>{
                this.list = response;
            }).catch(function(err){
                console.log(err)
            })
        },
        init () {
            const editor = this.$refs.editor
            // 初始化编辑器
            this.Quill = new Quill(editor, this.options)
            // 默认值
            this.Quill.pasteHTML(this.currentValue)
            // 绑定事件
            this.Quill.on('text-change', (delta, oldDelta, source) => {
                const html = this.$refs.editor.children[0].innerHTML
                const text = this.Quill.getText()
                const quill = this.Quill
                // 更新内部的值
                this.currentValue = html
                // 发出事件 v-model
                this.$emit('input', html)
                // 发出事件
                this.$emit('change', { html, text, quill })
            })
            // 将一些 quill 自带的事件传递出去
            this.Quill.on('text-change', (delta, oldDelta, source) => {
                this.$emit('text-change', delta, oldDelta, source)
            })
            this.Quill.on('selection-change', (range, oldRange, source) => {
                this.$emit('selection-change', range, oldRange, source)
            })
            this.Quill.on('editor-change', (eventName, ...args) => {
                this.$emit('editor-change', eventName, ...args)
            })
        },
        postComment(){
            // console.log(233)
            // console.log(this.aid)
            postComment({
                id : this.aid,
                content: this.currentValue,
                date : this.time,
            })
                .then(response=>{
                    this.currentValue = response;
                    alert('评论成功！');
                }).catch(function(err){
                console.log(err)
            })
        },
        getComments(id){
            getComment({
                id: id
            })
                .then(response=>{
                    this.commentList = response;
                }).catch(function(err){
                console.log(err)
            })
        },
        getCommentCounts(){
            getCommentCounts()
                .then(response=>{
                    this.counts = response;
                }).catch(function(err){
                console.log(err)
            })
        }
    },
    mounted(){
        this.getData(this.$route.params.id);//获取动态路由传值
        this.init();
        this.getComments(this.$route.params.id);
        this. getCommentCounts();
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
    .avatar{
        position: relative;

    }
    .title{
        position: absolute;
        left:100px;
        top: 40px;
    }
    .name_date{
        position: absolute;
        left: 100px;
        top: 80px;
        color:#909399;
    }

</style>