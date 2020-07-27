import { contactoDataInterface, contactoDataResponseInterface } from '../../Services/contacto/contacto.service';

export interface ContactoState {
    data: contactoDataInterface[];
    loader: boolean;
}

export interface ContactoResponseState {
    response: contactoDataResponseInterface[];
}