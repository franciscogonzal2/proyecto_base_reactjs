import { footerDataInterface } from '../../Services/footer/footer.service';

export interface FooterState {
    data: footerDataInterface[];
    loader: boolean;
}