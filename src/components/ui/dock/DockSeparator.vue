<template>
  <div :class="cn(
    'relative block bg-secondary',
    orientation === 'vertical' ? 'w-4/5 h-0.5' : 'h-4/5 w-0.5',
  )
    "></div>
</template>

<script setup>
import { ORIENTATION_INJECTION_KEY } from './injectionKeys';
import { cn } from '@/lib/utils';
import { inject } from "vue";

const orientation = inject(ORIENTATION_INJECTION_KEY, 'vertical');
</script>
