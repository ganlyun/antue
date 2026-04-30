import { createRouter, createWebHistory } from 'vue-router'
import Button from './button/index.vue'
import Badge from './badge/index.vue'
import Menu from './menu/index.vue'
import Icon from './icon/index.vue'
import Input from './input/index.vue'
import Checkbox from './checkbox/index.vue'
import Rate from './rate/index.vue'
import Pagination from './pagination/index.vue'
import Card from './card/index.vue'
import Grid from './grid/index.vue'
import Radio from './radio/index.vue'
import Switch from './switch/index.vue'
import Message from './message/index.vue'
import Transition from './transition/index.vue'
import Breadcrumb from './breadcrumb/index.vue'
import Tabs from './tabs/index.vue'
import Tag from './tag/index.vue'
import Affix from './affix/index.vue'
import Progress from './progress/index.vue'
import ToolTip from './tooltip/index.vue'
import Popover from './popover/index.vue'
import Popconfirm from './popconfirm/index.vue'
import Timeline from './timeline/index.vue'
import Dropdown from './dropdown/index.vue'
import Avatar from './avatar/index.vue'
import Steps from './steps/index.vue'
import TimePicker from './timepicker/index.vue'
import BackTop from './back-top/index.vue'
import Layout from './layout/index.vue'
import Table from './table/index.vue'
import Alert from './alert/index.vue'
import Select from './select/index.vue'
import Modal from './modal/index.vue'
import Spin from './spin/index.vue'
import Divider from './divider/index.vue'
import InputNumber from './input-number/index.vue'
import Collapse from './collapse/index.vue'
import Drawer from './drawer/index.vue'
import Slider from './slider/index.vue'
import Anchor from './anchor/index.vue'
import Form from './form/index.vue'
import List from './list/index.vue'
import Carousel from './carousel/index.vue'
import AutoComplete from './auto-complete/index.vue'
import Cascader from './cascader/index.vue'
import Transfer from './transfer/index.vue'
import Tree from './tree/index.vue'
import TreeSelect from './tree-select/index.vue'
import Upload from './upload/index.vue'
import DatePicker from './date-picker/index.vue'
import Calendar from './calendar/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/checkbox',
      component: Checkbox
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/rate',
      component: Rate
    },
    {
      path: '/pagination',
      component: Pagination
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/switch',
      component: Switch
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/transition',
      component: Transition
    },
    {
      path: '/breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/tabs',
      component: Tabs
    },
    {
      path: '/tag',
      component: Tag
    },
    {
      path: '/affix',
      component: Affix
    },
    {
      path: '/progress',
      component: Progress
    },
    {
      path: '/tooltip',
      component: ToolTip
    },
    {
      path: '/popover',
      component: Popover
    },
    {
      path: '/popconfirm',
      component: Popconfirm
    },
    {
      path: '/timeline',
      component: Timeline
    },
    {
      path: '/dropdown',
      component: Dropdown
    },
    {
      path: '/badge',
      component: Badge
    },
    {
      path: '/avatar',
      component: Avatar
    },
    {
      path: '/steps',
      component: Steps
    },
    {
      path: '/timepicker',
      component: TimePicker
    },
    {
      path: '/backtop',
      component: BackTop
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/alert',
      component: Alert
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/modal',
      component: Modal
    },
    {
      path: '/spin',
      component: Spin
    },
    {
      path: '/divider',
      component: Divider
    },
    {
      path: '/input-number',
      component: InputNumber
    },
    {
      path: '/collapse',
      component: Collapse
    },
    {
      path: '/drawer',
      component: Drawer
    },
    {
      path: '/slider',
      component: Slider
    },
    {
      path: '/anchor',
      component: Anchor
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/carousel',
      component: Carousel
    },
    {
      path: '/auto-complete',
      component: AutoComplete
    },
    {
      path: '/cascader',
      component: Cascader
    },
    {
      path: '/transfer',
      component: Transfer
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/tree-select',
      component: TreeSelect
    },
    {
      path: '/upload',
      component: Upload
    },
    {
      path: '/date-picker',
      component: DatePicker
    },
    {
      path: '/calendar',
      component: Calendar
    }
  ]
})

export default router
