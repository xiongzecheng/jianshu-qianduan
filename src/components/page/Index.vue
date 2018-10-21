<template>
  <b-row class="row">
    <b-col cols="8" >
      <v-carousel></v-carousel>
      <v-theme></v-theme>
      <v-indexContent></v-indexContent>
    </b-col>
    <b-col cols="4">
      <v-hot></v-hot>
      <div>
        <a class="content">
          <img src="http://p88kzenjw.bkt.clouddn.com/3.png" class="pic"/>
          <p class="down">下载简书手机APP ></p>
          <p class="find">随时随地发现和创作内容 ></p>
        </a>
      </div>
      <p class="rec">推荐作者</p>
      <p class="change">换一批</p>
      <v-recommend></v-recommend>
      <router-link to="Writers"><button class="all">查看全部 > </button></router-link>
    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vHot from '../common/message_page/Hot';
  import vTheme from '../common/message_page/Theme';
  import vIndexContent from '../common/message_page/IndexContent';
  import vRecommend from '../common/message_page/Recommend'
  export default {
    name: "Index",
    components: {
      vCarousel,
      vHot,
      vTheme,
      vIndexContent,
      vRecommend
    }
  }
</script>

<style scoped>
  .content{
    width: 327px;
    height: 85px;
    display: inline-block;
    margin-top: 2%;
    min-height: 32px;
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .pic{
    margin-top: 4%;margin-left: 8%
  }
  .down{
    margin-left: 33%;margin-top: -16%
  }
  .row{
    padding-left: 6%;padding-top: 3%
  }
  .find{
    margin-left: 33%;margin-top: -4%;color: grey;font-size: 10pt
  }
  .rec{
    margin-top:3%;color: grey;font-size:10pt
  }
  .change{
    margin-top:-10%;margin-left:87%;color: grey;font-size:10pt
  }
  .all{
    margin-top: 25px;
    text-align: center;
    width: 320px;
    height: 35px;
    background-color: #E8E8E8;
    border: 1px solid lightgrey;
    color:#696969;
  }
</style>
