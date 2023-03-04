export const LoginError = {
  NO_DATA: 'Please, write your email/password',
  APP_DELETED: 'The instance of FirebaseApp has been deleted.',
  APP_NOT_AUTHORIZED:
    'The app is not authorized to use Firebase Authentication with the provided API key.',
  ARGUMENT_ERROR: 'Incorrect arguments were provided.',
  INVALID_API_KEY: 'The provided API key is invalid.',
  INVALID_USER_TOKEN: "The user's credential is no longer valid. Please sign in again.",
  INVALID_TENANT_ID: 'The provided tenant ID is invalid.',
  NETWORK_REQUEST_FAILED: 'A network error has occurred. Please check your internet connection.',
  OPERATION_NOT_ALLOWED: 'The requested operation is not allowed.',
  REQUIRES_RECENT_LOGIN: 'Please sign in again to complete this action.',
  TOO_MANY_REQUESTS:
    'Requests are blocked from this device due to unusual activity. Please try again later.',
  UNAUTHORIZED_DOMAIN:
    'The app domain is not authorized for OAuth operations. Please check the authorized domains in Firebase console.',
  USER_DISABLED: 'The user account has been disabled by an administrator.',
  USER_NOT_FOUND: 'User not found. Please check your email and password and try again',
  USER_TOKEN_EXPIRED: "The user's credential has expired. Please sign in again.",
  WEB_STORAGE_UNSUPPORTED:
    'Web storage is not supported in this browser. Please try again in a different browser or enable web storage.',
  UNKOWN_ERROR: 'Something went wrong, please try later',
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
