<script lang="ts" setup name="AppFooter"></script>
<script lang="ts">
export default { name: "AppFooter" }
</script>

<template>
    <div class="app_footer">
        <div class="title bpColor">Contact</div>
        <div style="width: 40%;display: flex;justify-content: space-between;margin-bottom: 30px;">
            <a href="https://twitter.com/shenzhenmeme" target="_blank">
                <img class="icon_box_item" src="@/assets/images/icon_1.png" alt="">
            </a>
            <a href="">
                <img class="icon_box_item" src="@/assets/images/icon_2.png" alt="">
            </a>
            <a href="mailto:shenzhenmeme@gmail.com" target="_blank">
                <img class="icon_box_item" src="@/assets/images/icon_3.png" alt="">
            </a>
        </div>
        <div class="msg bpColor">来了就是深圳人</div>
        <div class="msg bpColor">来了就是深圳魂</div>
        <div class="msg1">Memecoin没有实体价值,纪念意义深远</div>
        <div class="img_box">
            <img src="@/assets/images/Groupfdf.png" alt="">
            <img src="@/assets/images/Groupfd.png" alt="">
        </div>
        <img class="footer_img" src="@/assets/images/Footer.png" alt="">
    </div>
</template>

<style lang="less" scoped>
.app_footer {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 60px;

    .title {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .icon_box {
        flex: 1;
        display: flex;
        gap: 20px;
        justify-content: space-around;

        .icon_box_item {
            height: 30px;
            width: 30px;
        }
    }

    .img_box {
        transform: translateY(20px);

        img {
            &:first-child {
                margin-right: 100px;
                transform: translateY(30px);
            }
        }
    }

    .msg {
        font-size: 16px;
        margin-top: 10px;
    }

    .msg1 {
        font-size: 14px;
        margin-top: 15px;
    }

    .footer_img {
        // width: 100%;
    }
}
</style>