import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LogInService, LogInDataInterface, LogInDataResponseInterface } from "../../Services/logIn/logIn.service";
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
  @Output() reLoadMenu: EventEmitter<boolean> = new EventEmitter();
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
    private cookies: CookieService,
    private route: Router
  ){}

  ngOnInit() {
    //isSignIn?
    if(this.user.isSignIn()){
      this.route.navigateByUrl('/user');
    }

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
				this.generalError = error;
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
        this.reLoadMenu.emit(true);
        setTimeout(()=>{ this.route.navigateByUrl('/user') }, 6000);
      },
      (error: any)=>{
        if( error.statusError === "backend" ){
          this.checkError(error.errors);
        }else{
          this.generalError = true;
				  this.generalErrorMsj = error;
        }
				
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

  checkError(value: LogInDataResponseInterface []){
		const code: number = value[0].http_response_code;
		this.errorClass = this.fn.checkClassError(code);
		this.logInDataResponse = value;
	}
  
  resetForm(){
		this.loginForm.reset();
  }
  
  setRecuerdame(){
    this.recuerdame = !this.recuerdame;
  }

}
