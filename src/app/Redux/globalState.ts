//StateInterface
import { LanguageState } from './StateInterface/LanguageState';
import { HomeState } from './StateInterface/HomeState';
import { NosotrosState } from './StateInterface/NosotrosState';
import { OfertaState } from './StateInterface/OfertaState';
import { ContactoState } from './StateInterface/ContactoState';
import { ContactoResponseState } from './StateInterface/ContactoState';
import { PortafolioState } from './StateInterface/PortafolioState';
import { WebDesignState } from './StateInterface/WebDesignState';
import { ResponsiveState } from './StateInterface/ResponsiveState';
import { WebPacksState } from './StateInterface/WebPacksState';
import { FooterState } from './StateInterface/FooterState';
import { CarruselState } from './StateInterface/CarruselState';
import * as UserState  from './StateInterface/UserState';

//GLOBAL STATES
export interface AppState {
    lenguaje: LanguageState;
    home: HomeState;
    nosotros: NosotrosState;
    oferta: OfertaState;
    contacto: ContactoState;
    contactoResponse: ContactoResponseState;
    portafolio: PortafolioState;
    webdesign: WebDesignState;
    responsive: ResponsiveState;
    webpacks: WebPacksState;
    footer: FooterState;
    carrusel: CarruselState;
    logIn: UserState.LogInState;
    logInResponse: UserState.LogInResponseState;
    registro: UserState.RegistroState;
    registroResponse: UserState.RegistroResponseState;
    user: UserState.UserState;
}