<template>
  <div>
    <div class="row top">
      <b-col  cols="2">
        <img  class="avatar" src="https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg">
      </b-col>
      <b-col  cols="6">
        <p class="name">阿栈</p>
        <div style="display: flex">
          <div class="out-set">
            <p class="amount">56</p>
            <p class="classify-text">关注></p>
          </div>
          <div class="out-set">
            <p class="amount">3137</p>
            <p class="classify-text">粉丝></p>
          </div>
          <div class="out-set">
            <p class="amount">103</p>
            <p class="classify-text">文章></p>
          </div>
          <div class="out-set">
            <p class="amount">3902</p>
            <p class="classify-text">字数></p>
          </div>
          <div class="out-set">
            <p class="amount">680</p>
            <p class="classify-text">喜欢></p>
          </div>
        </div>
      </b-col>

      <b-col  cols="4">
        <div style="margin-top: 20%">
          <b-button class="button1" variant="outline-success">发简信</b-button>
          <b-button class="button2" variant="success"> + 关注</b-button>
        </div>

      </b-col>
    </div>
  </div>

</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .name{
    font-weight: bold;font-size: 20px;margin-top: 1%
  }
  .top{
    padding-top:3%;
    padding-bottom: 4%;
  }
  .avatar{
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
  .amount{
    font-size: 14px;
    color: gray;
    font-weight: bold
  }
  .classify-text{
    margin-top:-42%;
    font-size: 11px;
    color: gray;
  }
  .out-set{
    border-right: 1px solid #f0f0f0;height: 42px;padding-right: 3%;width:54px;padding-left: 3%;
  }
</style>
