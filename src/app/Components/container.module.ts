import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/*Pipes*/
import { NoimgPipe } from '../Pipes/noimg.pipe';

/*Rutas hijas*/
import { CONTAINER_ROUTES } from './container.routing';

/*Componentes imports*/
import { ContainerComponent } from './container.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { CarruselComponent } from '../Components/carrusel/carrusel.component';
import { HomeComponent } from '../Components/home/home.component';
import { NosotrosComponent } from '../Components/nosotros/nosotros.component';
import { OfertaComponent } from '../Components/oferta/oferta.component';
import { WebdesignComponent } from '../Components/webdesign/webdesign.component';
import { ResponsiveComponent } from '../Components/responsive/responsive.component';
import { WebpacksComponent } from '../Components/webpacks/webpacks.component';
import { ContactoComponent } from '../Components/contacto/contacto.component';
import { PortafolioComponent } from '../Components/portafolio/portafolio.component';
import { PortaforlioViewsComponent } from '../Components/portafolio/portaforlio-views/portaforlio-views.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { LoadingComponent } from '../Components/common/loading/loading.component';
import { GototopComponent } from '../Components/common/gototop/gototop.component';
import { ErrorDefaultComponent } from '../Components/common/error-default/error-default.component';
import { TabsComponent } from '../Components/common/tabs/tabs.component';
import { UserComponent } from '../Components/user/user.component';
import { PromoModalComponent } from '../Components/modals/promo-modal/promo-modal.component';
import { PortafolioModalComponent } from './modals/portafolio-modal/portafolio-modal.component';

@NgModule({
	declarations: [
		NoimgPipe,
		ContainerComponent,
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
		FooterComponent,
		LoadingComponent,
		GototopComponent,
		ErrorDefaultComponent,
		TabsComponent,
		UserComponent,
		PromoModalComponent,
		PortafolioModalComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CONTAINER_ROUTES,
		NgbModule,
	],
	exports: [
		NoimgPipe,
		ContainerComponent,
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
		FooterComponent,
		LoadingComponent,
		GototopComponent,
		ErrorDefaultComponent,
		TabsComponent,
		UserComponent,
		PromoModalComponent,
		PortafolioModalComponent
	]
})
export class ContainerModule { }