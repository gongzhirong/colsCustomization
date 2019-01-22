<template>
  <div id="app">
    <Table size="small" border disabled-hover highlight-row :columns="tableColumns" :data="tableData" :height="400"></Table>
    <Page style="margin-top: 10px;text-align: center;"></Page>
    <ColCustomization v-model="tableColumns" colsCode="xxxx"></ColCustomization>
  </div>
</template>

<script>
import ColCustomization from './component/colCustomization.vue'
export default {
  name: 'app',
  data () {
    return {
      tableData: [{}, {}, {}, {}],
      tableColumns: [
        {title: '订单编号', key: 'n1', show: true, fixed: 'left', width: 160},
        {title: '客户采购编码', key: 'n2', show: true, fixed: false, width: 160},
        {title: '订单生成日期', key: 'n3', show: true, fixed: false, width: 160},
        {title: '订单状态', key: 'n4', show: true, fixed: false, width: 120},
        {title: '总价', key: 'n5', show: true, fixed: false, width: 200},
        {title: '订单类型', key: 'n6', show: true, fixed: false, width: 120},
        {title: '产品类型', key: 'n9', show: true, fixed: false, width: 120},
        {title: '公司', key: 'n7', show: true, fixed: false, width: 100},
        {title: '售达方名称', key: 'n8', show: true, fixed: false, width: 120},
        {title: '销售部门', key: 'n10', show: true, fixed: false, width: 120},
        {title: '请求交货日期', key: 'n11', show: true, fixed: false, width: 160},
        {title: '报错信息类别', key: 'n12', show: true, fixed: false, width: 160},
        {title: 'sap返回信息', key: 'n13', show: true, fixed: false, width: 160}
      ]
    }
  },
  components: {
    ColCustomization
  }
}
</script>

<style>
</style>
