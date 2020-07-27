import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { NosotrosService, nosotrosDataInterface } from '../../../Services/nosotros/nosotros.service';
import * as NosotrosAction from '../../Actions/nosotros/nosotros.action';

@Injectable()
export class NosotrosEffects {

    constructor(
        private actions$: Actions,
        private _nosotros: NosotrosService
    ) {}

    public nosotrosAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(NosotrosAction.setNosotrosActionStart),
            concatMap(() => this._nosotros.getNosotrosData().pipe(
                    map( (response: nosotrosDataInterface[]) =>
                        NosotrosAction.setNosotrosActionSuccess({ data: response, loader: false })
                    ),
                    catchError((errors: nosotrosDataInterface[]) =>
                        of(NosotrosAction.setNosotrosActionFail({ data: errors, loader: false }))
                    )
                )
            )
        )
    );
}