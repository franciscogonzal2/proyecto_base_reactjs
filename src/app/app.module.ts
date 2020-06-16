/*Modulos principales*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

/*ngRx*/
import { environment } from "../environments/environment";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './Redux/globalReducer';
import { EffectsModule } from "@ngrx/effects";
import { EFFECTS } from "./Redux/globalEffects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
//import { StoreRouterConnectingModule, RouterStateSerializer} from "@ngrx/router-store";

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

/*Modulos de lso componentes*/
import { ContainerModule } from './Components/container.module';

/*Componentes de la raiz*/
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
		StoreModule.forRoot(reducers, { metaReducers }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot( EFFECTS ),
		//StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal })
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
