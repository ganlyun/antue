import { createApp, h } from 'vue'
import './style/index.js'
import MessageBox from './message-box.vue'
import Message from './message.vue'

let boxInstance
let boxEl
let messageInstances = []
let seed = 1
let prefixCls = 'ant-message'
let defaultTop = 24
let defaultDuration = 3
let getContainer

const getBoxEl = () => {
  if (!boxInstance) {
    const container = document.createElement('div')
    boxInstance = createApp({
      render() {
        return h(MessageBox, {
          prefixCls,
          styles: { top: `${defaultTop}px` }
        })
      }
    })
    boxEl = container
    if (getContainer) {
      getContainer().appendChild(container)
    } else {
      document.body.appendChild(container)
    }
    boxInstance.mount(container)
  }
  return boxEl
}

const notice = (content, duration, type, onClose) => {
  const container = getBoxEl()
  const id = `${prefixCls}${seed++}`
  
  const messageWrapper = document.createElement('div')
  container.appendChild(messageWrapper)

  const instance = createApp({
    render() {
      return h(Message, {
        prefixCls,
        content,
        duration,
        type,
        visible: true,
        onClose: () => {
          close(id, onClose)
        }
      })
    }
  })

  const vm = instance.mount(messageWrapper)
  
  const messageInstance = {
    id,
    vm,
    instance
  }
  
  messageInstances.push(messageInstance)

  return () => {
    // Trigger close via prop update or direct method if exposed
    // For simplicity in this migration, we rely on the component's internal logic or re-render
    // Ideally, we'd pass a reactive ref for 'visible'
    close(id, onClose)
  }
}

const close = (id, userOnClose) => {
  const index = messageInstances.findIndex(inst => inst.id === id)
  if (index > -1) {
    const instance = messageInstances[index]
    if (typeof userOnClose === 'function') {
      userOnClose(instance)
    }
    
    // Unmount and remove from DOM
    instance.instance.unmount()
    if (instance.vm.$el && instance.vm.$el.parentNode) {
      instance.vm.$el.parentNode.removeChild(instance.vm.$el)
    }
    
    messageInstances.splice(index, 1)
  }
}

const message = {
  info (content, duration = defaultDuration, onClose) {
    return notice(content, duration, 'info', onClose)
  },
  success (content, duration = defaultDuration, onClose) {
    return notice(content, duration, 'success', onClose)
  },
  error (content, duration = defaultDuration, onClose) {
    return notice(content, duration, 'error', onClose)
  },
  warn (content, duration = defaultDuration, onClose) {
    return notice(content, duration, 'warning', onClose)
  },
  warning (content, duration = defaultDuration, onClose) {
    return notice(content, duration, 'warning', onClose)
  },
  loading (content, duration = defaultDuration, onClose) {
    return notice(content, duration, 'loading', onClose)
  },
  config (options) {
    if (options.top !== undefined) {
      defaultTop = options.top
      boxInstance = null // Reset to recreate with new top
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer
    }
  },
  destroy () {
    if (boxInstance) {
      boxInstance.unmount()
      if (boxEl && boxEl.parentNode) {
        boxEl.parentNode.removeChild(boxEl)
      }
    }
    boxInstance = null
    boxEl = null
    messageInstances = []
  }
}

export default {
  install: (app) => {
    app.config.globalProperties.$message = message
    app.provide('$message', message)
  }
}
