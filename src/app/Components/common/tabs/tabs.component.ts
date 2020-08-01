import { Component, OnInit } from '@angular/core';
import { portafolioDataInterface } from '../../../Services/portafolio/portafolio.service';
import { AppState } from '../../../Redux/globalReducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  generalError: boolean = false;
  generalErrorMsj: string;
  tabsData: portafolioDataInterface[] = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.store.subscribe((stts: any) => {
      let portafolioDataAux = stts.portafolio.data;

      if (portafolioDataAux.container || portafolioDataAux.error) {
        if (portafolioDataAux.code === 200) {
          this.tabsData = portafolioDataAux.container[0]["elementos"];
        } else {
          this.generalError = true;
          this.generalErrorMsj = "";
        }
      }
    });
  }
}
