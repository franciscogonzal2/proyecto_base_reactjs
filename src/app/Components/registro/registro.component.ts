import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistroService, newUserDataInterface, newUserDataResponseInterface } from '../../Services/registro/registro.service';
import { LogInService } from "../../Services/logIn/logIn.service";
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setRegistroActionStart } from 'src/app/Redux/Actions/user/registro.action';
import { setRegistroResponseActionStart } from 'src/app/Redux/Actions/user/registroResponse.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  /*propiedades*/
  loading: boolean = true;
  isLoading: boolean = false;
  generalError: boolean = false;
  generalErrorMsj: string;
  errorClass: Array<string> = [];
  newUserForm: FormGroup = null;
  recuerdame: boolean = false;

  //get data
  newUserData: newUserDataInterface[] = [];
  newUserDataResponse: newUserDataResponseInterface[] = [];
  //oldLang: string = "";

  constructor(
    private user: LogInService,
    private newUser: RegistroService,
    private fn: FuncionesService,
    private cookies: CookieService,
    private route: Router,
    private store: Store<AppState>,
		private shared: SharedService
  ) {
    this.store.subscribe((stts: any) => {
			this.loading = stts.registro.loader;
		});
  }

  ngOnInit() {
    //isSignIn?
    if(this.user.isSignIn()){
      this.route.navigateByUrl('/user');
    }

    this.validateForm();

    this.store.dispatch(setRegistroActionStart());

		this.store.subscribe((stts: any) => {
			let registroDataAux = stts.registro.data;
			let loaderAux = stts.registro.loader;

			if (registroDataAux.container || registroDataAux.error) {
				if (registroDataAux.code === 200) {
					this.loading = loaderAux;
					this.newUserData = registroDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = registroDataAux.error.errorMsj;
				}
			}
		});
  }

  crearUsuario() {
    this.isLoading = true;

    let bodyRequest = {
      ...this.newUserForm.value
    };

    if (this.recuerdame) {
      this.cookies.set('dsw-user-email', this.newUserForm.value.email);
    }

    this.store.dispatch(setRegistroResponseActionStart({ response: bodyRequest }));

    this.store.subscribe((stts: any) => {
      let registroResponseDataAux = stts.registroResponse.response;

      if (registroResponseDataAux.container || registroResponseDataAux.error) {
        if (registroResponseDataAux.code === 200) {
          this.checkError(registroResponseDataAux.container);
        } else {
          if (registroResponseDataAux.container.statusError === "bcknd") {
            if (registroResponseDataAux.container.http_response_code) {
              this.checkError(registroResponseDataAux.container.errors);
            } else {
              this.generalError = true;
              this.generalErrorMsj = registroResponseDataAux.container.errors;
            }
          } else {
            this.generalError = true;
            this.generalErrorMsj = registroResponseDataAux.error.errorMsj;
          }
        }
      }
    });
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

  checkError(value: any) {
    const code: number = value[0].http_response_code;
    this.errorClass = this.fn.checkClassError(code);

    if ([200, 201].includes(code)) {
      this.isLoading = false;
      debugger;
      setTimeout(()=>{ this.route.navigateByUrl('/logIn') }, 6000);
    }

    this.newUserDataResponse = value;
  }

  resetForm() {
    this.newUserForm.reset();
  }

  setRecuerdame(){
    this.recuerdame = !this.recuerdame;
  }
}
