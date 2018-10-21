<<template>
  <div>
    <br>
    <div>
      <b-img rounded src="https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" fluid alt="Responsive image" />
    </div>
    <br>
    <div class="container">
      <div class="row" >
        <div class="col-md-4" v-for="list in lists" :key="list.id">
          <div  class="frame">
            <router-link :to="'/u/' + list.id" >
              <img class="list-img" :src="list.url">
              <p class="list-title">{{list.title}}</p>
            </router-link>
            <p class="list-context">{{list.content}}</p>
            <button class="button">+ 关注</button>
            <p class="list-text">{{list.number}}篇文章 · {{list.likes}}人关注</p>
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
            "title":"遛遛心情的溜妈",
            "url":"https://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算...",
            "number":1574,
            "likes" :3508
          },
          {
            "id":2,
            "title":"穿着prada挤地铁 ",
            "url":"https://upload.jianshu.io/users/upload_avatars/2587459/0c7e061f-e78e-4b09-b511-340846c4ea0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"只写好玩的都市生活。 版权合作事宜请联系简...",
            "number":1574,
            "likes" :3508
          },
          {
            "id":3,
            "title":"王诗翔 ",
            "url":"https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"合抱之木，生于毫末 九层之台，起于垒土 千里...",
            "number":1574,
            "likes" :3508
          },
          {
            "id":4,
            "title":"北美之北 ",
            "url":"https://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"简书自有的学习成长平台。 这里有简书最实...",
            "number":1574,
            "likes" :3508
          },
          {
            "id":5,
            "title":"须僧",
            "url":"https://upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"男，某军校新闻系毕业，曾任空某部指导员、机关...",
            "number":1574,
            "likes" :3508
          },
          {
            "id":6,
            "title":"宇文歡 ",
            "url":"https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"既编过学术大作，也做过畅销小说。策划过最畅销...",
            "number":1574,
            "likes" :3508
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
    margin-top: 15px;
  }
  .frame{
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    height: 310px;
    margin: 60px 10px 20px 20px;
    text-align: center;
    background-color: hsla(0,0%,71%,.1);
  }
  .list-title{
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  .list-img{
    margin-top: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .list-context{
    font-size: 15px;
    max-width: 180px;
    margin-left: 60px;
  }
  .list-text{
    margin-top: 40px;
    font-size: 15px;
  }
</style>
