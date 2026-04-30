<template>
  <container
    title="Tooltip 提示">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-placement />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoBasic from './demo/basic.vue'
import DemoPlacement from './demo/placement.vue'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoPlacement
  }
}
</script>
