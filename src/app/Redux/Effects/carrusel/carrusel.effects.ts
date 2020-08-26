import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { CarruselService, carruselDataInterface } from '../../../Services/carrusel/carrusel.service';
import * as CarruselAction from '../../Actions/carrusel/carrusel.action';

@Injectable()
export class CarruselEffects {

    constructor(
        private actions$: Actions,
        private _carrusel: CarruselService
    ) { }

    public carruselAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(CarruselAction.setCarruselActionStart),
            concatMap(() => this._carrusel.getCarruselData().pipe(
                map((response: carruselDataInterface[]) =>
                    CarruselAction.setCarruselActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: carruselDataInterface[]) =>
                    of(CarruselAction.setCarruselActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}