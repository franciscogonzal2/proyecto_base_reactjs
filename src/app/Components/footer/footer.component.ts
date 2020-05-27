import { Component, Input, OnInit } from '@angular/core';
import { FooterService, footerDataInterface } from '../../Services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() language: string;
  @Input() gototopView: string;
  /*propiedades*/
  loading: boolean = true;
  //get data
  footerData: footerDataInterface[] = [];
  
  constructor( private footerService: FooterService ) {}
  
	ngOnInit() {
    this.footerService.getFooterData()
		.subscribe( 
      (data: footerDataInterface[]) =>{
        this.footerData = data;
        this.loading = false;
      },
      (error: any) => {
        //console.log(error.message);
      }
    );
  }
}
