import { ref } from 'vue'

export default function useCalculoNotas() {
  const nota1 = ref(null)
  const nota2 = ref(null)
  const nota3 = ref(null)
  const asistencia = ref(null)
  const promedio = ref(null)
  const resultado = ref(null)
  const aprobado = ref(false)

  const calcularPromedio = () => {
    // Validaciones de notas y asistencia
    if (
      nota1.value !== null && nota2.value !== null && nota3.value !== null && asistencia.value !== null &&
      !isNaN(nota1.value) && !isNaN(nota2.value) && !isNaN(nota3.value) && !isNaN(asistencia.value) &&
      nota1.value >= 10 && nota1.value <= 70 &&
      nota2.value >= 10 && nota2.value <= 70 &&
      nota3.value >= 10 && nota3.value <= 70 &&
      asistencia.value >= 0 && asistencia.value <= 100
    ) {
      // Calcular promedio
      promedio.value = (nota1.value * 0.35) + (nota2.value * 0.35) + (nota3.value * 0.30)

      // Condición de aprobado
      if (promedio.value >= 40 && asistencia.value >= 80) {
        resultado.value = "APROBADO"
        aprobado.value = true
      } else {
        resultado.value = "REPROBADO"
        aprobado.value = false
      }
    } else {
      resultado.value = "Error en los datos ingresados."
      aprobado.value = false
    }
  }

  return {
    nota1, nota2, nota3, asistencia,
    promedio, resultado, aprobado,
    calcularPromedio
  }
}
