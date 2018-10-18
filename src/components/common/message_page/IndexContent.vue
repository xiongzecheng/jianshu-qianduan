<template>
  <div >
    <a class="content" target="_blank" v-for="indexContent in indexContentList":key="indexContent.id" >
      <div class="title">{{indexContent.title}}</div>
      <img :src="indexContent.picture" class="picture">
      <div class="text">{{indexContent.text}}</div>
      <div class="writer">{{indexContent.writer}}</div>
      <img :src="indexContent.info1" class="info1">
      <div class="comment">{{indexContent.comment}}</div>
      <img :src="indexContent.info2" class="info2">
      <div class="like">{{indexContent.like}}</div>
    </a>
  </div>
</template>

<script>
    export default {
        name: "IndexContent",
      data(){
          return{
            slide:0,
            sliding:null,
            indexContentList:[
              {
                "id":1,
                "title":"2018年仅剩的89天，我自费一千元找500名日更挑战超过45天的小伙伴，你会来吗",
                "text":"文/民京 简书原创首发 这个月突然产生了一个想法，那就是如果我发现简书上有哪位日更超过45天并收到简书礼物的简友，他们分享的那篇文章我一定要给他...",
                "writer":"民京",
                "picture":"https://upload-images.jianshu.io/upload_images/12866204-12c2e6a21996de48.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":100,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":27
              },
              {
                "id":2,
                "title":"程序员专用壁纸，看看哪一款适合你？",
                "text":"声明：本媒体部分图片或文字来源于网络，版权归原作者所有，如有侵权，请与我联系删除。",
                "writer":"一点一木",
                "picture":"https://upload-images.jianshu.io/upload_images/13517568-c02ed9eac6c07f35.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":7,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":239
              },
              {
                "id":3,
                "title":"哪里有什么开挂的人生：每一个闪光点背后都是汗水",
                "text":"最近被各公众号刷屏的《隐》，以及影片中一人分饰2角的邓超。 一直以来，对邓超都没有什么太多的关注，无论是之前做导演和孙俪一起演的《恶...",
                "writer":"梓梓啊阿梓",
                "picture":"https://upload-images.jianshu.io/upload_images/13992207-0bf2908722d595f9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":28,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":64
              },
              {
                "id":4,
                "title":"身边有个杨超越一样的人真可怕",
                "text":"想想自己进入大学之后的路程，似乎一切都不是很顺利，但又好像都还可以。高中的时候蛮辛苦的，也挺拼命的。2018年也就是直到现在我才感觉好像真正的缓...",
                "writer":"海厘啊",
                "picture":"https://upload-images.jianshu.io/upload_images/9041302-3e7fd9e152a2d214.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":33,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":45
              },
              {
                "id":5,
                "title":"推荐大学生好用APP（中）",
                "text":"倒数日 百词斩 软件为每一个单词提供了趣味的配图和例句，让记单词成为一种乐趣。[1]百词斩覆盖了从初高中、四六级、考研、到雅思、托福、SAT、G...",
                "writer":"大三狗十八",
                "picture":"https://upload-images.jianshu.io/upload_images/13852226-54b642746b54ffd6.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":10,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":104
              },
              {
                "id":6,
                "title":"往后余生，我只要你",
                "text":"早上各大媒体争先恐后的报道赵丽颖和冯绍峰结婚了，手机里的信息不断在提示，想去微博看一眼的时候，发现微博瘫痪，进不去。 再经历了分手月的789月，...",
                "writer":"哈小美",
                "picture":"https://upload-images.jianshu.io/upload_images/8000013-3a66ebb3d5b14657.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":40,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":70
              },
              {
                "id":7,
                "title":"周润发：谈恋爱一定要找一个让你少女心爆棚的人",
                "text":"公交车上，我旁边站着一对情侣，大概二十六七岁的样子。男生握着上面的扶手，女生挽着他的胳膊。两人嘻嘻哈哈的笑着。 时不时他会咯吱一下她，她一...",
                "writer":"半亩柠檬",
                "picture":"https://upload-images.jianshu.io/upload_images/2589449-8b28cb04224effdf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":15,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":61
              },
              {
                "id":8,
                "title":"介绍10款最常用的代码编辑器",
                "text":"通常操作系统和软件开发包中都包含文本编辑器，可以用来编辑配置文件，文档文件和源代码。 下面总结的 10 个最好的免费代码文本编辑器： 1. NO...",
                "writer":"青鸟官微",
                "picture":"https://upload-images.jianshu.io/upload_images/10878070-8b8b2609334ba1d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":10,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":31
              },
              {
                "id":9,
                "title":"为什么现在的大学生这么丧？",
                "text":"1. 今天周一，一天的课，你6:40就起床了，想着一天的课，虽然很累，但最起码能学到点东西。 跑去食堂吃饭，发现队排的好长，算了，干脆不吃了，先...",
                "writer":"柚子xxxx",
                "picture":"https://upload-images.jianshu.io/upload_images/9538516-6144d51bbc8d02e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":30,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":28
              },
              {
                "id":10,
                "title":"13个小清新APP，把生活过成诗",
                "text":"从记录日常生活，到闲暇时间的放松，给大家安利14个小清新APP，从今天起，开始努力做一个精致美好的人。 1.拍照相机 B612咔叽 这个已经是非...",
                "writer":"律律律律ya",
                "picture":"https://upload-images.jianshu.io/upload_images/13341678-a924bf9154f50d18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "info1":"http://p88kzenjw.bkt.clouddn.com/1.png",
                "comment":20,
                "info2":"http://p88kzenjw.bkt.clouddn.com/2.png",
                "like":50
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .recommend-collection{
    margin-top: 30px;
    margin-left: 10px;
  }
  .content{
    width: 685px;
    height: 180px;
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .collection img{
    width: 32px;
    height: 32px;
  }
  a{
    cursor: pointer;
    color: #333;
    text-decoration: none;
    background-color: transparent;
  }
 .title{
   width: 500px;
   font-size: 14pt;
   font-weight: bolder;
   margin-top: 2%;
   margin-left: 1%
 }
  .picture{
    width: 125px;
    height: 100px;
    border-radius: 4px;
    margin-left: 80%
  }
  .text{
    width: 520px;
    font-size: 10pt;
    margin-top: -13%;
    margin-left: 1%;
    color: grey
  }
  .writer{
    font-size: 10pt;color:grey;margin-top:3%;margin-left:1%;
  }
  .info1{
    margin-left: 13%;margin-top: -6%;
  }
  .comment{
    margin-left: 16%;margin-top: -6%;font-size: 10pt;color:grey;
  }
  .info2{
    margin-left: 20%;margin-top: -6.5%;
  }
  .like{
    margin-left: 23%;margin-top: -6.3%;font-size: 10pt;color:grey;
  }
</style>
