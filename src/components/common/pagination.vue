<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50, 100];
      },
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit('update:page', val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit('update:limit', val);
      },
    },
  },
  created() {
    if (this.pageSizes.indexOf(this.limit) === -1) {
      this.pageSizes.push(this.limit);
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$nextTick(() => {
        this.$emit('pagination', { page: this.currentPage, limit: val });
      });
    },
    handleCurrentChange(val) {
      this.$nextTick(() => {
        this.$emit('pagination', { page: val, limit: this.pageSize });
      });
    },
  },
};
</script>

<style lang="scss">
.pagination-container {
  background: #fff;
  padding: 10px 24px 10px 0px;
  text-align: right;
}

.pagination-container.hidden {
  display: none;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #5bd18b !important ;
}
</style>
