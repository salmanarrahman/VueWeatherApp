<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const setCity = computed(() => {
    return route.params.name;
});

</script>


<template>
  <p>{{ setCity }}</p>
</template>
