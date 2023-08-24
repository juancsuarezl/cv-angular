import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public contactForm: FormGroup;
  public submitted: boolean = false;
  public preview: string = '';
  public response:any = {};
  private API_URL = environment.API_URL;

  constructor(private fb: FormBuilder, private router: Router, private httpClient: HttpClient) {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      msg: new FormControl('')
      });
   }

  ngOnInit(): void {

  }

  save() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            Notiflix.Notify.failure('Todos los campos son obligatorios');
            return;
        }

        // display form values on success
        Notiflix.Loading.standard('Enviando mensaje...');

        let params = {
          nombre: this.contactForm.value.name,
          //asunto: this.contactForm.value.asunto,
          email: this.contactForm.value.email,
          telefono: this.contactForm.value.phone,
          mensaje: this.contactForm.value.msg
        }
        this.httpClient.post(this.API_URL, params).subscribe(res => {

          Notiflix.Loading.remove();
          this.response = res;
          if(this.response.ok == false){
            Notiflix.Notify.failure('Ocurrió un error, no se pudo enviar el mensaje')
          } else {
            this.contactForm.reset();
            this.router.navigate(['']);
            Notiflix.Notify.success('Mensaje enviado exitosamente!');
          }
        });


  }
}
