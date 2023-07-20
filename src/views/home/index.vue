<script lang="ts" setup name="AppFooter">
import { onMounted, ref } from 'vue';
import AppFooterVue from '@/views/layout/components/app-footer.vue'
import { ECharts, EChartsOption, init, Graphic } from 'echarts';
import * as echarts from 'echarts';
import MainStore from '@/store' //引入store
const State = MainStore() //使用store
const count = ref(1);
const inputShow = ref(true);
function handleInput(e: any) {
    const pattern = /^[1-9]\d*$/; // 正则表达式，用于匹配大于等于1的整数
    const value = e.target.value;
    if (pattern.test(value)) {
        inputShow.value = true;
        count.value = +value;
    } else {
        inputShow.value = false;
        count.value = count.value;
    }
}
function inputBlur() {
    if (!inputShow.value) {
        inputShow.value = true;
        count.value = 1
        return;
    } else {
        return
    }
}
onMounted(() => {
    const charEle = document.getElementById('char') as HTMLElement;
    const charEch: ECharts = init(charEle);
    // 定义数据
    const data = [
        { value: 1, },
        { value: 1, },
        { value: 9.2, },
        { value: 88.8, }
    ];
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    charEch.setOption({
        series: [
            {
                type: 'pie',
                radius: '90%',
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    borderColor: '#ffffffff',
                    color: (params: any) => {
                        const percent = (params.data.value / total) * 100; // 计算百分比                         
                        const color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                            { offset: 0, color: '#c88cd670' },
                            { offset: 1, color: '#8ed3fc70' },
                        ]);
                        return color;
                    },
                },
                labelLine: {
                    show: false
                },
                animation: false
            }
        ]
    });
});
async function changeIDO() {
    State.home.isIDOActive = await State.home.changeIDO(State.home.isIDOActive)
}
</script>
<script lang="ts">
export default { name: "Homw" }

function cos(angle: any) {
    throw new Error('Function not implemented.');
}
</script>

