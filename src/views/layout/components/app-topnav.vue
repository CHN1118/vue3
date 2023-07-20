<script lang="ts" setup>
import Loading from 'vue-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css' // 导入加载组件样式
import MainStore from '@/store' //引入store
import connectWallet from "@/utils/web3";
import { ref } from 'vue';
const State = MainStore() //使用store
const loddingShow = ref(false)
function Connection() {
    loddingShow.value = true
    return new Promise(async (resolve, reject) => {
        await connectWallet().then((res: any) => {
            State.home.address = res.address
            State.home.balance = res.balanceChain
            State.home.transfer = res.transfer
            State.home.changeIDO = res.changeIDO
            State.home.isIDOActive = res.isIDOActivess
            State.home.isAnminting = (res.address.toLowerCase() == State.home.anminAddress.toLowerCase())
            loddingShow.value = false
        }).catch((err: any) => {
            reject(err)
        })
    })
}
//检查MetaMask是否已安装
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask已安装!')
    //检查当前网络
    window.ethereum.on('accountsChanged', (accounts: any) => {
        window.location.reload()
    })
    //检查当前网络
    window.ethereum.on('chainChanged', (chainId: any) => {
        window.location.reload()
    })
} else {
    console.log('MetaMask未安装!')
}
Connection()
//格式化地址
function replaceStr(str: string) {
    return str.substring(0, 4) + '...' + str.substring(38)
}
//格式化金额
function formatBalance(balance: string) {
    let length = balance.length;
    let position = 18;
    let result
    if (length < position) {
        for (let i = 0; i < position - length + 1; i++) {
            balance = "0" + balance;
        }
        result = "0." + balance;
    } else {
        result = balance.slice(0, length - position) + "." + balance.slice(length - position);
    }
    return result.slice(0, result.indexOf(".") + 4);
}
</script>
<script lang="ts">
export default { name: "AppTopnav" }
</script>
<template>
    <nav class="app_topnav">
        <div class="container">
            <img class="layer_logo" src="@/assets/logo.png" width="40" height="40" alt="">
            <div class="logo_title">
                <div class="hone bpColor">SZmeme</div>
                <p>让我们在一起CX</p>
            </div>
            <div class="acc_blan">
                <div class="acc_blan_box">
                    <div style="padding:0 5px;">
                        <loading :height="40" :width="20" transition="none" color="#44c9b0" :active="loddingShow">
                        </loading>
                        {{ !loddingShow ? ' ' + formatBalance(State.home.getBalance) + ' ETH ' : '' }}
                    </div>
                    <div class="acc_blan_box_item" v-if="!loddingShow">
                        {{ replaceStr(State.home.getAddress) }}
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="less" scoped>
.app_topnav {
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 999;

    .acc_blan {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: end;
        align-items: center;

        .acc_blan_box {
            background: linear-gradient(0deg, #ffffff20, #ffffff20), linear-gradient(94.31deg, #ffffff20 2.67%, #ffffff20 100%);
            font-family: Manrope-Bold;
            height: 40px;
            display: flex;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.199);
            -webkit-backdrop-filter: blur(25px);
            backdrop-filter: blur(25px) !important;

            .acc_blan_box_item {
                background: linear-gradient(0deg, #2a4eb29f, rgba(0, 250, 67, 0.191)), linear-gradient(94.31deg, rgba(0, 250, 67, 0.324) 2.67%, rgba(229, 0, 250, 0.49) 100%);
                box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.199);
                height: 100%;
                padding: 0 6px;
                font-weight: 500;
                border-radius: 5px;
                overflow: hidden;
            }
        }
    }
}
</style>
