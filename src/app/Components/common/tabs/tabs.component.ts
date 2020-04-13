import { Component, OnInit } from '@angular/core';
import { PortafolioService, portafolioDataInterface } from '../../../Services/portafolio/portafolio.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  generalError: boolean = false;
	generalErrorMsj: string;
  tabsData: portafolioDataInterface[] = [];

  constructor( private portafolioService: PortafolioService ){}

  ngOnInit() {
    this.portafolioService.getPortafolioAllData()
			.subscribe(
				(data: portafolioDataInterface[]) => {
          this.tabsData = data;
        },
        (err: any) => {
					this.generalError = true;
					this.generalErrorMsj = "---";//err.message;
				}
			);
  }
}
