<template>
  <nav id="vue" class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
    <div id="qr">
    <a class="nav-link" id="nav_a" href="/qr">Gestión del QR</a>
    </div>       
      <a class="nav-link"  href="/">
        <img v-if="icon" id="nav_b" :src="icon" alt="">
      </a>
      <div id="ico">
        <a class="nav-link" id="nav_a" href="/icon">Gestión del ícono</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'App',
  props: {
    icon: String
  },
}
</script>

<style>
#nav_a { 
  color:black; 
}
#nav_b{
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto; 
  width: 6mm;
  height: 6mm;
}
#qr{  
  margin-left: 30%; 
}
#ico{ 
  margin-right: 30%;
}
</style>

