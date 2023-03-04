export const AppRoutes = {
  ROOT: '/',
  WELCOME: '/welcome',
  LOGIN: '/login',
  CREATE_ACCOUNT: '/create-account',
  HOME: '/home',
}

export const getRouteLabel = (route: string) => {
  switch (route) {
  case AppRoutes.HOME:
    return 'Inicio'
  default:
    return ''
  }
}
