
<template>
  <div id="app">
      <Navbar  :icon="icona"/>
    <h1>Inicio</h1>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      icona : require('@/assets/house-fill.svg')
    };
  },
  
}
</script>