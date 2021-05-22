export interface UserState {
  isSignedIn: boolean;
  user: {
    uid: string;
    displayName: string;
    photoURL: string;
  }
}