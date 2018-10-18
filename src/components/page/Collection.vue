<template>
    <div class="container row">
      <div class="col-md-8 row">
        <div class="col-md-8 row">
          <img src="https://goo.gl/E12vkg" class="image1">
          <div class="title">
            <a class="name">手绘</a>
          <div class="info">收录了129046篇文章·1634728人关注</div>
          </div>
        </div>
        <div class="col-md-4 button">
          <button class="tbutton">投稿</button>
          <button class="gbutton">+ 关注</button>
        </div>
        <br>
        <br>
        <div>
          <b-nav tabs>
            <b-nav-item ><router-link to="tuijian"><span style="color: black">最新评论</span></router-link></b-nav-item>
            <b-nav-item><router-link to="remen"><span style="color: black">最新收录</span></router-link></b-nav-item>
            <b-nav-item><span style="color: black">热门</span></b-nav-item>
          </b-nav>
        </div>
        <br>
        <v-IndexContent></v-IndexContent>
      </div>
      <div class="col-md-4 row leftcontent">
        <div class="title " style="color: grey">专题公告<br/>欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取玩转简书绝密珍贵资料汇总；
          有问题，找宝玉。简宝玉同志会专程为你答疑解惑关于简书的一切。<br><br/>本专题是绘画爱好者的乐园，欢迎互相分享学习;<br><br/>关于专题投稿要求详见
        <br>https://www.jianshu.com/p/153408302566"<br>加入专题官方微信群，爱画画的小伙伴们都在这里！<br>进群方式:添加主编微信: lzx_122520，验证申请注明来自简书，进群后改备注打招呼发作品;
          <br><br/>专题...<p style="margin-top: 20px;font-size: 18px;color: black">分享到 weibo 微信 。。。</p>
          <p style="color: grey">管理员</p>
        </div>
      </div>
    </div>
</template>

<script>
  import vIndexContent from '../common/message_page/IndexContent'

    export default {
        name: "Collection",
      components:{
        vIndexContent
      }
    }
</script>

<style scoped>
  .leftcontent{
    margin-left: 15px;
  }
  .button{
    display: flex;
    flex-direction: row;
  }
  .title{
    margin-top: 50px;
  }
  .info{
    margin-left: 10px;
  }
  .name{
    display: inline;
    font-size:21px;
    font-weight: 700;
    margin-top: 80%;
    margin-left: 5%;
  }
  .image1{
    margin-top: 30px;
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
  .tbutton{
    margin-top: 60px;
    width: 100px;
    height: 40px;
    border-radius: 30px;
    float: left;
    border: 1px solid green;
    background-color: white;
    color: green;
  }
  .gbutton{
    margin-top: 60px;
    width: 100px;
    height: 40px;
    float: right;
    border-radius: 30px;
    border: 1px solid white;
    background-color: limegreen;
    color: white;
  }
</style>
