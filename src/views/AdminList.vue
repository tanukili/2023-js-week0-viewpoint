<script>
export default {
  data() {
    return {
      views: [],
    };
  },
  methods: {
    render() {
      this.axios.get(`${import.meta.env.VITE_APP_PATH}/views`).then((res) => {
        this.views = res.data;
        this.views.forEach((e) => {
          e.href = `#/admin/edit?id=${e.id}`;
        });
      });
    },
    deleteView(id) {
      console.log('刪除');
      this.axios
        .delete(`${import.meta.env.VITE_APP_PATH}/views/${id}`)
        .then(() => {
          alert('刪除成功');
          this.render();
        })
        .catch(() => {
          alert('刪除失敗');
        });
    },
  },
  mounted() {
    this.render();
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>後台介面</h1>
    <table class="table table-hover">
      <thead>
        <tr class="table-primary">
          <th scope="col">#</th>
          <th scope="col">標題</th>
          <th scope="col">內容</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="view in views" :key="view.id">
          <th scope="row">{{ view.id }}</th>
          <td class="text-nowrap">{{ view.name }}</td>
          <td>{{ view.description }}</td>
          <td>
            <a :href="view.href" class="btn btn-outline-secondary mb-2">編輯</a>
            <a
              @click.prevent="deleteView(view.id)"
              href="#"
              class="btn btn-outline-danger"
              >刪除</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