<template>
    <div class="home">
        <div class="container">
            <div class="page1 page">
                <div class="bgcone">
                    <img src="@/assets/images/Frame_s.png" alt="">
                </div>
                <div class="bgctwo">
                    <img src="@/assets/images/Frame_s.png" alt="">
                </div>
                <div class="bgcone1">
                    <img src="@/assets/images/Frame.png" alt="">
                </div>
                <div class="bgctwo1">
                    <img src="@/assets/images/Frame.png" alt="">
                </div>
                <div class="page2 page">
                    <img class="opimg_o" src="@/assets/images/Frame.png" alt="">
                    <img class="opimg_s" src="@/assets/images/Frame_s.png" alt="">
                    <div class="page2_container">
                        <div class="page2_card cord">
                            <div class="title bpColor">
                                How to buy
                            </div>
                            <div class="page2_body">
                                <div class="page2_body_item cord">
                                    <img src="@/assets/images/icon1.png" alt="">
                                    <div class="text">
                                        <div class="text_title">Create a wallet</div>
                                        <div class="content">download metamask or your wallet of choice from the app store
                                            or
                                            google play store for free. Desktop users, download the google chrome extension
                                            by
                                            going to metamask.io. </div>
                                    </div>
                                </div>
                                <div class="page2_body_item cord">
                                    <img src="@/assets/images/icon2.png" alt="">
                                    <div class="text">
                                        <div class="text_title">Get some ETH</div>
                                        <div class="content">SZmeme is based on Arbiturm. If you don’t have any ETH, you can
                                            transfer from another wallet, or buy on another exchange and send it to your
                                            wallet.
                                        </div>
                                    </div>
                                </div>
                                <div class="page2_body_item cord">
                                    <img src="@/assets/images/icon3.png" alt="">
                                    <div class="text">
                                        <div class="text_title">Go to Uniswap</div>
                                        <div class="content">connect to Uniswap. Go to app.uniswap.org in google chrome or
                                            on
                                            the browser inside your Metamask app. Connect your wallet. Paste the SZmeme
                                            token
                                            address into Uniswap, select SZmeme, and confirm. When Metamask prompts you for
                                            a
                                            wallet signature, sign.</div>
                                    </div>
                                </div>
                                <div class="page2_body_item cord">
                                    <img src="@/assets/images/icon4.png" alt="">
                                    <div class="text">
                                        <div class="text_title">Switch ETH for SZmeme</div>
                                        <div class="content">We have ZERO taxes so you don’t need to worry about buying with
                                            a
                                            specific slippage, although you may need to use slippage during times of market
                                            volatility.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page3 page">
                            <div class="title bpColor">
                                Tokenomics
                            </div>
                            <div class="page3_body cord">
                                <div class="page3_body_top">
                                    <p>Token Supply:</p>
                                    <p>210,000,000,000,000</p>
                                </div>
                                <div class="page3_body_center">
                                    <div id="char" style="width: 230px; height: 230px"></div>
                                    <!-- <div class="rotate_box">
                                        <div class="pie_cone"></div>
                                        <div class="pie_con1"></div>
                                        <div class="pie_con2"></div>
                                    </div> -->
                                </div>
                                <div class="page3_body_bottom">
                                    <div class="page3_body_bottom_item">
                                        <div class="left">88.8%</div>
                                        <div class="right">of the token were sent to the black hole and burnt to commemorate
                                            the
                                            birth
                                            of the first city memcoin</div>
                                    </div>
                                    <div class="page3_body_bottom_item">
                                        <div class="left">1%</div>
                                        <div class="right">of the token are used for IDO donation airdrops to cultivate the
                                            first
                                            batch
                                            of seed users
                                            <p style="opacity: .5;font-size: 10px;">All donated funds will be added to the
                                                initial
                                                liquidity pool, LP
                                                tokens will be
                                                destroyed, and contract management authority will be given up </p>
                                        </div>
                                    </div>
                                    <div class="page3_body_bottom_item">
                                        <div class="left">1%</div>
                                        <div class="right">of the token are used to add initial liquidity to the pool</div>
                                    </div>
                                    <div class="page3_body_bottom_item">
                                        <div class="left">9.2%</div>
                                        <div class="right">of the token listed on centralized exchanges, bridges and
                                            liquidity
                                            pools
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="onetext cord">
                                <p class="bpColor">Community seed donation plan</p>
                                <div class="texttwo">Every user has one chance to purchase this plan at the price of 0.03
                                    ETH,
                                    hard
                                    cap
                                    2.1T, with each
                                    plan the user will be able to acquire 1 billion tokens.</div>
                                <div style="display: flex;align-items: center;margin-top: 10px;gap: 5px;">
                                    <div class="input_box">
                                        <input type="text" @input="handleInput" @blur="inputBlur" v-model="count">
                                        <div v-if="!inputShow" style="color: #f65b84;font-size: 12px;padding: 4px 0;">
                                            integer
                                        </div>
                                    </div>
                                    <div class="texttwo"> * 0.03</div>
                                </div>
                                <div :class="['page4btn', 'cord', State.home.isIDO ? '' : 'disabled']"
                                    @click="State.home.transfer(count)">
                                    Count me in!
                                </div>
                                <div v-if="State.home.isAnmin" :class="['page4btn', 'cord']" @click="changeIDO">
                                    {{ State.home.isIDO ? 'DeactivateIDO' : 'ActivateIDO' }}
                                </div>
                            </div>
                        </div>
                        <div class="page4 page">
                            <div class="title bpColor">
                                Roadmaps
                            </div>
                            <p class="title2">SZmeme's wild and Niubi path ahead</p>
                            <div class="page4_body cord1">
                                <div class="page4_body_item" style="font-size: 14px;">
                                    <div class="top">第一阶段：拉盘！</div>
                                    <div class="bom bpColor">Phase 1:Pump!</div>
                                </div>
                                <div class="page4_body_item" style="font-size: 16px;">
                                    <div class="top">第二阶段：拉盘！拉盘！拉盘！</div>
                                    <div class="bom bpColor">Phase 2:Pump!Pump!Pump!</div>
                                </div>
                                <div class="page4_body_item" style="font-size: 20px;">
                                    <div class="top">第三阶段：拉盘到突破天际！！</div>
                                    <div class="bom bpColor">Phase 3: Pump to the moon !!!!! </div>
                                </div>
                            </div>
                        </div>
                        <AppFooterVue></AppFooterVue>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
