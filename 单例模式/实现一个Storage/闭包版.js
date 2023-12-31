// Path: DesignPattern/单例模式/实现一个Storage

/**
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。
 * 实现方法 setItem(key,value) 和 getItem(key)。
 */

// > 闭包版本
function StorageBase() {}
StorageBase.prototype.setItem = function (key, value) {
  localStorage.setItem(key, value)
}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key)
}
const Storage = (function () {
  let instance = null
  return function () {
    if (!instance) {
      instance = new StorageBase()
    }
    return instance
  }
})()

const storage1 = Storage()
const storage2 = Storage()
console.log(storage1 === storage2)

storage1.setItem('name', '张三')
console.log(storage2.getItem('name'))