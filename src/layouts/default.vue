<script setup lang="ts">
import { Header } from '@/widgets/header';

withDefaults(defineProps<{
  isHeader?: boolean;
}>(), {
  isHeader: true,
});
</script>

<template>
  <Header v-if="isHeader" />
  <div>
    <slot />
  </div>
</template>
