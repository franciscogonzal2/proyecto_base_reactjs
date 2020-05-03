import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

/*Rutas*/
import { ROUTING } from './app.routing';

/*Servicios*/
import { HomeService } from './Services/home/home.service';
import { CarruselService } from './Services/carrusel/carrusel.service';
import { WebpacksService } from './Services/webpacks/webpacks.service';
import { FooterService } from './Services/footer/footer.service';
import { FuncionesService } from './Services/funciones/funciones.service';
import { ContactoService  } from './Services/contacto/contacto.service';
import { NosotrosService  } from './Services/nosotros/nosotros.service';
import { OfertaService  } from './Services/oferta/oferta.service';
import { PortafolioService  } from './Services/portafolio/portafolio.service';
import { ResponsiveService } from './Services/responsive/responsive.service';
import { WebdesignService } from './Services/webdesign/webdesign.service';
import { LogInService } from './Services/logIn/logIn.service';
import { CookieService } from 'ng2-cookies';

/*Pipes*/
import { NoimgPipe } from './Pipes/noimg.pipe';

/*Componentes*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HomeComponent } from './Components/home/home.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { OfertaComponent } from './Components/oferta/oferta.component';
import { WebdesignComponent } from './Components/webdesign/webdesign.component';
import { ResponsiveComponent } from './Components/responsive/responsive.component';
import { WebpacksComponent } from './Components/webpacks/webpacks.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { PortafolioModalComponent } from './Components/modals/portafolio-modal/portafolio-modal.component';
import { PortafolioComponent } from './Components/portafolio/portafolio.component';
import { PortaforlioViewsComponent } from './Components/portafolio/portaforlio-views/portaforlio-views.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoadingComponent } from './Components/common/loading/loading.component';
import { GototopComponent } from './Components/common/gototop/gototop.component';
import { ErrorLoadingComponent } from './Components/common/error-loading/error-loading.component';
import { TabsComponent } from './Components/common/tabs/tabs.component';
import { LogInComponent } from './Components/logIn/logIn.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { UserComponent } from './Components/user/user.component';

/*modulo principal*/
@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		CarruselComponent,
		HomeComponent,
		NosotrosComponent,
		OfertaComponent,
		WebdesignComponent,
		ResponsiveComponent,
		WebpacksComponent,
		ContactoComponent,
		PortafolioComponent,
		PortaforlioViewsComponent,
		PortafolioModalComponent,
		NotfoundComponent,
		FooterComponent,
		NoimgPipe,
		LoadingComponent,
		GototopComponent,
		ErrorLoadingComponent,
		TabsComponent,
		LogInComponent,
		RegistroComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ROUTING,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		HomeService,
		CarruselService,
		WebpacksService,
		FooterService,
		FuncionesService,
		ContactoService,
		NosotrosService,
		OfertaService,
		PortafolioService,
		ResponsiveService,
		WebdesignService,
		LogInService,
		CookieService, 
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
