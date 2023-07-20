<script lang="ts" setup name="AppFooter">
import { defineProps } from 'vue'
import P from './props'
const props = defineProps(P)
</script>
<script lang="ts">
</script>

<template>
    <div class="Card" :style="{ padding: props.padding }">
        <div class="Card_body">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="less" scoped>
.Card {
    height: 100%;
    width: 100%;

    .Card_body {
        flex: 1;
        height: 100%;
        width: 100%;
        border: 2px solid;
        border-right: 1px solid rgba(0, 255, 236, .5);
        border-bottom: 1px solid rgba(231, 133, 255, .5);
        border-left: 1px solid rgba(159, 50, 50, .5);
        border-top: 1px solid rgba(123, 151, 252, .5);
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(94.31deg, rgba(100, 218, 255, 0.3) 2.67%, rgba(255, 118, 225, 0.201) 100%);
        backdrop-filter: blur(25px);
        border-radius: 12px;
    }

}
</style>