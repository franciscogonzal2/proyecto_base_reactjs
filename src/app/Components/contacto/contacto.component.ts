import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactoService, contactoDataInterface, contactoDataResponseInterface } from '../../Services/contacto/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;
	errorClass: Array<string> = [];
	packs:string;
	packsVal:number;
	myForm:FormGroup; 
	showC:boolean = false;
	showP:boolean = false;
	//get data
	contactoData: contactoDataInterface[] = [];
	contactoDataRequest: contactoDataResponseInterface[] = [];
	
	constructor(
		public form: FormBuilder,
		private route: ActivatedRoute,
		private contactoService: ContactoService,
		private router: Router
	){
		this.route.params.subscribe( params => {
			this.packs = params['paquete'];
			}
		);
	 }
	 
	ngOnInit() {
		this.contactoService.getContactoData()
		.subscribe(
			(data: contactoDataInterface[]) =>{
				this.contactoData = data;
				this.loading = false;
			},
			(err: any) => {
				this.generalError = true;
				this.generalErrorMsj = err.message;
		  	}
		);

		this.validateForm();

		if(this.packs){
			this.showC = true;
			this.packsVal= parseInt(this.packs);
			if( this.packsVal >= 1 && this.packsVal <= 4 ){
				this.showP = true;
			}
			else{
				this.showP = false;
				this.packsVal = 0;
			}
		}else{
			this.packsVal = 0;
		}
	}

	validateForm(){
		this.myForm = new FormGroup(
			{
				"nombre": new FormControl('', 
					{
						validators: [Validators.required],
						updateOn: 'blur'
					}),
				"correo": new FormControl('', 
					{
						validators: [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)],
						updateOn: 'blur'
					}),
				"telefono": new FormControl('', 
					{
						validators: [Validators.required, Validators.pattern(/^((?:(?:[+]?)(?:[0-9]{1,5}|\x28[0-9]{1,5}\x29?)(?:[\s]?))?)([0-9]{4})(?:[-]|[\s]?)([0-9]{4})$/)],
						updateOn: 'blur'
					}),
				"mensaje": new FormControl('',
					{
						validators: [Validators.required],
						updateOn: 'blur'
					})
			}
		);
	}

	saveData(){
		let bodyRequest = {
			"nombre" : this.myForm.value.nombre,
			"correo" : this.myForm.value.correo,
			"telefono" : this.myForm.value.telefono,
			"mensaje" : this.myForm.value.mensaje,
			"idPaquete" : this.packsVal
		};

		this.contactoService.createContactoData(bodyRequest)
		.subscribe(
			(data: contactoDataResponseInterface[]) =>{
				this.checkError(data);
				this.loading = false;
			},
			(error) => {
				console.log(error);
				this.generalError = true;
				this.generalErrorMsj = error.message;
			}
		);
		
		this.resetForm();
	}

	checkError(data){
		const code: string = data.http_response_code;
		let alertFlag: string = "";

		switch(code){
			case "200":
			case "201": alertFlag = "alert-success"; break;
			case "400": alertFlag = "alert-warning"; break;
			case "204":
			case "503": alertFlag = "alert-danger"; break;
			default: alertFlag = "alert-danger"; break;
		}

		this.errorClass = [
			"alert",
			"alert-success",
			"alert-dismissible",
			"fade",
			"show",
			"alertWrapper",
			alertFlag
		];

		this.contactoDataRequest = data;
	}

	gotoHome(){
		this.router.navigate(['/home']);
	}

	resetForm(){
		this.myForm.reset();
	}

	/*getOffSet(){
		return document.getElementById('myForm').offsetTop;
	}*/
}
