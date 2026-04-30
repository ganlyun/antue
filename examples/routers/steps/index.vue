<template>
  <container
    title="Steps 步骤条">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-small-size />
    </code-show>
    <code-show>
      <demo-icon />
    </code-show>
    <code-show>
      <demo-next-step />
    </code-show>
    <code-show>
      <demo-vertical />
    </code-show>
    <code-show>
      <demo-vertical-small />
    </code-show>
    <code-show>
      <demo-error />
    </code-show>
    <code-show>
      <demo-progress-dot />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoBasic from './demo/basic.vue'
import DemoSmallSize from './demo/small-size.vue'
import DemoIcon from './demo/icon.vue'
import DemoNextStep from './demo/next-step.vue'
import DemoVertical from './demo/vertical.vue'
import DemoVerticalSmall from './demo/vertical-small.vue'
import DemoError from './demo/error.vue'
import DemoProgressDot from './demo/progress-dot.vue'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoSmallSize,
    DemoIcon,
    DemoNextStep,
    DemoVertical,
    DemoVerticalSmall,
    DemoError,
    DemoProgressDot
  }
}
</script>
