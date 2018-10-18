<template>
<div >
<a target="_blank" v-for="hot in pictureList":key="hot.id" >
  <img :src="hot.url" class="size">
</a>

</div>
</template>

<script>
    export default {
      name:"Hot",
      data() {
        return {
          slide:0,
          sliding:null,
          pictureList: [
            {
              "id": 1,
              "url": "https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
            },
            {
              "id": 2,
              "url": "https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
            },
            {
              "id": 3,
              "url": "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
            },
            {
              "id": 4,
              "url": "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
            },
            {
              "id": 5,
              "url": "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
            }
          ]
        }
      }
    }
</script>

<style scoped>
.size{
  width: 100%;height: 100%
}
</style>
