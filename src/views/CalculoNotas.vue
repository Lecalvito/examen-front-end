<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow p-4">
          <h2 class="text-center mb-4">Cálculo de Calificaciones</h2>

          <form @submit.prevent="calcularPromedio">
            <div class="mb-3">
              <label for="nota1" class="form-label d-block text-center">Nota 1</label>
              <input type="number" id="nota1" v-model.number="nota1" 
                     class="form-control" placeholder="Nota 1" />
              <div v-if="nota1 === null || nota1 === ''" class="text-danger small text-center">
                Campo obligatorio
              </div>
              <div v-else-if="nota1 < 10 || nota1 > 70" class="text-danger small text-center">
                La nota debe estar entre 10 y 70
              </div>
            </div>
            <div class="mb-3">
              <label for="nota2" class="form-label d-block text-center">Nota 2</label>
              <input type="number" id="nota2" v-model.number="nota2" 
                     class="form-control" placeholder="Nota 2" />
              <div v-if="nota2 === null || nota2 === ''" class="text-danger small text-center">
                Campo obligatorio
              </div>
              <div v-else-if="nota2 < 10 || nota2 > 70" class="text-danger small text-center">
                La nota debe estar entre 10 y 70
              </div>
            </div>
            <div class="mb-3">
              <label for="nota3" class="form-label d-block text-center">Nota 3</label>
              <input type="number" id="nota3" v-model.number="nota3" 
                     class="form-control" placeholder="Nota 3" />
              <div v-if="nota3 === null || nota3 === ''" class="text-danger small text-center">
                Campo obligatorio
              </div>
              <div v-else-if="nota3 < 10 || nota3 > 70" class="text-danger small text-center">
                La nota debe estar entre 10 y 70
              </div>
            </div>
            <div class="mb-3">
              <label for="asistencia" class="form-label d-block text-center">% de Asistencia</label>
              <input type="number" id="asistencia" v-model.number="asistencia" 
                     class="form-control" placeholder="Asistencia" />
              <div v-if="asistencia === null || asistencia === ''" class="text-danger small text-center">
                Campo obligatorio
              </div>
              <div v-else-if="asistencia < 0 || asistencia > 100" class="text-danger small text-center">
                La asistencia debe estar entre 0 y 100
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Calcular</button>
            </div>
          </form>
          <div v-if="resultado" class="alert mt-4 text-center"
               :class="aprobado ? 'alert-success' : 'alert-danger'">
            <p><strong>Promedio:</strong> {{ promedio }}</p>
            <p><strong>Resultado:</strong> {{ resultado }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCalculoNotas from '../composables/useCalculoNotas'

export default {
  name: "CalculoNotas",
  setup() {
    return useCalculoNotas()
  }
}
</script>
