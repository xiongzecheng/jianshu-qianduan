<template>
  <div>
    <br>
    <div class="container">
      <div class="row" >
        <div class="col-md-4" v-for="list in lists" :key="list.id">
          <div  class="frame">
            <img style="margin-top: -50px;width: 100px;height: 100px;border-radius: 10px" :src="list.url">
            <p style="margin-top: 10px;font-size: 25px;font-weight: bold">{{list.title}}</p>
            <p>{{list.content}}</p>
            <button class="button">+ 关注</button>
            <hr>
            <div class="count">
              <a target="_black" href="https://www.jianshu.com/c/V2CqjW">{{list.count}}</a>{{list.guanzhu}}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Collection",
      data(){
          return{
            lists:[
              {
                "id":1,
                "title":"手绘",
                "url":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台回复“指南”获取...",
                "count":"129045篇文章",
                "guanzhu":"·1634.6K关注"
              },
              {
                "id":2,
                "title":"读书",
                "url":"https://goo.gl/QNZYPZ",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"182933篇文章",
                "guanzhu":"·3507.2K关注"
              },
              {
                "id":3,
                "title":"@IT·互联网",
                "url":"https://goo.gl/c87ycg",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"49760篇文章",
                "guanzhu":"·1601.6K关注"
              },
              {
                "id":4,
                "title":"摄影",
                "url":"https://goo.gl/bYQwPy",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"69567篇文章",
                "guanzhu":"·1951.7K关注"
              },
              {
                "id":5,
                "title":"故事",
                "url":"https://goo.gl/xprKt8",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"195764篇文章",
                "guanzhu":"·1312.6K关注"
              },
              {
                "id":6,
                "title":"简书电影",
                "url":"https://goo.gl/k2AzWM",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"89309篇文章",
                "guanzhu":"·1868.2K关注"
              },
              {
                "id":7,
                "title":"旅行·在路上",
                "url":"https://goo.gl/H4S3yj",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"104217篇文章",
                "guanzhu":"·2553.3K关注"
              },
              {
                "id":8,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"5412篇文章",
                "guanzhu":"·1116.2K关注"
              },
              {
                "id":9,
                "title":"国学与传统文化",
                "url":"https://goo.gl/RYJ1aZ",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "count":"44663篇文章",
                "guanzhu":"·979.0K关注"
              },
            ]


          }
      }
    }
</script>

<style scoped>
  .button{
      width: 100px;
      height: 40px;
      border-radius: 30px;
      border: 1px solid white;
      background-color: limegreen;
      color: white;
    }
  .frame{
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    height: 300px;
    margin: 60px 10px 20px 20px;
    text-align: center;
    /*margin-top: 100px;*/
  }
</style>
