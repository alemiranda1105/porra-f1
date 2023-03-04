import { AuthService } from '../service/AuthService'

export function HomePage() {
  const authService = new AuthService()
  return (
    <div>
      <h1>Inicio</h1>
      <button onClick={() => authService.signOut()}>Cerrar</button>
    </div>
  )
}
