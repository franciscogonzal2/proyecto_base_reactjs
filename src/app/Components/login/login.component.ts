import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LogInService, LogInDataInterface, LogInDataResponseInterface } from "../../Services/logIn/logIn.service";
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
  /*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
  generalErrorMsj: string;
  errorClass: Array<string> = [];
  loginForm: FormGroup;
  recuerdame: boolean = false;
	//get data
  logInData: LogInDataInterface[] = [];
  logInDataResponse: LogInDataResponseInterface [] = [];

  constructor(
    private user: LogInService,
    private fn: FuncionesService,
    private cookies: CookieService
  ){}

  ngOnInit() {
    this.validateForm();
    const isEmail = this.cookies.check("userEmail");
    if( isEmail ){
      this.loginForm.patchValue({"correo": this.cookies.get("userEmail")});
      this.recuerdame = true;
    }

    this.user.getLogInData()
    .subscribe(
      (data: LogInDataInterface[] ) =>{
        this.logInData = data;
        this.loading = false;
      },
      (error: any)=>{
        this.generalError = true;
				this.generalErrorMsj = error.message;
      }
    )
  }

  validarUsuario(){
    this.user.logIn(this.loginForm.value)
    .subscribe(
      (data: LogInDataResponseInterface[] ) =>{
        this.checkError(data);
        this.loading = false;
        if( this.recuerdame ){
          this.cookies.set("userEmail",this.loginForm.value.correo);
        }
      },
      (error: any)=>{
        this.generalError = true;
				this.generalErrorMsj = error;
      }
    )
    this.resetForm();
  }

  validateForm(){
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

  checkError(data: LogInDataResponseInterface []){
		const code: number = data['http_response_code'];
		this.errorClass = this.fn.checkClassError(code);
		this.logInDataResponse = data;
	}
  
  resetForm(){
		this.loginForm.reset();
	}

}
