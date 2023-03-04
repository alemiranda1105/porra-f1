export const LoginError = {
  NO_DATA: 'Por favor, ingresa tus datos correctamente',
  APP_DELETED: 'La instancia de FirebaseApp ha sido eliminada.',
  APP_NOT_AUTHORIZED:
    'La aplicación no está autorizada para usar Firebase Authentication con la clave API proporcionada.',
  ARGUMENT_ERROR: 'Se proporcionaron argumentos incorrectos.',
  INVALID_API_KEY: 'La clave API proporcionada no es válida.',
  INVALID_USER_TOKEN:
    'Las credenciales del usuario ya no son válidas. Por favor, inicia sesión de nuevo.',
  INVALID_TENANT_ID: 'El ID de inquilino proporcionado no es válido.',
  NETWORK_REQUEST_FAILED:
    'Ha ocurrido un error de red. Por favor, verifica tu conexión a Internet.',
  OPERATION_NOT_ALLOWED: 'La operación solicitada no está permitida.',
  REQUIRES_RECENT_LOGIN: 'Por favor, inicia sesión de nuevo para completar esta acción.',
  TOO_MANY_REQUESTS:
    'Las solicitudes están bloqueadas en este dispositivo debido a una actividad inusual. Por favor, inténtalo de nuevo más tarde.',
  UNAUTHORIZED_DOMAIN:
    'El dominio de la aplicación no está autorizado para operaciones OAuth. Por favor, revisa los dominios autorizados en Firebase console.',
  USER_DISABLED: 'La cuenta de usuario ha sido deshabilitada por un administrador.',
  USER_NOT_FOUND:
    'Usuario no encontrado. Por favor, verifica tu correo electrónico y contraseña y vuelve a intentarlo.',
  USER_TOKEN_EXPIRED:
    'Las credenciales del usuario han caducado. Por favor, inicia sesión de nuevo.',
  WEB_STORAGE_UNSUPPORTED:
    'El almacenamiento web no es compatible con este navegador. Por favor, intenta de nuevo en un navegador diferente o habilita el almacenamiento web.',
  UNKOWN_ERROR: 'Algo salió mal. Por favor, inténtalo más tarde.',
}

export const FirebaseLoginError = {
  'auth/app-deleted': LoginError.APP_DELETED,
  'auth/app-not-authorized': LoginError.APP_NOT_AUTHORIZED,
  'auth/argument-error': LoginError.ARGUMENT_ERROR,
  'auth/invalid-api-key': LoginError.INVALID_API_KEY,
  'auth/invalid-user-token': LoginError.INVALID_USER_TOKEN,
  'auth/invalid-tenant-id': LoginError.INVALID_TENANT_ID,
  'auth/network-request-failed': LoginError.NETWORK_REQUEST_FAILED,
  'auth/operation-not-allowed': LoginError.OPERATION_NOT_ALLOWED,
  'auth/requires-recent-login': LoginError.REQUIRES_RECENT_LOGIN,
  'auth/too-many-requests': LoginError.TOO_MANY_REQUESTS,
  'auth/unauthorized-domain': LoginError.UNAUTHORIZED_DOMAIN,
  'auth/user-disabled': LoginError.USER_DISABLED,
  'auth/user-not-found': LoginError.USER_NOT_FOUND,
  'auth/user-token-expired': LoginError.USER_TOKEN_EXPIRED,
  'auth/web-storage-unsupported': LoginError.WEB_STORAGE_UNSUPPORTED,
}
