<template>
  <div class="oa_main">
    <!--面包屑-->
    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <!--serach-->
        <div class="oa_search">
          <el-form :inline="true" :model="query" class="demo-form-inline">
            <el-form-item label="商品查询">
              <el-input v-model="query.name" placeholder="请输入查询条件"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="8" :offset="4" class="add-button">
        <el-button icon="el-icon-plus">商品种类新增</el-button>
        <el-button icon="el-icon-plus">商品新增</el-button>
      </el-col>
    </el-row>
    <!--list-->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" />
      <el-table-column prop="typeId" label="商品编码"></el-table-column>
      <el-table-column prop="name" label="商品名称" align="center"></el-table-column>
      <el-table-column prop="typeName" align="center" label="种类名称"></el-table-column>
      <el-table-column prop="unit" align="center" label="计量单位"></el-table-column>
      <el-table-column prop="specification" align="center" label="规格"></el-table-column>
      <el-table-column fixed="right" align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <merchandise-edit
      :configVisible.sync="dialog.visible"
      v-if="dialog.visible"
      :configInfo="dialog.configInfo"
      :title="dialog.title"
      :action="dialog.action"
      @reload="init()"
    ></merchandise-edit>

    <pagination
      :total="total"
      :page.sync="query.pageNum"
      :limit.sync="query.pageSize"
      @pagination="init()"
    ></pagination>
  </div>
</template>
<script>
import Pagination from '../common/pagination.vue';
import API from '../../api/merchandise';
import MerchandiseEdit from './MerchandiseEdit.vue';
export default {
  components: { Pagination, MerchandiseEdit },
  data() {
    return {
      tableData: [],
      query: {
        name: '',
        pageNum: 1,
        pageSize: 10,
      },
      total: 0,
      dialog: {
        title: '',
        action: '',
        visible: false,
        configInfo: {},
      },
    };
  },
  mounted() {
    // 初始化方法
    this.init();
  },
  methods: {
    init() {
      // todo 获取数据
      API.query(this.query).then((res) => {
        this.tableData = res.list;
        this.total = res.total;
      });
    },
    onSubmit() {
      // 查询框
      this.query.pageNum = 1;
      this.init();
    },
    edit(row) {
      // 编辑数据
      this.dialog = {
        title: '编辑商品信息',
        action: 'edit',
        visible: true,
        configInfo: Object.assign({}, row),
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.add-button {
  padding-top: 20px;
}
</style>
