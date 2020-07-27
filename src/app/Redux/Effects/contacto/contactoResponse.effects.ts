import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ContactoService, contactoDataResponseInterface } from '../../../Services/contacto/contacto.service';
import * as ContactoAction from '../../Actions/contacto/contactoResponse.action';
import { FuncionesService } from '../../../Services/funciones/funciones.service';

@Injectable()
export class ContactoResponseEffects {

    constructor(
        private actions$: Actions,
        private _contacto: ContactoService,
        private fn: FuncionesService,
    ) { }

    public contactoResponseAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(ContactoAction.setContactoResponseActionStart),
            concatMap((action) =>
                this._contacto.createContactoData(action.response)
                    .pipe(
                        map((resp: contactoDataResponseInterface[]) =>
                            ContactoAction.setContactoResponseActionSuccess({ response: resp })
                        ),
                        catchError((errors: contactoDataResponseInterface[]) => 
                            of(ContactoAction.setContactoResponseActionFail({ response: errors }))
                        )
                    )
            )
        )
    );
}