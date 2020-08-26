import { webpacksDataInterface } from '../../Services/webpacks/webpacks.service';

export interface WebPacksState {
    data: webpacksDataInterface[];
    loader: boolean;
}