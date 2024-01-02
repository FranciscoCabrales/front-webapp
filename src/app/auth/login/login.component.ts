import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css'
  ]
})
export class LoginComponent  {
  // email: string = 'user@example.com';
  // password: string = 'password123';
 
public formSubmitted = false;

loginForm = this.fb.group({
  email: ['user@example.com', [Validators.required, Validators.email]],
  password: ['password123', Validators.required],
  remember: [false]
});


  constructor( private loginService: UsuarioService,
    private router: Router,
    private fb: FormBuilder) { }

    login(){
      this.loginService.login( this.loginForm.value )
      .subscribe( resp => {
        
        console.log(resp,"respuesta");

      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error' );
      });
    }

  // async login() {
  //   try {
  //     await this.loginService.login(this.email, this.password);
  //     // Iniciar sesión exitosa
  //   } catch (error) {
  //     // Manejar errores
  //   }
 }

  


