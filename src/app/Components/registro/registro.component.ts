import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistroService, NewUserDataInterface, NewUserDataResponseInterface } from '../../Services/registro/registro.service';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  /*propiedades*/
  loading: boolean = true;
  generalError: boolean = false;
  generalErrorMsj: string;
  errorClass: Array<string> = [];
  newUserForm: FormGroup = null;
  recuerdame: boolean = false;

  //get data
  newUserData: NewUserDataInterface[] = [];
  newUserDataResponse: NewUserDataResponseInterface[] = [];

  constructor(
    private newUser: RegistroService,
    private fn: FuncionesService,
    private cookies: CookieService
  ) {}

  ngOnInit() {
    this.validateForm();
    this.newUser.getNewUserData().subscribe(
      (data: NewUserDataInterface[]) => {
        this.newUserData = data;
        this.loading = false;
      },
      (error: any) => {
        this.generalError = true;
        this.generalErrorMsj = error.message;
      }
    );
  }

  crearUsuario() {
    this.newUser.createNewUser(this.newUserForm.value).subscribe(
      (data: NewUserDataResponseInterface[]) => {
        this.checkError(data);
        this.loading = false;
        if (this.recuerdame) {
          this.cookies.set('userEmail', this.newUserForm.value.correo);
        }
      },
      (error: any) => {
        this.generalError = true;
        this.generalErrorMsj = error;
      }
    );
    this.resetForm();
  }

  validateForm() {
    this.newUserForm = new FormGroup({
      "correo": new FormControl('',
      {
        validators: [ 
          Validators.required, 
          Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)
        ],
        updateOn: 'blur',
      }),
      "password": new FormControl('', 
      {
        validators: [
          Validators.required
        ],
        updateOn: 'blur',
      }),
      "password2": new FormControl('', 
      {
        validators: [
          Validators.required
        ],
        updateOn: 'blur',
      }),
      "nickName": new FormControl('',
      {
        validators: [ 
          Validators.required, 
          Validators.pattern(/^[A-Za-z0-9_]+$/)
        ],
        updateOn: 'blur',
      }),
      "firstName": new FormControl('',
      {
        validators: [ 
          Validators.required, 
          Validators.pattern(/^[ A-Za-záéíóúáéíóúÁÉÍÓÚñÑ]+$/)
        ],
        updateOn: 'blur',
      }),
      "lastName": new FormControl('',
      {
        validators: [ 
          Validators.required, 
          Validators.pattern(/^[ A-Za-záéíóúáéíóúÁÉÍÓÚñÑ]+$/)
        ],
        updateOn: 'blur',
      })
    }, { validators: this.checkPasswords });
    console.log(this.newUserForm);
  }

  checkPasswords(fg: FormGroup) {
    const password = fg.get('password').value;
    const password2 = fg.get('password2').value;
    if(password2 !== ""){
      return password === password2 ? null : {'notSame': true};  
    }else{ return null}
  }

  checkError(data: NewUserDataResponseInterface[]) {
    const code: number = data['http_response_code'];
    this.errorClass = this.fn.checkClassError(code);
    this.newUserDataResponse = data;
  }

  resetForm() {
    this.newUserForm.reset();
  }
}
