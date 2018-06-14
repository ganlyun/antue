<template>
  <div :class="`${prefixCls}-header`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-layout'
    }
  }
}
</script>

<style scoped>

</style>

