<template>
  <div class="main">
    <div class="logo">
      <router-link to="/">
        <b-img
          width="100"
          src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"/>
      </router-link>
    </div>
    <div class="login">
      <div class="title">
        <router-link to="/sign_in">登录</router-link>
        <b>·</b>
        <router-link to="/sign_up">注册</router-link>
      </div>
      <div class="account-password">
        <div class="input-account">
          <input type="text" placeholder="你的昵称"/>
          <i class="iconfont">&#xe715;</i>
        </div>
        <div class="input-phone">
          <input type="text" placeholder="手机号"/>
          <i class="iconfont">&#xe60d;</i>
        </div>
        <div class="input-password">
          <input type="password" placeholder="设置密码"/>
          <i class="iconfont">&#xe709;</i>
        </div>
      </div>
      <div class="sign-up">
        <input type="button" class="btn btn-block" value="注册">
      </div>
      <div class="more-info">
        <span>点击 “注册” 即表示您同意并愿意遵守简书</span><br>
        <a href="#">用户协议</a>和<a href="#">隐私政策</a>
      </div>
      <div class="others">
        <div>
          <span>————&nbsp;&nbsp;</span><span>社交账号直接注册</span><span>&nbsp;&nbsp;————</span>
        </div>
        <ul>
          <li><a href="#"><i class="iconfont">&#xe601;</i></a></li>
          <li><a href="#"><i class="iconfont">&#xe603;</i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register"
  }
</script>

<style scoped>
  input {
    outline: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    text-decoration: none;
  }

  .main {
    height: 100%;
    min-height: 750px;
    background-color: #f1f1f1;
    text-align: center;
    box-sizing: border-box;
    color: #969696;

  }

  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    color: #969696;
    margin-bottom: 60px;
  }

  .title a {
    color: #969696;
    padding: 10px;
    text-decoration: none;
    /*border-bottom: 2px solid;*/
  }

  .title a:hover {
    color: #ea6f5a;
    padding: 10px;
    text-decoration: none;
    border-bottom: 2px solid #ea6f5a;
  }

  .title > a:nth-child(3) {
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }

  .login {
    width: 400px;
    margin: 100px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    display: inline-block;
    box-sizing: border-box;
  }

  .account-password {
    margin-bottom: 30px;
  }

  .input-account, .input-password, .input-phone {
    position: relative;
    width: 300px;
    /*border-radius: 4px 4px 0 0;*/
    /*height: 50px;*/
    /*width: 300px;*/
    /*padding: 4px 4px 0 0;*/
    /*border: 1px solid #c8c8c8;*/
    /*background-color: hsla(0,0%,71%,.1);*/
  }

  .account-password input {
    outline: none;
    border-radius: 4px 4px 0 0;
    height: 50px;
    padding: 4px 4px 0 40px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0, 0%, 71%, .1);
    width: 100%;
    box-sizing: border-box;
  }

  .account-password i {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    color: #969696;
  }

  .input-account > input {
    border-bottom: none;
  }

  .input-password > input {
    border-radius: 0 0 4px 4px;
  }

  .input-phone > input {
    border-radius: 0;

    border-bottom: none;
  }

  .sign-up input {
    background-color: #42c02e;
    border-radius: 30px;
    font-size: 18px;
    padding: 9px 18px;
    color: #fff;
  }

  .more-info{
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }

  .others {
    margin-top: 20px;
    height: 100px;
  }

  .others span:nth-child(2) {
    font-size: 12px;
    color: #969696;
  }

  .others i {
    font-size: 28px;
  }

  .others ul a {
    width: 50px;
    height: 50px;
    display: block;
    line-height: 50px;
  }

  .others > ul > li:nth-child(1) a {
    color: #00bb29;
  }

  .others > ul > li:nth-child(2) a {
    color: #498ad5;
  }


</style>
