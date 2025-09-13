<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Programación Front End</a>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/calificaciones">Cálculo de Calificaciones</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registro">Formulario de Registro</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>



<style scoped></style>
