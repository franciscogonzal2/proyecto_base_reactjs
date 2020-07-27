import { ofertaDataInterface } from '../../Services/oferta/oferta.service';

export interface OfertaState {
    data: ofertaDataInterface[];
    loader: boolean;
}