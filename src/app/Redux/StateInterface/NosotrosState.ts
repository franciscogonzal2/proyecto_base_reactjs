import { nosotrosDataInterface } from '../../Services/nosotros/nosotros.service';

export interface NosotrosState {
    data: nosotrosDataInterface[];
    loader: boolean;
}