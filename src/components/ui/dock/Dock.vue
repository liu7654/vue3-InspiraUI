<template>
  <div ref="dockRef" :class="cn(
    'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max rounded-2xl border p-2 backdrop-blur-md transition-all gap-4',
    orientation === 'vertical' && 'flex-col w-[58px] h-max',
    props.class,
    dockClass,
  )
    " @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import { cn } from '@/lib/utils';
import {
  MOUSE_X_INJECTION_KEY,
  MOUSE_Y_INJECTION_KEY,
  MAGNIFICATION_INJECTION_KEY,
  DISTANCE_INJECTION_KEY,
  ORIENTATION_INJECTION_KEY,
} from './injectionKeys';

const props = defineProps({
  class: { type: null, required: false },
  magnification: { type: Number, required: false, default: 60 },
  distance: { type: Number, required: false, default: 140 },
  direction: { type: String, required: false, default: 'middle' },
  orientation: { type: String, required: false, default: 'horizontal' },
});

const dockRef = ref(null);
const mouseX = ref(Infinity);
const mouseY = ref(Infinity);
const magnification = computed(() => props.magnification);
const distance = computed(() => props.distance);

const dockClass = computed(() => ({
  'items-start': props.direction === 'top',
  'items-center': props.direction === 'middle',
  'items-end': props.direction === 'bottom',
}));

function onMouseMove(e) {
  requestAnimationFrame(() => {
    mouseX.value = e.pageX;
    mouseY.value = e.pageY;
  });
}

function onMouseLeave() {
  requestAnimationFrame(() => {
    mouseX.value = Infinity;
    mouseY.value = Infinity;
  });
}
provide(MOUSE_X_INJECTION_KEY, mouseX);
provide(MOUSE_Y_INJECTION_KEY, mouseY);
provide(ORIENTATION_INJECTION_KEY, props.orientation);
provide(MAGNIFICATION_INJECTION_KEY, magnification);
provide(DISTANCE_INJECTION_KEY, distance);
</script>
