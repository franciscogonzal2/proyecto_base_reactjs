import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactoService, contactoDataInterface, contactoDataResponseInterface } from '../../Services/contacto/contacto.service';
import { FuncionesService } from '../../Services/funciones/funciones.service';

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
	/*propiedades*/
	loading: boolean = true;
	isLoading: boolean = false;
	generalError: boolean = false;
	generalErrorMsj: string;
	errorClass: Array<string> = [];
	packs: string;
	packsVal: number;
	myForm: FormGroup;
	showC: boolean = false;
	showP: boolean = false;
	//get data
	contactoData: contactoDataInterface[] = [];
	contactoDataResponse: contactoDataResponseInterface[] = [];

	constructor(
		private route: ActivatedRoute,
		private contactoService: ContactoService,
		private fn: FuncionesService,
		private router: Router
	) {
		this.route.params.subscribe(params => {
			this.packs = params['paquete'];
		}
		);
	}

	ngOnInit() {
		this.contactoService.getContactoData()
			.subscribe(
				(data: contactoDataInterface[]) => {
					this.contactoData = data;
					this.loading = false;
				},
				(error: any) => {
					this.generalError = true;
					this.generalErrorMsj = error.message;
				}
			);

		this.validateForm();

		if (this.packs) {
			this.showC = true;
			this.packsVal = parseInt(this.packs);
			if (this.packsVal >= 1 && this.packsVal <= 4) {
				this.showP = true;
			}
			else {
				this.showP = false;
				this.packsVal = 0;
			}
		} else {
			this.packsVal = 0;
		}
	}

	validateForm() {
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

	saveData() {
		this.isLoading = true;
		let bodyRequest = {
			...this.myForm.value,
			"idPaquete": this.packsVal
		};

		this.contactoService.createContactoData(bodyRequest)
			.subscribe(
				(data: contactoDataResponseInterface[]) => {
					this.checkError(data);
					this.loading = false;
					this.isLoading = false;
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

	checkError(value: contactoDataResponseInterface[]) {
		const code: number = value[0].http_response_code;
		this.errorClass = this.fn.checkClassError(code);
		this.contactoDataResponse = value;
	}

	gotoHome() {
		this.router.navigate(['/home']);
	}

	resetForm() {
		this.myForm.reset();
	}

}
