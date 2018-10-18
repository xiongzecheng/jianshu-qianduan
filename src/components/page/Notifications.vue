<template>
  <b-container class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="4">
        <b-list-group>
          <b-list-group-item >
            <router-link to="/comment">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/comment.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">评论</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/letter">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/comment.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">简信</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/submission">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/comment.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">投稿请求</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/comment.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">喜欢和赞</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="8">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "Notifications"
    }
</script>

<style scoped>

</style>
