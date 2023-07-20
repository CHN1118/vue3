// 管理分类导航的数据
import { defineStore } from 'pinia'
let useHomeStore = defineStore('home', {
  state: () => ({
    address: '',
    balance: '',
    isIDOActive: false,
    isAnminting: false,
    anminAddress: '0x035aD940537958a205B4fc8d43AE9573046B6FCD',
  }),
  actions: {
    transfer(count: any) { },
    changeIDO(show: boolean): boolean { return this.isIDOActive },
  },
  getters: {
    getAddress: (state) => state.address,
    getBalance: (state) => state.balance,
    isIDO: (state) => state.isIDOActive,
    isAnmin: (state) => state.isAnminting,
  }
})
export default useHomeStore

