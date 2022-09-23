(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{519:function(n,e,t){"use strict";t.r(e);var s=t(1),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[n._v("#")]),n._v(" 更新")]),n._v(" "),t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[n._v("#")]),n._v(" 说明 :")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("1.5版本完成了iview的基础组件抽离\n从 1.4 更新至 1.5 可以体验更轻便的TmxUI库\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[n._v("#")]),n._v(" 使用 :")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("import")]),n._v(" TmxUI from "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'tmx-ui'")]),n._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("全局注册指令: TmxUI.TmxUiDirective.importDirective\n全局挂载弹框: TmxUI.ModalFunction\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("可删除按需引入: eg: import { TmxCard } from 'tmx-ui'\n可替换iview手动引入: \n  eg: import zhCnLocale from 'view-design/src/locale/lang/zh-CN'\n    -> import zhCnLocale from 'tmx-ui/src/locale/lang/zh-CN'\n  eg: import { oneOf } from 'view-design/src/utils/assist';\n    -> import { oneOf } from 'tmx-ui/src/utils/assist';\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("可删除iview样式引入: 1.5.13+\n  import 'view-design/dist/styles/iview.css'\n  -> 替换为 import 'tmx-ui/lib/styles/tmx-ui-view.css'\n")])])]),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[n._v("#")]),n._v(" 目录结构 :")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("src\n├── components\n│   ├── "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\n│   └── viewComponents\n│       ├── affix\n│       ├── alert\n│       ├── anchor\n│       ├── anchor-link\n│       ├── auto-complete\n│       ├── avatar\n│       ├── back-top\n│       ├── badge\n│       ├── base\n│       ├── breadcrumb\n│       ├── breadcrumb-item\n│       ├── button\n│       ├── button-group\n│       ├── card\n│       ├── carousel\n│       ├── carousel-item\n│       ├── cascader\n│       ├── checkbox\n│       ├── checkbox-group\n│       ├── circle\n│       ├── col\n│       ├── collapse\n│       ├── color-picker\n│       ├── content\n│       ├── date-picker\n│       ├── divider\n│       ├── drawer\n│       ├── dropdown\n│       ├── dropdown-item\n│       ├── dropdown-menu\n│       ├── footer\n│       ├── form\n│       ├── form-item\n│       ├── grid\n│       ├── header\n│       ├── icon\n│       ├── input\n│       ├── input-number\n│       ├── layout\n│       ├── list\n│       ├── loading-bar\n│       ├── menu\n│       ├── menu-group\n│       ├── menu-item\n│       ├── message\n│       ├── modal\n│       ├── notice\n│       ├── option\n│       ├── option-group\n│       ├── options\n│       ├── page\n│       ├── panel\n│       ├── poptip\n│       ├── progress\n│       ├── radio\n│       ├── radio-group\n│       ├── rate\n│       ├── row\n│       ├── scroll\n│       ├── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v("\n│       ├── sider\n│       ├── slider\n│       ├── spin\n│       ├── "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("split")]),n._v("\n│       ├── step\n│       ├── steps\n│       ├── submenu\n│       ├── switch\n│       ├── tab-pane\n│       ├── table\n│       ├── tabs\n│       ├── tag\n│       ├── "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("time")]),n._v("\n│       ├── time-picker\n│       ├── timeline\n│       ├── timeline-item\n│       ├── tooltip\n│       ├── transfer\n│       ├── tree\n│       └── upload\n├── directives\n│   ├── directives.js\n│   ├── index.js\n│   └── modules\n│       ├── clickoutside.js\n│       ├── scrollbar.js\n│       ├── transfer-dom.js\n│       └── v-click-outside-x.js\n├── index.js\n├── locale\n│   ├── format.js\n│   ├── index.js\n│   ├── lang\n│   │   ├── en-US.js\n│   │   ├── es-ES.js\n│   │   ├── ja-JP.js\n│   │   ├── zh-CN.js\n│   │   └── zh-TW.js\n│   └── lang.js\n├── mixins\n│   ├── emitter.js\n│   ├── form.js\n│   ├── link.js\n│   ├── locale.js\n│   └── side-menu\n│       └── mixin.js\n├── plugin\n│   └── scrollbar\n│       ├── index.css\n│       └── index.js\n├── styles\n│   ├── "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\n│   └── index.less\n└── utils\n    ├── assist.js\n    ├── calcTextareaHeight.js\n    ├── csv.js\n    ├── date.js\n    ├── dom.js\n    ├── random_str.js\n    ├── transfer-queue.js\n    └── util.js\n\n")])])]),t("h2",{attrs:{id:"可用组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可用组件"}},[n._v("#")]),n._v(" 可用组件:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("  TmxIcon,\n  TmxEmpty,\n  TmxSideMenu,\n  TmxUserBar,\n  TmxCard,\n  TmxPageHeader,\n  TmxTableHeader,\n  TmxPage,\n  TmxDescList,\n  TmxTransfer,\n  TmxEllipsis,\n  TmxModal,\n  TMxTableLoading,\n  Affix,\n  Alert,\n  Anchor,\n  AnchorLink,\n  AutoComplete,\n  Avatar,\n  BackTop,\n  Badge,\n  Button,\n  ButtonGroup,\n  Breadcrumb,\n  BreadcrumbItem,\n  Card,\n  Carousel,\n  CarouselItem,\n  Cascader,\n  Collapse,\n  Col,\n  ColorPicker,\n  Content,\n  DatePicker,\n  Dropdown,\n  DropdownMenu,\n  DropdownItem,\n  Drawer,\n  Divider,\n  Grid,\n  Form,\n  FormItem,\n  CheckboxGroup,\n  Checkbox,\n  Icon,\n  Input,\n  InputNumber,\n  Layout,\n  List,\n  ListItem,\n  ListItemMeta,\n  Menu,\n  MenuItem,\n  Modal,\n  Option,\n  OptionGroup,\n  Page,\n  Panel,\n  Poptip,\n  Radio,\n  RadioGroup,\n  Rate,\n  Row,\n  Select,\n  Scroll,\n  Sider,\n  Slider,\n  Spin,\n  Step,\n  Steps,\n  Split,\n  Submenu,\n  Tag,\n  Tabs,\n  Table,\n  TabPane,\n  Time,\n  Timeline,\n  TimelineItem,\n  TimePicker,\n  Tooltip,\n  Transfer,\n  Tree,\n  Upload\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);