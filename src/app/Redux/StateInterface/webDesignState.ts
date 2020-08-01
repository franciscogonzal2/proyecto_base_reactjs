import { webDesignDataInterface } from '../../Services/webdesign/webdesign.service';

export interface WebDesignState {
    data: webDesignDataInterface[];
    loader: boolean;
}