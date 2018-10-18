<template>
  <div class="recommend-collection">
    <a class="collection" target="_blank" v-for="theme in themeList" :key="theme.id">
      <router-link :to="'/c/'+theme.id">
        <img :src="theme.url">
        <div class="name">{{theme.title}}</div>
      </router-link>
  </a>
    <router-link to="/collections"><p class="more">更多热门专题 ></p></router-link>
  </div>


</template>

<script>
  export default {
    name: "Theme",
    data(){
      return{
        slide:0,
        sliding:null,
        themeList:[
          {
            "id":1,
            "url":"http://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg",
            "title":"读书"
          },
          {
            "id":2,
            "url":"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"故事"
          },
          {
            "id":3,
            "url":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"手绘"
          },
          {
            "id":4,
            "url":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"摄影"
          },
          {
            "id":5,
            "url":"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"@IT~互联网"
          },
          {
            "id":6,
            "url":"https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"自然科普"
          },
          {
            "id":7,
            "url":"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
            "title":"旅行在路上"
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
  .collection{
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background: #f7f7f7;
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
  .name{
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
  .more{
    margin-left: 42%;margin-top: -7%;color: grey
  }

</style>
