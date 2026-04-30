<template>
  <container
    title="Transition 动画">
    <code-show>
      <demo-normal></demo-normal>
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoNormal from './demo/normal.vue'

export default {
  components: {
    Container,
    CodeShow,
    DemoNormal
  }
}
</script>
