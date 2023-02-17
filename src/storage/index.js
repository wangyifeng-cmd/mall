/**
 * Storage封装
 */

const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem(key,value,module_name){
      if(module_name){
          var val = this.getItem(module_name)
          val[key] = value
          this.setItem(module_name, val)
      }else{
          let val = this.getStorage()
          val[key] = value
          window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
      }
  },
  // 获取某一个模块下面的属性  备注：module_name下面的key属性
  getItem(key,module_name){
      // 有复杂属性的情况下
      if(module_name){
          let val = this.getItem(module_name)
          if(val) return val[key]
      }
      // 没有复杂属性的情况下
      return this.getStorage()[key]
  },
  // 获取整个数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 删除某个值
  clear(key,module_name){
      let val = this.getStorage()
      // 有复杂属性的情况
      if(module_name){
          delete val[module_name][key]
      }
      // 没有复杂属性的情况
      else{
          delete val[key]
      }
      // 改好后的数据重新放入Storage中
      this.setItem(val)
  },
}
