---
title: UI 规范
---

本规范用于在 Antue（Vue 版 Ant Design 风格组件库）项目内统一视觉与交互口径，作为产品设计与前端开发的共同参考。规范以现有主题变量为准（见 [default.less](file:///workspace/components/style/themes/default.less)），在不破坏一致性的前提下允许通过主题覆盖进行品牌化。

## 1. 设计原则

1. 一致性：同类元素同样式、同交互、同用法；避免同一概念出现多个视觉表达。
2. 清晰性：信息层级明确；优先用布局、字号、留白组织内容，其次才用颜色强调。
3. 效率：常用路径最短；表单与列表默认提供可批量操作、可搜索、可排序的能力（按业务需要开启）。
4. 克制：默认遵循 Ant Design 的视觉与交互语义，不做“局部特例”。

## 2. 主题与 Token（设计变量）

项目样式以 Less 变量作为唯一真源，优先复用 Ant Design 的变量体系。

### 2.1 颜色（语义色）

定义位置： [default.less](file:///workspace/components/style/themes/default.less)、[colors.less](file:///workspace/components/style/color/colors.less)

- 主色：`@primary-color`（默认 `@blue-6` = `#108ee9`）
- 信息：`@info-color`（默认同主色）
- 成功：`@success-color`（默认 `@green-6` = `#00a854`）
- 警告：`@warning-color`（默认 `@yellow-6` = `#ffbf00`）
- 错误/高亮：`@error-color` / `@highlight-color`（默认 `@red-6` = `#f04134`）
- 文本：
  - 主文本：`@text-color`（`fade(#000, 65%)`）
  - 次文本：`@text-color-secondary`（`fade(#000, 43%)`）
  - 标题：`@heading-color`（`fade(#000, 85%)`）
- 背景与分割线：
  - 页面背景：`@body-background`（默认 `#fff`）
  - 组件背景：`@component-background`（默认 `#fff`）
  - 基础灰背景：`@background-color-base`（默认 `#f7f7f7`）
  - 边框：`@border-color-base`（默认 `#d9d9d9`）、分割线 `@border-color-split`（默认 `#e9e9e9`）

使用约束：
- 语义色用于“状态表达”，不要用于“纯装饰”。例如错误提示统一用 `@error-color`，不要自定义红色值。
- 交互态（hover/active/selected）优先使用 `@primary-1` 等由主色派生的色阶，避免出现不成体系的浅色背景。

### 2.2 字体与排版

定义位置： [default.less](file:///workspace/components/style/themes/default.less)、[base.less](file:///workspace/components/style/core/base.less)

- 字体族：`@font-family` / `@font-family-no-number`
- 基准字号：`@font-size-base: 12px`
- 大号字号：`@font-size-lg: @font-size-base + 2px`
- 行高：`@line-height-base: 1.5`
- 代码字体：`@code-family`

使用约束：
- 正文与表单默认使用 `@font-size-base`；信息密度较低的区域可以用 `@font-size-lg`。
- 标题用字号与字重建立层级，不用“更深的颜色”替代层级。

### 2.3 圆角、阴影、描边

- 圆角：`@border-radius-base: 4px`，小圆角 `@border-radius-sm: 2px`
- 阴影：`@box-shadow-base`（由 `@shadow-1-down` 等组成）
- Outline：`@outline-width: 2px`、`@outline-color: @primary-color`

使用约束：
- 阴影只用于浮层与可提升的容器（如 Popover、Dropdown、Modal），普通卡片默认以边框为主。
- 组件 focus 态应保证可见（键盘可达），不要去掉 outline 而不提供替代方案。

### 2.4 动效（Motion）

- 时长：`@animation-duration-slow: .3s`（Modal 等）、`@animation-duration-base: .2s`、`@animation-duration-fast: .1s`（Tooltip 等）
- 缓动：`@ease-out` / `@ease-in` / `@ease-in-out` 等（见 [default.less](file:///workspace/components/style/themes/default.less)）

使用约束：
- 动效服务于结构变化与注意力引导，不用于装饰性“花活”。
- 同类动效使用同一时长与缓动，避免“每个组件都不一样”的体验。

## 3. 布局与栅格（Grid）

定义位置： [default.less](file:///workspace/components/style/themes/default.less)

- 栅格列数：`@grid-columns: 24`
- 响应式断点：
  - `@screen-xs: 480px`
  - `@screen-sm: 768px`
  - `@screen-md: 992px`
  - `@screen-lg: 1200px`
  - `@screen-xl: 1600px`

使用约束：
- 页面级布局优先使用 Layout / Grid 体系，避免用不规则的绝对定位实现结构。
- 断点内保持一致的左右留白与对齐线，避免不同页面“内容起始线”不一致。

## 4. 间距（Spacing）与密度

间距建议采用 4px 作为基础单位（与按钮/输入框高度与 padding 体系相容），常用尺度建议如下：

- XS：4px
- S：8px
- M：12px
- L：16px
- XL：24px
- 2XL：32px
- 3XL：48px

使用约束：
- 同一屏幕内同级元素之间间距一致；不同级别间距按层级递增。
- 列表与表格的默认密度参考主题变量：如 `@table-padding-vertical: 16px`、`@table-padding-horizontal: 8px`（见 [default.less](file:///workspace/components/style/themes/default.less)）。

## 5. 交互状态（State）

所有可交互组件统一具备以下状态，并保持可预测性：

- Default：默认态
- Hover：可点击区域在 hover 下提供明显反馈（颜色/背景/描边之一即可）
- Active：按下/激活态反馈要强于 hover
- Focus：键盘 focus 必须可见（outline 或等价表现）
- Disabled：不可用态需同时体现“不可点击”与“信息不可编辑”
- Loading：触发后立即给出反馈，避免重复提交

落地参考：
- 链接样式与 focus/hover/active 的处理在 [base.less](file:///workspace/components/style/core/base.less) 中已有定义。
- 输入框 hover 边框色使用 `@input-hover-border-color: @primary-color`（见 [default.less](file:///workspace/components/style/themes/default.less)）。

## 6. 组件通用规范

### 6.1 命名与前缀

- CSS 类前缀：统一使用 `@ant-prefix`（默认 `ant`），组件默认 `prefixCls` 与 Ant Design 约定保持一致（参考 [组件规范](file:///workspace/docs/rules/component.zh-CN.md)）。

### 6.2 尺寸体系（Size）

通用尺寸推荐仅提供 3 档：`small` / `default` / `large`，并在组件间保持一致的高度与内边距。

现有主题默认值（用于对齐）：
- 按钮高度：`@btn-height-sm: 22px`、`@btn-height-base: 28px`、`@btn-height-lg: 32px`
- 输入框高度：`@input-height-sm: 22px`、`@input-height-base: 28px`、`@input-height-lg: 32px`

### 6.3 文案（Copy）与信息反馈

- 按钮文案使用动词开头，避免含糊词（“确定/完成”应尽量补全语义：如“保存”“提交”“删除”）。
- 错误提示：
  - 表单校验错误就近显示（字段下方），并在提交时滚动到首个错误字段（如业务需要）。
  - 系统级错误用 Message/Notification，避免在页面多处重复弹错。

### 6.4 浮层（Overlay）层级

统一遵循 z-index 体系，避免业务代码随意写 9999。

默认层级（见 [default.less](file:///workspace/components/style/themes/default.less)）：
- Modal：`@zindex-modal: 1000`
- Notification/Message：`@zindex-notification: 1010`、`@zindex-message: 1010`
- Popover：`@zindex-popover: 1030`
- Picker/Dropdown：`@zindex-picker: 1050`、`@zindex-dropdown: 1050`
- Tooltip：`@zindex-tooltip: 1060`

## 7. 无障碍（A11y）与可用性

- 键盘：所有可交互元素支持 Tab 到达；弹窗打开后焦点进入弹窗，关闭后回到触发点。
- 可读性：文本与背景对比度满足基本可读性要求；不要用“只靠颜色”表达关键差异（配合 icon/文本）。
- 可点性：点击区域不小于 32x32（如业务场景允许），图标按钮应提供 tooltip 或 aria-label。

## 8. 如何做主题定制（开发侧）

- 主题变量入口： [default.less](file:///workspace/components/style/themes/default.less)
- 色板入口： [colors.less](file:///workspace/components/style/color/colors.less)

定制原则：
- 只覆盖语义变量（如 `@primary-color`、`@success-color`、`@border-radius-base`），避免直接改组件内部样式。
- 新增变量时保持命名与 Ant Design 对齐，避免出现业务私货变量散落各处。

