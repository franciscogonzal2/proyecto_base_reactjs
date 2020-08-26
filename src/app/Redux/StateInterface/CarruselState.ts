import { carruselDataInterface } from '../../Services/carrusel/carrusel.service';

export interface CarruselState {
    data: carruselDataInterface[];
    loader: boolean;
}