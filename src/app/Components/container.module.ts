import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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
import { PortafolioModalComponent } from '../Components/modals/portafolio-modal/portafolio-modal.component';
import { PromoModalComponent } from './modals/promo-modal/promo-modal.component';
import { PortafolioComponent } from '../Components/portafolio/portafolio.component';
import { PortaforlioViewsComponent } from '../Components/portafolio/portaforlio-views/portaforlio-views.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { LoadingComponent } from '../Components/common/loading/loading.component';
import { GototopComponent } from '../Components/common/gototop/gototop.component';
import { ErrorDefaultComponent } from '../Components/common/error-default/error-default.component';
import { TabsComponent } from '../Components/common/tabs/tabs.component';
import { UserComponent } from '../Components/user/user.component';

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
		PortafolioModalComponent,
		FooterComponent,
		LoadingComponent,
		GototopComponent,
		ErrorDefaultComponent,
		TabsComponent,
		UserComponent,
		PromoModalComponent
    ],
    imports:[
        BrowserModule,
		HttpClientModule,
		FormsModule,
        ReactiveFormsModule,
        CONTAINER_ROUTES
    ],
    exports:[
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
		PortafolioModalComponent,
		FooterComponent,
		LoadingComponent,
		GototopComponent,
		ErrorDefaultComponent,
		TabsComponent,
		UserComponent,
		PromoModalComponent
    ]
})
export class ContainerModule { }