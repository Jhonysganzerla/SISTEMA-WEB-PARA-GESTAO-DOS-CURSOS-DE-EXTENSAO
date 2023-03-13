import { AuthenticatedUser } from './authenticatedUser';

export interface AuthenticationResponse {
    token: string;
    user: AuthenticatedUser;
  }  
