<template>
<el-container>
  <el-header>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" >会议议程</el-menu-item>
  <el-submenu index="2" v-if="discussion>0">
    <template slot="title">分论坛</template>
    <el-menu-item index="2-1" v-if="discussion>0">分论坛1</el-menu-item>
    <el-menu-item index="2-2" v-if="discussion>0">分论坛2</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛3</el-menu-item>
    <el-menu-item index="2-4" v-if="discussion>0">分论坛4</el-menu-item>
    <el-menu-item index="2-5" v-if="discussion>0">分论坛5</el-menu-item>
    <el-menu-item index="2-6" v-if="discussion>0">分论坛6</el-menu-item>
    <el-menu-item index="2-7" v-if="discussion>0">分论坛7</el-menu-item>
    <el-menu-item index="2-8" v-if="discussion>0">分论坛8</el-menu-item>
    <el-menu-item index="2-9" v-if="discussion>0">分论坛9</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" v-if="discussion>1">参会者</el-menu-item>
  <el-menu-item index="4" v-if="discussion>2">发布信息</el-menu-item>

  <el-row id="log" > 
    <el-button type="success"   @click="dialogVisible = true" >登 录</el-button>
      <router-link :to="{path:'/signup'}">
          <el-button type="primary" >注 册</el-button>
      </router-link>
  </el-row>
      <el-dialog
        title="登录"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form ref="form" :model="form" size="small" label-width="100px">
                  <el-row>
                      <el-form-item label="用户名：" >
                          <el-input class="search-input" v-model="form.id"/>
                     </el-form-item>
                      <el-form-item label="密码：">
                          <el-input type="password" class="search-input" v-model="form.pw"/>
                     </el-form-item>
                  </el-row>
             </el-form>
       <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="success" @click="login('form')">登 录</el-button>
       </span>
      </el-dialog>
</el-menu>

</el-header>

  <el-main><h1>议 程</h1><br>
　　一、开幕式<br>
　　二、选举官员<br>
　　三、通过议程<br>
　　四、大会发言<br>
　　五、分组讨论<br>
　　1．问题的症结<br>
　　2.解决的途径<br>
　　六、其他事项<br>
　　七、通过报告书<br>
　　八、闭幕式<br>
　　议题一、二、三及六、七、八通常称为议程的程序部分，议题四、五称为议程的实质部分。实质部分反映会议所要解决的问题，是会议的核心。<br>
　　以下就每个议题做些说明：<br>
　　一、开幕式。开幕式由临时主席主持。这一临时主席可能是上届会议主席、国际机构的领导人、东道国的负责人等。<br>
　　二、选举官员。选举官员系指选举会议主席团成员，包括主席、副主席、报告员等。<br>
　　三、通过议程。会议主席当选后的头件事是通过议程，使会议的进行有所遵循。<br>
　　四、大会发言。通过议程后，会议继而开始实质性问题的讨论。正式的会议往往从一般性辩论，也就是大会发言开始。<br>
　　五、分组讨论。大会发言一般是原则性或政策性声明，意在起引导作用。<br>
　　六、其他事项。“其他事项”属补遗性质。凡议程未包括而代表认为必须在会上提出的问题，均可在“其他事项”的议题下提出。<br>
　　七、通过报告。会议报告是会议基本情况、讨论经过和议决结果的记载，其重要性不言而喻。<br>
　　八、闭幕式。闭幕式是会议的尾声。通常包括主席致闭幕词以及代表的申谢发言。<br></el-main>
  
</el-container>

</template>

<script>
var log =new Vue({
  el:"#log",
  data:{
      islogin:true
  },
  methods:{
      toggleIslogin:function(){
        this.islogin=!this.islogin;
      }
  }
})
</script>


<script>

    export default {
        // name: "Login",
        data() {
           
          
            return {
                //是否可以关闭
                canClose: true,
                //表单数据
                form: {
                    id: '',
                    pw: '',
                },
                dialogVisible:false
                
            }
            
        },
        
        methods: {
          open1(){
        this.handleClose=true;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
            //登录
            login: function () {
                //这里使用的是固定的用户名和密码。admin/111111

                //校验密码
                if (this.form.pw !== '111111') {
                    this.$message({
                        type: "danger",
                        message: "用户名或密码错误!"
                    });
                    return;
                }
                //校验用户
                if (this.form.id === 'admin') {
                    this.modelShow = false;
                    //把登录数据写入到session
                    if (window.sessionStorage) {
                        sessionStorage.setItem("is_login", "true");
                        this.dialogVisible=false;
                        log.islogin=false;
                    }
                } else {
                    this.$message({
                        type: "danger",
                        message: "用户名或密码错误!"
                    });
                }
            },
        },
    }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

  #log{
    float:right 
  }
</style>
