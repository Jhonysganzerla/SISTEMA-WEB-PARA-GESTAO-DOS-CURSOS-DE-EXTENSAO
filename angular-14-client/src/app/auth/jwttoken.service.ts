import { JwtDecodeOptions } from './../../../node_modules/jwt-decode/index.d';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';


@Injectable()
export class JWTTokenService {

    jwtToken!: any;
    decodedToken!: { [key: string]: string };

    
    constructor() {
        if(!this.jwtToken){
            this.jwtToken = localStorage.getItem('token') || null;
        }
    }

    setToken(token: string) {
      if (token) {
        this.jwtToken = token;
      }
    }

    decodeToken() {
      if (this.jwtToken) {
        this.decodedToken = jwtDecode(this.jwtToken);
      }
    }

    getDecodeToken() {
      if(this.jwtToken){
        return jwtDecode(this.jwtToken);
      }
    }

    getUserRa() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken['sub'] : null;
    }

    getExpiryTime() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken['exp'] : null;
    }

    isTokenExpired(): boolean {
      const expiryTime: any = this.getExpiryTime();
      if (expiryTime) {
        return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
      } else {
        return false;
      }
    }
}