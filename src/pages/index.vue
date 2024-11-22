<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="text-3xl font-bold mb-10">
      Hello World
    </h1>
    <NuxtLink to="/account">
      <PButton label="Go to account" />
    </NuxtLink>
    <NuxtLink to="/bc">
      <PButton label="Go to bc" />
    </NuxtLink>
  </div>
</template>
