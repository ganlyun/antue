<template>
  <container
    title="Tag 标签">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-colorful />
    </code-show>
    <code-show>
      <demo-checkable />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import ARow from '@/row'
import Icon from '@/icon'
import ACol from '@/col'
import DemoBasic from './demo/basic.vue'
import DemoColorful from './demo/colorful.vue'
import DemoCheckable from './demo/checkable.vue'

export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    DemoBasic,
    DemoColorful,
    DemoCheckable,
    Icon
  }
}
</script>

