<template>
  <div>
    <!--<v-head></v-head>-->

    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="8" style="padding-left: 12%">
          <v-user-info></v-user-info>
          <b-tabs>
            <b-tab title="文章" active>
              <v-article></v-article>
            </b-tab>
            <b-tab title="动态" >
              <br>动态
            </b-tab>
            <b-tab title="最新评论" >
              <br>最新评论
            </b-tab>
            <b-tab title="热门" >
              <br>热门
            </b-tab>
          </b-tabs>
        </b-col>

        <b-col cols="4" style="margin-top: 4%" >
          <div style="display: flex">
            <img src="https://upload.jianshu.io/user_badge/1014d32a-bf93-4005-aa0c-fac198d25377" class="credit-icon">
            <p class="credit-text">优秀故事作者</p>
          </div>
          <div style="display: flex">
            <img src="https://upload.jianshu.io/user_badge/48d31e61-a03c-4506-81a2-d224ac0a2d8b" class="credit-icon">
            <p class="credit-text">简书版权</p>
          </div>
          <div style="display: flex;">
            <img src="http://p88kzenjw.bkt.clouddn.com/qianyue.png" class="credit-icon">
            <p class="credit-text">简书签约作者</p>
          </div>

        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>
  import vHead from '../common/Header';
  import vUserInfo from '../common/UserInfo';
  import vArticle from  '../common/Article';
  export default {
    name: "User",
    components: {
      // vHead,
      vUserInfo,
      vArticle
    }
  }
</script>

<style scoped>
  a{
    color: #495057;
  }
  .credit-icon{
    width: 18px;
    height: 18px;
    /*margin-top: 5%;*/
    margin-left: 5%;
  }
  .credit-text{
    margin-left: 4%;
    /*margin-top: 4%;*/
    font-size: 14px;
  }
</style>
