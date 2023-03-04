import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../Firebase'
import { UserLogin } from '../types/UserLogin'

export async function logInWithPasswordAndEmail({ email, password }: UserLogin) {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
}
