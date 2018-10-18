<template>
    <div>
      <div v-for="article in articleList" :key="article.id">
        <hr>
        <b-media right-align vertical-align="center">
          <b-img slot="aside" fluid  :src="article.articleImgUrl" alt="placeholder" />
          <h5 class="mt-0 mb-1">{{article.articleTitle}}</h5>
          <p>{{article.articleInfo}}</p>
          <b-media>
            <div>
              <h6 class="mt-sm-1" style="float: left">{{article.userNickname}}</h6>
              <!--<b-img class="mt-sm-1" style="float: left" src="../../static/img/like.png"/>-->
              <!--<b-img class="mt-sm-1" style="float: left" src="../../static/img/message.png"/>-->
            </div>
          </b-media>
        </b-media>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
      data(){
          return {
            articleList: [
              {
                id:1,
                userNickname:'这个夏天不太热',
                articleTitle:'C++写的简历！网友：高逼格',
                articleInfo:'写这篇文章之前，我推荐下自己创的一个交流裙，每天群内直播分享课！我是一名从事了5年C++开发的全栈工程师，目前在做线上教育讲师，年初整理了一份最适合2018年学习的C++干货，有想要学习C++的同学，群号739899254，暗号：夏热！',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12050823-5dcac44ce048367e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
              },
              {
                id:2,
                userNickname:'Rairiar',
                articleTitle:'使用Anko高速动态构建Android UI',
                articleInfo:'2017年Google正式确定Kotlin为Android开发一级语言后，有大量的团队和项目开始尝试使用Kotlin,而Anko作为一款和Kotlin联系极为紧密的开源库，也成为了吸引开发者尝试Kotlin的魅力之一；Anko的使用教程可以参照官方文档，这里不再赘述，本文力求从以下五个方面来介绍Anko在各方面的表现以及从个人的角度来论证其实用价值 ',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12354730-b285489a23cc7cf5.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
              },
              {
                id:3,
                userNickname:'啥啥啥娜娜',
                articleTitle:'手把手教你写一个微信小程序',
                articleInfo:'最近比较闲，利用业余时间，为我的公众号写了一个比较简单的小程序',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/5532249-aa291e173cff2b03.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
              },
              {
                id:4,
                userNickname:'ProgramAndroid',
                articleTitle:'Kotlin生态调查：超过6成的开发者用过Kotlin',
                articleInfo:'Kotlin 从2011年低调问世，在短短几年间，如冲天火箭般流行起来。一年前，谷歌宣布将Kotlin 指定为 Android 官方编程语言',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/5851256-cfb143885632676f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
              },
              {
                id:1,
                userNickname:'这个夏天不太热',
                articleTitle:'C++写的简历！网友：高逼格',
                articleInfo:'写这篇文章之前，我推荐下自己创的一个交流裙，每天群内直播分享课！我是一名从事了5年C++开发的全栈工程师，目前在做线上教育讲师，年初整理了一份最适合2018年学习的C++干货，有想要学习C++的同学，群号739899254，暗号：夏热！',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/12050823-5dcac44ce048367e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
              },
              {
                id:5,
                userNickname:'诗之源',
                articleTitle:'16个小技巧让你每天都进步（附：提高效率的100条建议）',
                articleInfo:'16个小技巧让你每天都进步',
                articleImgUrl:'https://upload-images.jianshu.io/upload_images/4501092-0ed25d2a95c4e615?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
              },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
