import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseAuth } from '../Firebase'
import { UserLogin } from '../types/UserLogin'

export class AuthService {
  async logInWithPasswordAndEmail({ email, password }: UserLogin) {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  async createAccount({ email, password, username }: UserLogin) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }

  async signOut() {
    return signOut(firebaseAuth)
  }
}
