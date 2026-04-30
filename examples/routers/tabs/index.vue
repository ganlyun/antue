<template>
  <container>
    <code-show>
      <demo-basic></demo-basic>
    </code-show>
    <code-show>
      <demo-disabled></demo-disabled>
    </code-show>
    <code-show>
      <demo-icon></demo-icon>
    </code-show>
    <code-show>
      <demo-slide></demo-slide>
    </code-show>
    <code-show>
      <demo-extra></demo-extra>
    </code-show>
    <code-show>
      <demo-size></demo-size>
    </code-show>
    <code-show>
      <demo-position></demo-position>
    </code-show>
    <code-show>
      <demo-card></demo-card>
    </code-show>
    <code-show>
      <demo-editable-card></demo-editable-card>
    </code-show>
    <code-show>
      <demo-custom-add></demo-custom-add>
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoBasic from './demo/basic.vue'
import DemoDisabled from './demo/disabled.vue'
import DemoIcon from './demo/icon.vue'
import DemoSlide from './demo/slide.vue'
import DemoExtra from './demo/extra.vue'
import DemoSize from './demo/size.vue'
import DemoPosition from './demo/position.vue'
import DemoCard from './demo/card.vue'
import DemoEditableCard from './demo/editable-card.vue'
import DemoCustomAdd from './demo/custom-add.vue'

export default {
  data () {
    return {
      active: 1
    }
  },
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoDisabled,
    DemoIcon,
    DemoSlide,
    DemoExtra,
    DemoSize,
    DemoPosition,
    DemoCard,
    DemoEditableCard,
    DemoCustomAdd
  }
}
</script>
