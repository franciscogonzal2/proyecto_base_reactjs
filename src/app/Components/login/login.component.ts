import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from "../../Services/auth0/auth.service";
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  recordarme: boolean = true;

  constructor(
    private auth: AuthService,
    private cookies: CookieService
  ){}

  ngOnInit() {
    this.validateForm();
    const isEmail = this.cookies.check("userEmail");
    if( isEmail ){
      this.loginForm.patchValue({"correo": this.cookies.get("userEmail")});
      this.recordarme = true;
    }
   
  }

  validarUsuario(){
    this.auth.logIn(this.loginForm.value)
    .subscribe(
      (data) =>{
        console.warn("data");
        console.log(data);
        if( this.recordarme ){
          console.log(this.loginForm.value.correo);
          this.cookies.set("userEmail",this.loginForm.value.correo);
        }
      },
      (error)=>{
        console.warn("error");
        console.log(error);
        if( this.recordarme ){
          this.cookies.set("userEmail",this.loginForm.value.correo);
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
  
  resetForm(){
		this.loginForm.reset();
	}


}
