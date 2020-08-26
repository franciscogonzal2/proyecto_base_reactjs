
import { RouterModule, Routes } from '@angular/router';

/*componentes a enrutar*/
import { ContainerComponent } from '../Components/container.component';
import { HomeComponent } from '../Components/home/home.component';
import { NosotrosComponent } from '../Components/nosotros/nosotros.component';
import { OfertaComponent } from '../Components/oferta/oferta.component';
import { ContactoComponent } from '../Components/contacto/contacto.component';
import { WebdesignComponent } from '../Components/webdesign/webdesign.component';
import { ResponsiveComponent } from '../Components/responsive/responsive.component';
import { WebpacksComponent } from '../Components/webpacks/webpacks.component';
import { PortafolioComponent } from '../Components/portafolio/portafolio.component';
import { PortaforlioViewsComponent } from '../Components/portafolio/portaforlio-views/portaforlio-views.component';
import { UserComponent } from '../Components/user/user.component';

/* Guards */
import { UserGuard } from '../Guards/user/user.guard';

const container_routes: Routes = [
    {
		path: '',
        component: ContainerComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent },
            { path: 'nosotros', component: NosotrosComponent },
            { path: 'oferta', component: OfertaComponent },
            { path: 'contacto/:paquete', component: ContactoComponent },
            { path: 'contacto/:paquete/:code', component: ContactoComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: 'webdesign', component: WebdesignComponent },
            { path: 'responsive', component: ResponsiveComponent },
            { path: 'webpacks', component: WebpacksComponent },
            {
                path: 'portafolio',
                component: PortafolioComponent,
                children: [
                    { path: '', redirectTo: 'web', pathMatch: 'full'},
                    { path: 'web', component: PortaforlioViewsComponent },
                    { path: 'logo', component: PortaforlioViewsComponent },
                    { path: 'design', component: PortaforlioViewsComponent }
                  ]
            },
            { path: 'user', component: UserComponent, canActivate: [ UserGuard ] }
        ]
    }
];

export const CONTAINER_ROUTES = RouterModule.forChild( container_routes );

