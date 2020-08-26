import { responsiveDataInterface } from '../../Services/responsive/responsive.service';

export interface ResponsiveState {
    data: responsiveDataInterface[];
    loader: boolean;
}