//home
.home {
    width: 100vw;
    padding-top: 70px;

    .container {
        padding: 0 !important;

        .input_box {
            width: 100px;
            background: linear-gradient(0deg, #ffffff00, #ffffff00), linear-gradient(94.31deg, #ffffff00 2.67%, #ffffff00 100%);
            box-shadow: -1px 0px 10px rgba(0, 0, 0, 0.199);
            // -webkit-backdrop-filter: blur(25px) !important;
            // backdrop-filter: blur(25px) !important;
            border-radius: 10px;

            input {
                background: transparent;
                border: none;
                outline: none;
                color: white;
                font-size: 16px;
                padding: 10px 20px;
                width: 100%;
                height: 100%;
            }
        }

        .page {
            position: relative;
            color: white;
            font-size: 30px;
            display: flex;
            flex-direction: column;
        }

        .page1 {
            .bgcone {
                display: none;
                background-image: url('@/assets/images/Frame_s.png');
                background-size: cover;

                img {
                    position: relative;
                    width: 100%;
                    z-index: -1;
                    opacity: 0;
                }
            }


            .bgctwo {
                display: none;
                background-image: linear-gradient(to top, #00033882, #000338b3),
                    url("@/assets/images/Frame_s.png");
                filter: blur(5px);
                transform: rotate(180deg) scale(-1, 1);
                background-size: cover;

                img {
                    position: relative;
                    width: 100%;
                    z-index: -1;
                    opacity: 0;
                }
            }

            .bgcone1 {
                background-image: url('@/assets/images/Frame.png');
                background-size: cover;

                img {
                    position: relative;
                    width: 100%;
                    z-index: -1;
                    opacity: 0;
                }
            }


            .bgctwo1 {
                background-image: linear-gradient(to top, #00033882, #000338b3),
                    url("@/assets/images/Frame.png");
                filter: blur(5px);
                transform: rotate(180deg) scale(-1, 1);
                background-size: cover;

                img {
                    position: relative;
                    width: 100%;
                    z-index: -1;
                    opacity: 0;
                }
            }
        }

        .page2 {
            position: absolute;
            top: 0;
            height: 100%;
            // padding: 0 20px;
            font-family: Manrope-Bold;

            .opimg_o {
                position: relative;
                z-index: -1;
                opacity: 0;
            }

            .opimg_s {
                display: none;
                position: relative;
                z-index: -1;
                opacity: 0;
            }

            .page2_container {
                padding: 0 20px;
                height: calc(100%);
                display: flex;
                flex-direction: column;
            }

            .page2_card {
                font-family: Manrope-Bold;
                display: flex;
                // display: none; //
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .title {
                    margin-top: 20px;
                    text-align: center;
                }

                .page2_body {
                    width: 100%;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 16px;

                    .page2_body_item {
                        display: flex;
                        align-items: center;
                        flex: 1;
                        padding-right: 2px;

                        .text {
                            padding: 10px 0;
                            word-wrap: break-word;

                            .text_title {
                                font-size: 14px;
                                margin-bottom: 5px;
                            }

                            .content {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }

        .page3 {
            // display: none; //

            margin-top: 20px;

            .title {
                font-family: Manrope-Bold;
                text-align: center;
                margin-bottom: 20px;
            }

            .page3_body {
                padding: 10px 0;
                font-family: Manrope-Bold;

                .page3_body_top {
                    padding: 0 32px;

                    p {
                        font-size: 20px;

                        &:nth-child(1) {
                            text-align: left;
                        }

                        &:nth-child(2) {
                            text-align: right;
                        }
                    }

                }

                .page3_body_center {
                    display: flex;
                    justify-content: center;


                    .rotate_box {
                        position: relative;
                        margin-top: 20px;
                        height: 219px;
                        width: 219px;
                        border-radius: 50%;
                        background: linear-gradient(190deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(270deg, #00FFEC 0%, #E785FF 47.4%, #7B97FC 97.4%);
                        opacity: 0.8;
                        overflow: hidden;

                        .pie_cone {
                            position: absolute;
                            width: 219px;
                            height: 219px;
                            bottom: 50%;
                            left: 50%;
                            background-image: url('@/assets/images/9-2.png');
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: cover;
                            transform-origin: left bottom;
                            transform: rotate(-50deg);
                        }

                        .pie_con1,
                        .pie_con2 {
                            position: absolute;
                            width: 219px;
                            height: 219px;
                            bottom: 50%;
                            left: 50%;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: cover;
                            transform-origin: left bottom;
                        }

                        .pie_con1 {
                            background-image: url('@/assets/images/1pie.png');
                            transform: rotate(-85deg);
                        }

                        .pie_con2 {
                            background-image: url('@/assets/images/1pie.png');
                            transform: rotate(-130deg);
                        }
                    }
                }

                .page3_body_bottom {
                    padding: 10px 10px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    .page3_body_bottom_item {
                        position: relative;
                        display: flex;
                        margin-left: 70px;
                        font-size: 14px;

                        .left {
                            min-width: 50px;
                        }

                        .right {
                            font-size: 12px;
                        }

                        // &:nth-child(1) {
                        //     &::before {
                        //         content: '';
                        //         width: 50px;
                        //         height: 150%;
                        //         position: absolute;
                        //         right: 40px;
                        //         top: -160%;
                        //         border-top: 1px solid #fff;
                        //         border-right: 1px solid #fff;
                        //     }
                        // }

                        // &:nth-child(2) {
                        //     &::before {
                        //         content: '';
                        //         width: 50px;
                        //         height: 185px;
                        //         position: absolute;
                        //         left: -30px;
                        //         top: -175px;
                        //         border-top: 1px solid #fff;
                        //         border-left: 1px solid #fff;

                        //     }

                        //     &:after {
                        //         content: '';
                        //         width: 20px;
                        //         height: 20px;
                        //         position: absolute;
                        //         left: -30px;
                        //         top: 10px;
                        //         border-top: 1px solid #fff;
                        //     }
                        // }

                        // &:nth-child(3) {
                        //     &::before {
                        //         content: '';
                        //         width: 80px;
                        //         height: 365px;
                        //         position: absolute;
                        //         left: -40px;
                        //         top: -355px;
                        //         border-top: 1px solid #fff;
                        //         border-left: 1px solid #fff;

                        //     }

                        //     &:after {
                        //         content: '';
                        //         width: 30px;
                        //         height: 30px;
                        //         position: absolute;
                        //         left: -40px;
                        //         top: 10px;
                        //         border-top: 1px solid #fff;
                        //     }
                        // }

                        // &:nth-child(4) {
                        //     &::before {
                        //         content: '';
                        //         width: 130px;
                        //         height: 425px;
                        //         position: absolute;
                        //         left: -50px;
                        //         top: -415px;
                        //         border-top: 1px solid #fff;
                        //         border-left: 1px solid #fff;

                        //     }

                        //     &:after {
                        //         content: '';
                        //         width: 40px;
                        //         height: 40px;
                        //         position: absolute;
                        //         left: -50px;
                        //         top: 10px;
                        //         border-top: 1px solid #fff;
                        //     }
                        // }
                    }
                }
            }

            .onetext {
                margin-top: 30px;
                padding: 20px;
                font-family: Manrope-Bold;
                text-align: center;
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;

                p {
                    font-size: 16px;
                    margin-bottom: 10px;
                }

                .texttwo {
                    font-size: 14px;
                    opacity: 0.8;
                }

                .disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .page4btn {
                    width: 162px;
                    height: 40px;
                    line-height: 38px;
                    font-size: 16px;
                    margin-top: 20px;
                    background: linear-gradient(94.31deg, #64DAFF 2.67%, rgba(255, 118, 225, 0.67) 100%);
                    border-radius: 12px;
                    ;
                }
            }
        }

        .page4 {
            // display: none; //
            padding: 20px 20px 30px;

            .title {
                font-family: Manrope-Bold;
                text-align: center;
                margin-bottom: 20px;
            }

            .title2 {
                font-size: 14px;
                font-family: Manrope-Bold;
                text-align: center;
                margin-bottom: 20px;
            }

            .page4_body {
                margin-top: 20px;
                height: 100%;
                padding: 30px 0;
                font-family: Manrope-Bold;
                display: flex;
                gap: 50px;
                flex-direction: column;
                justify-content: space-between;

                .page4_body_item {
                    text-align: center;

                    .top {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>