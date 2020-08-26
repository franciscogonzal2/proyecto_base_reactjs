import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { FooterService, footerDataInterface } from '../../../Services/footer/footer.service';
import * as FooterAction from '../../Actions/footer/footer.action';

@Injectable()
export class FooterEffects {

    constructor(
        private actions$: Actions,
        private _footer: FooterService
    ) { }

    public footerAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(FooterAction.setFooterActionStart),
            concatMap(() => this._footer.getFooterData().pipe(
                map((response: footerDataInterface[]) =>
                    FooterAction.setFooterActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: footerDataInterface[]) =>
                    of(FooterAction.setFooterActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}