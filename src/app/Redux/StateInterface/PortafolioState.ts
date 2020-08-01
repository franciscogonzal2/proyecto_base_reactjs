import { portafolioDataInterface } from '../../Services/portafolio/portafolio.service';

export interface PortafolioState {
    data: portafolioDataInterface[];
    loader: boolean;
}