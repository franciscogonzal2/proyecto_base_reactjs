
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
  modalData: object;
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

  onOpen(index: number) {
    this.modalData = {
      titulo: this.portafolioData[0]["item"][index].tituloElements,
      imagen: this.portafolioData[0]["item"][index].imgElements,
      fechaCreacion: this.portafolioData[0]["item"][index].dateElements,
      url: this.portafolioData[0]["item"][index].urlElements
    }

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

