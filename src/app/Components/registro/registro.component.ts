import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistroService, NewUserDataInterface, NewUserDataResponseInterface } from '../../Services/registro/registro.service';
import { LogInService } from "../../Services/logIn/logIn.service";
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';

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
    private user: LogInService,
    private newUser: RegistroService,
    private fn: FuncionesService,
    private cookies: CookieService,
    private route: Router
  ) { }

  ngOnInit() {
    //isSignIn?
    if(this.user.isSignIn()){
      this.route.navigateByUrl('/user');
    }
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
        setTimeout(()=>{ this.route.navigateByUrl('/logIn') }, 6000);
      },
      (error: any) => {
        if (error.statusError === "backend") {
          this.checkError(error.errors);
        } else {
          this.generalError = true;
          this.generalErrorMsj = error;
        }
      }
    );
    this.resetForm();
  }

  validateForm() {
    this.newUserForm = new FormGroup({
      "email": new FormControl('',
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
  }

  checkPasswords(fg: FormGroup) {
    const password = fg.get('password').value;
    const password2 = fg.get('password2').value;
    if (password2 !== "") {
      return password === password2 ? null : { 'notSame': true };
    } else { return null }
  }

  checkError(value: NewUserDataResponseInterface[]) {
    const code: number = value[0].http_response_code;
    this.errorClass = this.fn.checkClassError(code);
    this.newUserDataResponse = value;
  }

  resetForm() {
    this.newUserForm.reset();
  }

  setRecuerdame(){
    this.recuerdame = !this.recuerdame;
  }
}
