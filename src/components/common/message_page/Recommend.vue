<template>
  <div >
    <a class="collection" target="_blank" v-for="recommend in writerList" :key="recommend.id">
      <div class="attention">{{recommend.attention}}</div>

      <img :src="recommend.info" class="info">
      <div class="writer">{{recommend.writer}}</div>
      <div class="information">{{recommend.information}}</div>

    </a>
  </div>
</template>

<script>
    export default {
        name: "Recommend",
      data(){
        return {
          slide: 0,
          sliding: null,
          writerList:[{
            "id":1,
            "writer":"王诗翔",
            "info":"https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            "information":"写了434.5k字 · 1.7k喜欢",
            "attention":"+关注"
          },
            {
              "id":2,
              "writer":"乔汉童",
              "info":"https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "information":"写了434.5k字 · 1.7k喜欢",
              "attention":"+关注"
            },
            {
              "id":3,
              "writer":"胡七筒",
              "info":"https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "information":"写了434.5k字 · 1.7k喜欢",
              "attention":"+关注"
            },
            {
              "id":4,
              "writer":"冰千里",
              "info":"https://upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "information":"写了434.5k字 · 1.7k喜欢",
              "attention":"+关注"
            },
            {
              "id":5,
              "writer":"简书版权",
              "info":"https://upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
              "information":"写了434.5k字 · 1.7k喜欢",
              "attention":"+关注"
            },

          ]
        }
        }
    }
</script>

<style scoped>
  .collection{
    width: 327px;
    display: inline-block;
    min-height: 32px;

    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .attention{
    margin-left: 86%;margin-top:3%;color: green;font-size:10pt
  }
  .info{
    border-radius: 100%;width: 16%;margin-top: -6%
  }
  .writer{
    margin-left: 20%;margin-top:-14%;color: grey;font-size:10pt
  }
  .information{
    margin-left: 20%;margin-top:3%;color: grey;font-size:10pt
  }
</style>
