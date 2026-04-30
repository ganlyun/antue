<template>
  <container
    title="TimePicker 时间选择框">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-value />
    </code-show>
    <code-show>
      <demo-size />
    </code-show>
    <code-show>
      <demo-disabled />
    </code-show>
    <code-show>
      <demo-disable-options />
    </code-show>
    <code-show>
      <demo-addon />
    </code-show>
    <code-show>
      <demo-hide-column />
    </code-show>
    <code-show>
      <demo12-hours />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoBasic from './demo/basic.vue'
import DemoValue from './demo/value.vue'
import DemoSize from './demo/size.vue'
import DemoDisabled from './demo/disabled.vue'
import DemoDisableOptions from './demo/disable-options.vue'
import DemoAddon from './demo/addon.vue'
import DemoHideColumn from './demo/hide-column.vue'
import Demo12Hours from './demo/12hours.vue'

// import moment from 'moment'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoValue,
    DemoSize,
    DemoDisabled,
    DemoDisableOptions,
    DemoAddon,
    DemoHideColumn,
    Demo12Hours
  }
}
</script>

