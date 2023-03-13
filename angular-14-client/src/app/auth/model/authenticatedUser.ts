import { Authorities } from './authorities';
export interface AuthenticatedUser {
    name: string;
    username: string;
    authorities: Authorities[];
  }