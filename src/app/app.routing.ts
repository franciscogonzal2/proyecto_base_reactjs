import { RouterModule, Routes } from '@angular/router';

/*componentes a enrutar*/
import { LogInComponent } from './Components/logIn/logIn.component';
import { RegistroComponent } from './Components/registro/registro.component';

/*error 404*/
import { NotfoundComponent } from './Components/notfound/notfound.component';

const app_routes: Routes = [

	{
		path: 'logIn',
		component: LogInComponent
	},
	{
		path: 'registro',
		component: RegistroComponent
	},
	{
		path: '**',
		component: NotfoundComponent
	}
];

export const APP_ROUTES = RouterModule.forRoot( app_routes );

