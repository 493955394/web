<template>
  <div class="merchandise-edit">
    <common-dialog
      :visible.sync="configVisible"
      :title="title"
      :divider="true"
      :closeOnClick="false"
      @close="closeCallBack"
    >
      <el-form ref="merchandiseInfoForm" :model="form" label-width="80px">
        <el-form-item label="商品编码">
          <el-input v-model="form.typeId"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="种类名称">
          <el-input v-model="form.typeName"></el-input>
        </el-form-item>
        <el-form-item label="计量单位">
          <el-input v-model="form.unit"></el-input>
        </el-form-item>
        <el-form-item label="规格">
          <el-input v-model="form.specification"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-row>
          <el-col :span="2" :offset="10">
            <el-button @click="save" type="primary">提交</el-button>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-button @click="cancle">取消</el-button>
          </el-col>
        </el-row>
      </span>
    </common-dialog>
  </div>
</template>
<script>
import CommonDialog from '../common/commonDialog';
import API from '../../api/merchandise';
export default {
  components: { CommonDialog },
  props: {
    title: {
      type: String,
      default() {
        return '';
      },
    },
    configInfo: {
      type: Object,
      default() {
        return {
          id: 0,
          typeId: 0,
          name: '',
          typeName: '',
          unit: '',
          specification: '',
        };
      },
    },
    action: {
      type: String,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      form: this.configInfo,
      configVisible: true,
    };
  },
  mounted() {
    // 初始化方法
    this.init();
  },
  methods: {
    init() {},
    cancle() {
      this.closeCallBack();
    },
    closeCallBack() {
      this.$refs['merchandiseInfoForm'].resetFields();
      this.$emit('update:configVisible', false);
    },
    save() {
      API.edit(this.form).then((res) => {
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '修改成功',
          });
          this.closeCallBack();
          this.$emit('reload');
        } else {
          this.$message({
            type: 'error',
            message: '修改失败',
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>