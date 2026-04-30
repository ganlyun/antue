<template>
  <span
    ref="picker"
    :class="classes"
    @click="handleClick">
    <input
      ref="input"
      :class="`${prefixCls}-input`"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value && value.format(defaultFormat) || ''" />
    <span :class="`${prefixCls}-icon`" />
    
    <Transition type="slide" motion="up">
      <div
        v-show="visible"
        :class="[
          `${prefixCls}-panel`,
          popupClassName,
          {
            [`${prefixCls}-panel-narrow`]: (!showHour || !showMinute || !showSecond) && !use12Hours
          }
        ]"
        ref="popper">
        <Panel
          :allowEmpty="allowEmpty"
          :clearText="clearText"
          :defaultOpenValue="defaultOpenValue"
          :disabledHours="disabledHours"
          :disabledMinutes="disabledMinutes"
          :disabledSeconds="disabledSeconds"
          :format="defaultFormat"
          :hideDisabledOptions="hideDisabledOptions"
          :prefixCls="`${prefixCls}-panel`"
          :placeholder="placeholder"
          :showHour="showHour"
          :showMinute="showMinute"
          :showSecond="showSecond"
          :use12Hours="use12Hours"
          :isShow="visible"
          @change="handleChange"
          @clear="handleClear"
          :value="value">
          <slot></slot>
        </Panel>
      </div>
    </Transition>
  </span>
</template>

<script>
import moment from 'moment'
import Popper from '../_mixin/popper'
import Panel from './panel.vue'
import { oneOf } from '../_util/proptype'
import Transition from '../transition'

export function generateShowHourMinuteSecond (format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: (
      format.indexOf('H') > -1 ||
        format.indexOf('h') > -1 ||
        format.indexOf('k') > -1
    ),
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  }
}

export default {
  name: 'timepicker',
  mixins: [Popper],
  model: {
    event: 'change'
  },
  data () {
    return {
      popperModifiers: {
        inner: {
          enabled: true
        },
        offset: {
          offset: '2px'
        }
      },
      visible: false
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-time-picker'
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    clearText: {
      type: String,
      default: 'clear'
    },
    defaultOpenValue: {
      type: Object,
      validator (value) {
        return moment.isMoment(value)
      },
      default: () => moment()
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledHours: {
      type: Function,
      default: () => []
    },
    disabledMinutes: {
      type: Function,
      default: (h) => []
    },
    disabledSeconds: {
      type: Function,
      default: (h, m) => []
    },
    format: {
      type: String,
      default: ''
    },
    hideDisabledOptions: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'topLeft'
    },
    placeholder: {
      type: String,
      default: 'Select Time'
    },
    popupClassName: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['large', 'default', 'small'])
      }
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    value: {
      validator (value) {
        return value === null || moment.isMoment(value)
      },
      required: true
    }
  },
  components: {
    Panel,
    Transition
  },
  computed: {
    classes () {
      const prefixCls = this.prefixCls
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ]
    },
    defaultFormat () {
      return this.format ? this.format : this.use12Hours ? 'h:mm:ss a' : 'HH:mm:ss'
    },
    showHour () {
      return generateShowHourMinuteSecond(this.defaultFormat).showHour
    },
    showMinute () {
      return generateShowHourMinuteSecond(this.defaultFormat).showMinute
    },
    showSecond () {
      return generateShowHourMinuteSecond(this.defaultFormat).showSecond
    }
  },
  mounted () {
    this.popper = this.$refs.popper
    this.reference = this.$refs.picker
    this.visible = this.open
    document.addEventListener('click', this.closePopper)
  },
  beforeUnmount () {
    document.removeEventListener('click', this.closePopper)
  },
  watch: {
    open (v) {
      this.visible = v
    },
    visible (v) {
      this.$emit('open-change', v)
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) {
        return
      }
      this.visible = !this.visible
      this.$refs.input.blur()
    },
    handleChange (value) {
      this.$emit('change', value, value.format(this.format))
    },
    handleClear (e) {
      this.visible = false
      this.$emit('clear', e)
    },
    closePopper (e) {
      if (!this.visible ||
        !this.$el ||
        !this.reference ||
        !this.popper ||
        this.$el.contains(e.target) ||
        this.reference.contains(e.target) ||
        this.popper.contains(e.target)) return
      this.visible = false
    }
  }
}
</script>
