<template>
  <b-container
    fluid
    class=""
  >
    <b-row class="">
      <b-col
        cols="0"
        xl="3"
        class="searchbg vh-100 d-none d-xl-block"
      >
        <Search />
      </b-col>
      <b-col
        cols="12"
        xl="9"
        class="teacherbg min-vh-100"
      >
        <SearchSidebar class="d-block d-xl-none" />
        <Teacher />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Search from '@/components/Search.vue';
import SearchSidebar from '@/components/SearchSidebar.vue';
import Teacher from '@/components/Teacher.vue';

export default {
  name: 'Teachers',
  components: {
    Search,
    SearchSidebar,
    Teacher,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  created() {
    this.$store.dispatch('fetchTeachers').then(
      () => this.$store.dispatch('selectTeacher', this.id),
    );
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('fetchTeachers').then(() => {
      if (to.params.id) {
        this.$store.dispatch('selectTeacher', to.params.id).then(() => next());
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.searchbg {
  background-color: #fff;
}

.teacherbg {
  background-color: #f8f5f3;
}
</style>
