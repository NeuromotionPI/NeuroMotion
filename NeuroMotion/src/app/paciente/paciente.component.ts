import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

  patient = {
    patientName: '',
    email: '',
    patientPassword: '',
    phoneNumber:''
  };

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.registerUser(this.patient).subscribe(
      response => {
        console.log('Usuario registrado:', response);
        alert('Registro exitoso');
      },
      error => {
        console.error('Error en el registro:', error);
        alert('Error al registrar el usuario');
      }
    );
  }
}

 