import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { ResponsiveService, responsiveDataInterface } from '../../../Services/responsive/responsive.service';
import * as ResponsiveAction from '../../Actions/responsive/responsive.action';

@Injectable()
export class ResponsiveEffects {

    constructor(
        private actions$: Actions,
        private _responsive: ResponsiveService
    ) { }

    public responsiveAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(ResponsiveAction.setResponsiveActionStart),
            concatMap(() => this._responsive.getResponsiveData().pipe(
                map((response: responsiveDataInterface[]) =>
                    ResponsiveAction.setResponsiveActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: responsiveDataInterface[]) =>
                    of(ResponsiveAction.setResponsiveActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}