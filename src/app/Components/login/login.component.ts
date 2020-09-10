import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LogInService, logInDataInterface, logInDataResponseInterface } from "../../Services/logIn/logIn.service";
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setLogInActionStart } from 'src/app/Redux/Actions/user/logIn.action';
import { setLogInResponseActionStart } from 'src/app/Redux/Actions/user/logInResponse.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
  /*propiedades*/
  loading: boolean;
  isLoading: boolean = false;
  generalError: boolean = false;
  generalErrorMsj: string;
  errorClass: Array<string> = [];
  loginForm: FormGroup;
  recuerdame: boolean = false;
  //get data
  logInData: logInDataInterface[] = [];
  logInDataResponse: logInDataResponseInterface[] = [];
  //oldLang: string = "";

  constructor(
    private user: LogInService,
    private fn: FuncionesService,
    private cookies: CookieService,
    private route: Router,
    private store: Store<AppState>,
    private shared: SharedService
  ) {
    this.store.subscribe((stts: any) => {
      this.loading = stts.logIn.loader;
    });
  }

  ngOnInit() {
    //isSignIn?
    if (this.user.isSignIn()) {
      this.route.navigateByUrl('/user');
    }

    this.validateForm();
    
    const isEmail = this.cookies.check("dsw-user-email");

    if (isEmail) {
      this.loginForm.patchValue({ "correo": this.cookies.get("dsw-user-email") });
      this.recuerdame = true;
    }

    this.store.dispatch(setLogInActionStart());

    this.store.subscribe((stts: any) => {
      let logInDataAux = stts.logIn.data;
      let loaderAux = stts.logIn.loader;

      if (logInDataAux.container || logInDataAux.error) {
        if (logInDataAux.code === 200) {
          this.loading = loaderAux;
          this.logInData = logInDataAux.container;
        } else {
          this.generalError = true;
          this.generalErrorMsj = logInDataAux.error.errorMsj;
        }
      }
    });
  }

  validarUsuario() {
    this.isLoading = true;

    let bodyRequest = {
      ...this.loginForm.value
    };

    if (this.recuerdame) {
      this.cookies.set("dsw-user-email", this.loginForm.value.correo);
    }

    this.store.dispatch(setLogInResponseActionStart({ response: bodyRequest }));

    this.store.subscribe((stts: any) => {
      let logInResponseDataAux = stts.logInResponse.response;

      if (logInResponseDataAux.container || logInResponseDataAux.error) {
        if (logInResponseDataAux.code === 200) {
          this.checkError(logInResponseDataAux.container);
        } else {
          if (logInResponseDataAux.container.statusError === "bcknd") {
            if (logInResponseDataAux.container.http_response_code) {
              this.checkError(logInResponseDataAux.container.errors);
            } else {
              this.generalError = true;
              this.generalErrorMsj = logInResponseDataAux.container.errors;
            }
          } else {
            this.generalError = true;
            this.generalErrorMsj = logInResponseDataAux.error.errorMsj;
          }
        }
      }
    });
    this.resetForm();
  }

  validateForm() {
    this.loginForm = new FormGroup(
      {
        "correo": new FormControl('',
          {
            validators: [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)],
            updateOn: 'blur'
          }),
        "password": new FormControl('',
          {
            validators: [Validators.required],
            updateOn: 'blur'
          })
      }
    );
  }

  checkError(value: any) {
    const code: number = value[0].http_response_code;
    this.errorClass = this.fn.checkClassError(code);
    this.logInDataResponse = value;

    if ([200, 201].includes(code)) {
      this.isLoading = false;
      debugger;
      setTimeout(() => { this.route.navigateByUrl('/user') }, 4000);
    }
  }

  resetForm() {
    this.loginForm.reset();
  }

  setRecuerdame() {
    this.recuerdame = !this.recuerdame;
  }
  

}
