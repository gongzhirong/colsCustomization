<template>
    <div class="colCustomization">
      <Poptip placement="top-start" width="185">
        <Button>列自定义</Button>
        <div class="title" slot="title">
          <Checkbox disabled>请勾选显示字段</Checkbox>
        </div>
        <ul class="content" slot="content">
          <li class="content_item" v-for="(col, index) in initCols" :key="col.key">
            <Checkbox v-model="col.show" @on-change="changeCols" :disabled="col.fixed ? true : false"><span :title="col.title">{{col.title}}</span></Checkbox>
            <div class="iconBt" v-if="!col.fixed">
              <a @click="arrowUp(index)">
                <Icon type="md-arrow-round-up" />
              </a>
              <a @click="arrowDown(index)">
                <Icon type="md-arrow-round-down" />
              </a>
            </div>
          </li>
        </ul>
      </Poptip>
    </div>
</template>
<script>
/**
 * ColsCustomization 列自定义组件
 * @param model 关联使用的table绑定cols的变量（重点：该值最会在第一次初始化数据的时候会赋值到本组件，后续修改不再由父级传值回来渲染）
 * @param clos 模块初始化列数据
 * @param colsCode 列配置存储的key值
 */
import md5 from 'js-md5'
export default {
  name: 'ColsCustomization',
  model: {
    prop: 'cols',
    event: 'change'
  },
  props: {
    cols: {
      type: Array,
      required: true
    },
    colsCode: {
      type: String,
      required: true
    }
  },
  data () {
    let data = JSON.parse(window.localStorage.getItem(`colsInit-${this.colsCode}`)) || {}
    let cols = []
    this.cols.forEach(item => {
      let col = item
      delete col.__id
      cols.push(col)
    })
    let md5Cols = md5(JSON.stringify(cols))
    let initCols
    if (md5Cols === data.md5Cols) {
      initCols = data.initCols
    } else {
      initCols = cols
    }
    return {
      initCols: initCols,
      md5Cols: md5Cols
    }
  },
  watch: {
    initCols () {
      this.changeCols()
    }
  },
  methods: {
    arrowUp (index) {
      if (this.initCols[index - 1] && this.initCols[index - 1].fixed) return
      let col = this.initCols[index]
      this.initCols.splice(index, 1)
      this.initCols.splice(index - 1, 0, col)
    },
    arrowDown (index) {
      if (this.initCols[index + 1] && this.initCols[index + 1].fixed) return
      let col = this.initCols[index]
      this.initCols.splice(index, 1)
      this.initCols.splice(index + 1, 0, col)
    },
    changeCols () {
      let cols = []
      let initCols = []
      this.initCols.forEach(item => {
        // 必须把__id删除掉再保存到本地（__id该字段不知如何添加上去的，为vue内部所用）
        // 类似指针绑定作用，在重新赋值修改this.$data数据时，注意不可有该字段
        // 不然会报错You may have an infinite update loop in watcher with expression "columns"
        let col = item
        delete col.__id
        initCols.push(col)

        if (item.show) {
          cols.push(item)
        }
      })
      this.$emit('change', cols)
      // 每次变更把数据存储到本地
      let data = {
        md5Cols: this.md5Cols,
        initCols: initCols
      }
      window.localStorage.setItem(`colsInit-${this.colsCode}`, JSON.stringify(data))
    }
  },
  created () {
    this.changeCols()
  }
}
</script>
<style lang="less">
.ivu-page + .colCustomization{
  position: absolute;
  margin-top: -33px;
}

.colCustomization {
  margin-top: 8px;
  .title {
    color: #8E8E8E;
    font-size: 12px;
  }

  .ivu-poptip-body {
    max-height: 300px;
    overflow-x: auto;
    padding: 0;
  }

  .ivu-poptip-body-content {
    white-space: normal;
  }

  .ivu-checkbox-wrapper {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content {
    .content_item {
      padding: 4px 24px 4px 17px;
      position: relative;

      .iconBt {
        opacity: 0;
        position: absolute;
        right: 3px;
        top: 4px;

        a:first-child {
          color: black;
        }

        a + a {
          margin-left: 6px;
        }
      }

      &:hover {
        .iconBt {
          opacity: 1;
        }
      }
    }
  }
}
</style>
