<template>
  <div class="dialog-container">
    <el-dialog
      :visible.sync="showable"
      @close="close"
      :width="width"
      :top="top"
      :close-on-click-modal="closeOnClick"
    >
      <span slot="title" class="dialog-title">
        <i class="el-icon-menu"></i>
        <span>&emsp; {{ title }}</span>
        <div>
          <slot name="title"></slot>
        </div>
      </span>
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <template v-if="divider">
          <el-divider></el-divider>
        </template>
        <div>
          <slot name="footer"></slot>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default() {
        return false;
      },
    },
    width: {
      type: String,
      default() {
        return '50%';
      },
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
    divider: {
      type: Boolean,
      default() {
        return false;
      },
    },
    top: {
      type: String,
      default: '15vh',
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    showable: {
      set(value) {
        this.$emit('update:visible', value);
      },
      get() {
        return this.visible;
      },
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.dialog-container {
  .el-dialog {
    border-radius: 10px;
  }
  .el-dialog__header {
    border-radius: 10px 10px 0 0;
    background: rgba(245, 245, 245, 1);
  }
  .el-dialog__footer {
    /* padding: 20px; */
    /* padding-top: 10px; */
    padding-bottom: 20px;
  }
  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0 0 20px;
  }
  .el-dialog__body {
    padding: 24px 24px 10px 24px;
  }
  .el-dialog__header {
    padding: 10px;
    padding-bottom: 15px;
  }
  .el-dialog__headerbtn {
    top: 15px;
  }
  .hpgl-inst-tree {
    .el-tree-node {
      .is-leaf + .el-checkbox .el-checkbox__inner {
        display: inline-block;
      }
      .el-checkbox__input .el-checkbox__inner {
        display: none;
      }
    }
  }
}
</style>
