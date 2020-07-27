import { Component, Input, OnInit } from '@angular/core';
import { FooterService, footerDataInterface } from '../../Services/footer/footer.service';
import { LogInService } from '../../Services/logIn/logIn.service';

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
  isSignIn: boolean = false;
  //get data
  footerData: footerDataInterface[] = [];
  
  constructor( 
    private footerService: FooterService,
    private logIn: LogInService
 ) {}
  
	ngOnInit() {
    if( this.logIn.isSignIn() ){
			this.isSignIn = true;
    }

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

  logOut(){
    this.logIn.logOut();
    this.isSignIn = false;
  }
}
