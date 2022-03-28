<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-md">
    <a class="navbar-brand" href="#">GPP System</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to=/> Dashboard </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin"> Admin </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user"> User </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about"> About </router-link>
        </li>
         </ul>
    </div>
  </div>
</nav>
<router-view/>
</template>





