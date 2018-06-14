<template>
  <div :class="`${prefixCls}-footer`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ant-footer',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    }
  }
}
</script>
