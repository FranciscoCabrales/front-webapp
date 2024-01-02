import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { LoginForm } from '../interfaces/login-form.interface';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
    private router: Router) { }

    login( formData: LoginForm){
      return this.http.post(`${ base_url }/login`, formData )
      .pipe(
        
      );

  }
//   async login(email: string, password: string) {
//     const url = 'http://localhost:3000/login';
//     const body = { email, password };

//     try {
//       const response = await axios.post(url, body);
//       if (response.status === 200) {
//         console.log('Login successful');
//         console.log(response,"resultado");
//         // Iniciar sesión exitosa
//       }
//     } catch (error) {
//       console.log('Login failed');
      
//       // Manejar errores
//     }
//  }
}
