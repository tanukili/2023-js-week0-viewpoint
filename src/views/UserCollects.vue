<script>
export default {
  data() {
    return {
      views: [],
      userId: null,
    };
  },
  methods: {
    render(id) {
      this.axios
        .get(`${import.meta.env.VITE_APP_PATH}/collects?userId=${id}`)
        .then((res) => {
          this.views = res.data;
        });
    },
    removeCollect(id) {
      this.axios
        .delete(`${import.meta.env.VITE_APP_PATH}/collects/${id}`)
        .then(() => {
          alert('成功移除');
          this.render(this.userId);
        })
        .catch(() => {
          alert('移除失敗');
        });
    },
  },
  mounted() {
    const userId = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.userId = userId;
    if (!userId) {
      // 未登入
      this.$router.push('/');
    } else {
      // 已登入
      this.render(userId);
    }
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>我的收藏</h1>
    <ul class="row row-cols-2 row-cols-md-3 g-4 list-unstyled">
      <li class="col" v-for="view in views" :key="view.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ view.name }}</h5>
            <p class="card-text">
              {{ view.description }}
            </p>
          </div>
          <div class="card-footer">
            <a
              href="#"
              class="btn btn-primary"
              @click.prevent="removeCollect(view.id)"
              >移除收藏</a
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
