
<template>
  <div id="app">
      <Navbar :icon="icona"/>
    <h1>Gestión del ícono</h1>
    <br> 
    <button class="btn btn-primary" @click="cambiarIcon">Cambiar</button>
    <br>
    <br>
    <a  v-if="icona !== require('@/assets/house-fill.svg')"  :href="`${icona}`" download="th.jpg">
      <button class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg> Download
      </button>
    </a> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import iconApi from "@/api/iconApi"

export default {
  name: 'App', 
  components: {
    Navbar
  },
  methods: {
    postIcon(event){ 
      console.log(event.target.files[0]);
      this.foto=event.target.files[0].name;
      const file = event.target.files[0]; 
      console.log(file)
      iconApi.post(`/api/media/upload/`,{ FileDetails:file.name ,IsPublic:true})
      .then(response => ( console.log(response) 
       )).catch(function(error){
        alert("API no disponible: "+error)
       })
    },

    cambiarIcon() {
      iconApi.get(`/api/media/download/3b568266-c431-40f1-b273-c38434a14b55`,{responseType: 'blob'})
      .then(response => ( 
        this.icona = URL.createObjectURL(new Blob([ response.data] , { type: 'image/jpeg' })) 
       )).catch(function(error){
        alert("API no disponible: "+error)
       })
    }, 
  },
  data () {
    return {
      icona : require('@/assets/house-fill.svg')
    }
  }
}
</script>