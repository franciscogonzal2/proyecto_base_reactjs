import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ContactoService, contactoDataInterface } from '../../../Services/contacto/contacto.service';
import * as ContactoAction from '../../Actions/contacto/contacto.action';

@Injectable()
export class ContactoEffects {

    constructor(
        private actions$: Actions,
        private _contacto: ContactoService
    ) { }

    public contactoAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(ContactoAction.setContactoActionStart),
            concatMap(() => this._contacto.getContactoData().pipe(
                map((response: contactoDataInterface[]) =>
                    ContactoAction.setContactoActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: contactoDataInterface[]) =>
                    of(ContactoAction.setContactoActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}