import { homeDataInterface } from '../../Services/home/home.service';

export interface HomeState {
    data: homeDataInterface[];
    loader: boolean;
}