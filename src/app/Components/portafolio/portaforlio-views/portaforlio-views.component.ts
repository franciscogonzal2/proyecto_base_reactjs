
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portafolioDataInterface } from '../../../Services/portafolio/portafolio.service';
import { AppState } from '../../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setPortafolioActionStart } from 'src/app/Redux/Actions/portafolio/portafolio.action';
import { SharedService } from '../../../Services/shared/shared.service';

@Component({
  selector: 'app-portaforlio-views',
  templateUrl: './portaforlio-views.component.html',
  styleUrls: ['./portaforlio-views.component.css']
})
export class PortaforlioViewsComponent implements OnInit, DoCheck, OnDestroy {
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
  oldLang: string = "";

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private shared: SharedService
  ) {
    const pathName = this.route.routeConfig.path;
    if (pathName) {
      this.typePortafolio = pathName;
    }

    this.store.subscribe((stts: any) => {
      this.loading = stts.portafolio.loader;
    });
  }

  ngOnInit() {
    this.store.dispatch(setPortafolioActionStart());

    this.store.subscribe((stts: any) => {
      let portafolioDataAux = stts.portafolio.data;
      let loaderAux = stts.portafolio.loader;

      if (portafolioDataAux.container || portafolioDataAux.error) {
        if (portafolioDataAux.code === 200) {
          this.loading = loaderAux;
          this.portafolioData =  this.transformerData(portafolioDataAux);
        } else {
          this.generalError = true;
          this.generalErrorMsj = portafolioDataAux.error.errorMsj;
        }
      }
    });
  }

  ngDoCheck() {
		/*Cambio de idioma*/
		if (this.oldLang === "") {
			this.oldLang = this.shared.getSelectedLanguage();
		}

		if (this.oldLang !== "" && this.shared.getSelectedLanguage() !== this.oldLang) {
			this.oldLang = this.shared.getSelectedLanguage();
			this.store.dispatch(setPortafolioActionStart());
		}
	}

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

  transformerData(data){
    let arrayDataAux = data.container[0]["elementos"];
    let arrayData = arrayDataAux.find( (item) => item.type === this.typePortafolio);
    return [arrayData];
  }

  ngOnDestroy() { }

}

