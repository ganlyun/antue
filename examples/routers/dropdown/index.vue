<template>
  <container
    title="Dropdown 下拉菜单">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-button />
    </code-show>
    <code-show>
      <demo-placement />
    </code-show>
    <code-show>
      <demo-trigger />
    </code-show>
    <code-show>
      <demo-event />
    </code-show>
    <code-show>
      <demo-submenu />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container.vue'
import CodeShow from '../../common/code-show.vue'
import DemoBasic from './demo/basic.vue'
import DemoButton from './demo/dropdown-button.vue'
import DemoPlacement from './demo/placement.vue'
import DemoTrigger from './demo/trigger.vue'
import DemoEvent from './demo/event.vue'
import DemoSubmenu from './demo/sub-menu.vue'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoButton,
    DemoPlacement,
    DemoTrigger,
    DemoEvent,
    DemoSubmenu
  }
}
</script>
