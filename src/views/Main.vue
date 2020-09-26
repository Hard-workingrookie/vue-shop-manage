<template>
  <div>
    <div class="tagsWrap">
      <el-tag
        :key="tag.id"
        v-for="tag in Tags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag.id)"
        class="tags"
        @click="handleClick(tag.id)"
      >
        {{ tag.name }}
      </el-tag>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleClose(tag) {
      this.$store.commit("handleCloseTags", tag);
    },
    handleClick(tag) {
      console.log("tag", tag, "Tags", this.$store.state.Tags);
      this.$store.state.Tags.some((item) => {
        if (tag == item.id) {
          this.$router.push(item.path);
        }
      });
    },
  },
  computed: {
    ...mapState(["menu", "path", "menuList", "Tags"]),
  },
  watch: {},
};
</script>


<style  scope>
.tagsWrap{
  display: flex;
  justify-content: start;
}
.tags {
  margin: 0 10px;
}
</style>