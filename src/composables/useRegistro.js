import { ref } from 'vue'

export default function useRegistro() {
  const nombre = ref('')
  const correo = ref('')
  const password = ref('')
  const repetirPassword = ref('')
  const errores = ref({})
  const exito = ref(false)
  const mensajeExito = ref('')

  const validarFormulario = () => {
    errores.value = {}
    exito.value = false
    mensajeExito.value = ''

    if (nombre.value === null || nombre.value === undefined || nombre.value.toString().trim() === '') {
      errores.value.nombre = 'El nombre es obligatorio'
    }

    if (correo.value === null || correo.value === undefined || correo.value.toString().trim() === '') {
      errores.value.correo = 'El correo es obligatorio'
    } else {
      const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!regexCorreo.test(correo.value)) {
        errores.value.correo = 'Formato de correo inválido'
      }
    }

    if (!password.value || !repetirPassword.value) {
      errores.value.password = 'La contraseña es obligatoria'
    } else if (password.value !== repetirPassword.value) {
      errores.value.password = 'Las contraseñas no coinciden'
    }

    if (Object.keys(errores.value).length === 0) {
      mensajeExito.value = "El registro se ha realizado correctamente"
      exito.value = true
      nombre.value = ''
      correo.value = ''
      password.value = ''
      repetirPassword.value = ''
    }
  }

  return {
    nombre, correo, password, repetirPassword,
    errores, validarFormulario,
    exito, mensajeExito
  }
}
