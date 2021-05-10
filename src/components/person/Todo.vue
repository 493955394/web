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
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="商品查询">
              <el-input v-model="form.name" placeholder="请输入查询条件"></el-input>
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
    <el-table :data="tableData4" stripe style="width: 100%">
      <el-table-column prop="typeId" label="商品编码"></el-table-column>
      <el-table-column prop="name" label="商品名称" align="center"></el-table-column>
      <el-table-column prop="typeName" align="center" label="种类名称"></el-table-column>
      <el-table-column prop="unit" align="center" label="计量单位"></el-table-column>
      <el-table-column prop="specification" align="center" label="规格"></el-table-column>
      <el-table-column fixed="right" align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row.id)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="300"
  ></el-pagination> -->
</template>
<script>
export default {
  data() {
    return {
      //tableData4: [],
      tableData4: new Array(15).fill({
        id: "10000da",
        typeId: "2123",
        name: "测试商品",
        TypeName: "手机",
        unit: "个",
        specification: 789023,
      }),
      form: {
        name: "",
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
    },
    onSubmit() {
      // 查询框
      console.log(this.form);
    },
    edit(id) {
      // 编辑数据
      console.log(id);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.add-button {
  padding-top: 20px;
}
</style>
