export function getUserName (state) {
  if (state.user) {
    if (state.user.nome) {
      return state.user.nome
    }
  }
}

export function getModulosDoPerfil (state) {
  if (state.user) {
    if (state.user.perfil) {
      if (state.user.perfil.modulos) {
        return state.user.perfil.modulos
      }
    }
  }
}
