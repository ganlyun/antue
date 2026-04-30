<script>
import { h } from 'vue'
  import AtuInput from './input.vue'
  import AtuIcon from '../icon'

  export default {
    name: 'inputSearch',
    props: {
      addonAfter: String,
      addonBefore: String,
      autocomplete: {
        type: String,
        default: 'off'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      className: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      id: {
        type: String
      },
      name: {
        type: String
      },
      number: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      prefix: String,
      prefixCls: {
        type: String,
        default: 'ant-input'
      },
      readonly: {
        type: Boolean,
        default: false
      },
      size: String,
      suffix: String,
      type: {
        type: String
      },
      value: null
    },
    render () {
      const searchIcon = h(AtuIcon, {
        type: 'search',
        class: 'ant-input-search-icon',
        onClick: () => {
          this.$emit('search', this.value)
        }
      })
      return h(AtuInput, {
        ...this.$props,
        class: 'ant-input-search',
        onInput: (value) => this.$emit('input', value),
        onPressEnter: () => this.$emit('search', this.value)
      }, () => [searchIcon])
    }
  }
</script>
