<script setup lang="ts">
import {createStore} from "@/stores";
import MapSettings from "@/models/mapsettings/MapSettings";
import Layer from "@/models/layer/Layer";

const props = defineProps({
    mapSettings: MapSettings,
    selectedLayer: Layer
})

const store = createStore({})
</script>

<template>
    <div>Карта</div>
<!--    <MainView v-if="mapSettings && store" ref="mainView" v-bind="$attrs" v-on="$listeners" class="main-view">-->
<!--        &lt;!&ndash;      Слоты панелей    &ndash;&gt;-->
<!--        <template #left-section>-->
<!--            <slot name="left-section" />-->
<!--        </template>-->
<!--        <template #right-section>-->
<!--            <slot name="right-section" />-->
<!--        </template>-->
<!--        &lt;!&ndash;      Слоты для кнопок меню&ndash;&gt;-->
<!--        <template #menu-buttons>-->
<!--            <slot name="menu-buttons"></slot>-->
<!--        </template>-->
<!--        &lt;!&ndash;Основной слот&ndash;&gt;-->
<!--        <template #body>-->
<!--            <slot name="body"></slot>-->
<!--        </template>-->
<!--    </MainView>-->
</template>

<style scoped></style>
