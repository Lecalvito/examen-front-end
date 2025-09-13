<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow p-4">
          <h2 class="text-center mb-4">Formulario de Registro</h2>
          <div v-if="exito" class="alert alert-success text-center" role="alert">
            {{ mensajeExito }}
          </div>

          <form @submit.prevent="validarFormulario">

            <div class="mb-3">
              <label for="nombre" class="form-label d-block text-center">Nombre</label>
              <input type="text" id="nombre" v-model="nombre" class="form-control" placeholder="Ingresa tu nombre" />
              <div v-if="errores.nombre" class="text-danger small text-center">
                {{ errores.nombre }}
              </div>
            </div>

            <div class="mb-3">
              <label for="correo" class="form-label d-block text-center">Correo</label>
              <input type="email" id="correo" v-model="correo" class="form-control" placeholder="ejemplo@correo.com" />
              <div v-if="errores.correo" class="text-danger small text-center">
                {{ errores.correo }}
              </div>
            </div>

            <div class="mb-3">
              <label for="password" class="form-label d-block text-center">Contraseña</label>
              <input type="password" id="password" v-model="password" class="form-control" placeholder="Contraseña" />
            </div>

            <div class="mb-3">
              <label for="repetirPassword" class="form-label d-block text-center">Repetir Contraseña</label>
              <input type="password" id="repetirPassword" v-model="repetirPassword" class="form-control" placeholder="Repite tu contraseña" />
              <div v-if="errores.password" class="text-danger small text-center">
                {{ errores.password }}
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-success">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useRegistro from '../composables/useRegistro'

export default {
  name: "Registro",
  setup() {
    return useRegistro()
  }
}
</script>
