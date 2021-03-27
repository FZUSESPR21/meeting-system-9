<template>
<el-container>
  <el-header>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" >会议议程</el-menu-item>
  <el-submenu index="2" v-if="discussion>0">
    <template slot="title">分论坛</template>
    <el-menu-item index="2-1" v-if="discussion>0">分论坛1</el-menu-item>
    <el-menu-item index="2-2" v-if="discussion>0">分论坛2</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛4</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛5</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛6</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛7</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛8</el-menu-item>
    <el-menu-item index="2-3" v-if="discussion>0">分论坛9</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" v-if="discussion>1">参会者</el-menu-item>
  <el-menu-item index="4" v-if="discussion>2">发布信息</el-menu-item>
</el-menu>
</el-header>
  <el-main>Main</el-main>
  <el-dialog width="30%" title="登录" :visible.sync="modelShow" 
    		   :show-close="false"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               :before-close="closeCallback()"
    >
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
        <div slot="footer" class="dialog-footer">
            <el-button type="success" @click="login('form')">登 录</el-button>
            <el-button type="primary" @click="logon()">注 册</el-button>
        </div>
    </el-dialog>
</el-container>

</template>

    <script>
    export default {
        name: "Login",
        data() {
            return {
                //是否显示本面板
                modelShow: false,
                //是否可以关闭
                canClose: true,
                //表单数据
                form: {
                    id: '',
                    pw: '',
                },
            }
        },
        mounted: function () {
            const that = this;
            //如果用户没有登录，则打开登录界面
            if (window.sessionStorage) {
                const data = JSON.parse(sessionStorage.getItem("is_login"));
                if (data) {
                    that.modelShow = false;
                } else {
                    that.modelShow = true;
                }
            }
        },
        methods: {
          //注册
          logon:function(){
            this.modelShow= flase;
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
                    }
                } else {
                    this.$message({
                        type: "danger",
                        message: "用户名或密码错误!"
                    });
                }
            },
            //关闭登录窗口前的回调(如果用户没有登录成功，则再次打开本窗口，以达到强制登录的目的)
            closeCallback: function () {
                if (window.sessionStorage) {
                    const data = JSON.parse(sessionStorage.getItem("is_login"));
                    if (data) {
                        this.modelShow = false;
                    } else {
                        this.modelShow = true;
                    }
                }
            }
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-header, .el-footer {
    background-color: #ffffff;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
