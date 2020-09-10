import { logInDataInterface, logInDataResponseInterface } from '../../Services/logIn/logIn.service';
import { newUserDataInterface, newUserDataResponseInterface } from '../../Services/registro/registro.service';
import { userDataInterface } from '../../Services/user/user.service';

export interface LogInState {
    data: logInDataInterface[];
    loader: boolean;
}

export interface LogInResponseState {
    response: logInDataResponseInterface[];
}

export interface RegistroState {
    data: newUserDataInterface[];
    loader: boolean;
}

export interface RegistroResponseState {
    response: newUserDataResponseInterface[];
}

export interface UserState {
    data: userDataInterface[];
    loader: boolean;
}
