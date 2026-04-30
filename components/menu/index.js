import './style/index.js'

import Menu from './menu.vue'
import Item from './menu-item.vue'
import SubMenu from './menu-submenu.vue'
import ItemGroup from './menu-itemgroup.vue'

Menu.Item = Item
Menu.SubMenu = SubMenu
Menu.ItemGroup = ItemGroup
export default Menu
