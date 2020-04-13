
  import { Component, OnInit, OnDestroy, } from '@angular/core';
  import { Router, ActivatedRoute } from '@angular/router';
  import { PortafolioService, portafolioDataInterface } from '../../../Services/portafolio/portafolio.service';

  @Component({
    selector: 'app-portaforlio-views',
    templateUrl: './portaforlio-views.component.html',
    styleUrls: ['./portaforlio-views.component.css']
  })
  export class PortaforlioViewsComponent {
    /*propiedades*/
    loading: boolean = true;
    generalError: boolean = false;
    generalErrorMsj: string;
    typePortafolio: string;
  
    /*modal data*/
    modal_id: string;
    modal_titulo: string;
    modal_imagen: string;
    modal_fechaCreacion: string;
    modal_url: string;
    visible: boolean = false;
  
    //get data
    portafolioData: portafolioDataInterface[] = [];
  
    constructor(
      private portafolioService: PortafolioService,
      private route: ActivatedRoute,
      private router: Router
    ) {
      const pathName = this.route.routeConfig.path;
      if (pathName) {
        this.typePortafolio = pathName;
      }
    }
  
    ngOnInit() {
      this.portafolioService.getPortafolioData(this.typePortafolio)
        .subscribe(
          (data: portafolioDataInterface[]) => {
            this.portafolioData = data;
            this.loading = false;
          },
          (err: any) => {
            this.generalError = true;
            this.generalErrorMsj = err.message;
          }
        );
  
    }
  
    ngOnDestroy() { }
  
    showModal(id: string, titulo: string, urlimg: string, fecha: string, urlweb: string) {
      this.modal_id = id;
      this.modal_titulo = titulo;
      this.modal_imagen = urlimg;
      this.modal_fechaCreacion = fecha;
      this.modal_url = urlweb;
    }
  
    onOpen() {
      if (this.visible === false) {
        this.visible = true;
      }
    }
  
    onClose() {
      if (this.visible === true) {
        this.visible = false;
      }
    }
  
  }
  
  