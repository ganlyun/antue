<template>
  <container
    title="Timeline 时间轴">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-color />
    </code-show>
    <code-show>
      <demo-custom />
    </code-show>
    <code-show>
      <demo-pending />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoBasic from './demo/basic.vue'
import DemoColor from './demo/color.vue'
import DemoCustom from './demo/custom.vue'
import DemoPending from './demo/pending.vue'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoColor,
    DemoCustom,
    DemoPending
  }
}
</script>
