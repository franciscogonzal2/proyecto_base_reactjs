import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

/*NGRX*/
import { StoreModule } from '@ngrx/store';
import { appReducer } from './Redux/Reducers/app/app.reducer';

/*Rutas*/
import { APP_ROUTES } from './app.routing';

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

/*Modules*/
import { ContainerModule } from './Components/container.module';

/*Componentes*/
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/logIn/logIn.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

/*modulo principal*/
@NgModule({
	declarations: [
		AppComponent,
		LogInComponent,
		RegistroComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		APP_ROUTES,
		FormsModule,
		ReactiveFormsModule,
		ContainerModule,
		StoreModule.forRoot({ app: appReducer })
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
