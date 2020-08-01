import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';
import { WebdesignService, webDesignDataInterface } from '../../../Services/webdesign/webdesign.service';
import * as WebDesignAction from '../../Actions/webdesign/webdesign.action';

@Injectable()
export class WebDesignEffects {

    constructor(
        private actions$: Actions,
        private _webDesign: WebdesignService
    ) { }

    public webDesignAction$ = createEffect(
        () => this.actions$.pipe(
            ofType(WebDesignAction.setWebDesignActionStart),
            concatMap(() => this._webDesign.getWebDesignData().pipe(
                map((response: webDesignDataInterface[]) =>
                WebDesignAction.setWebDesignActionSuccess({ data: response, loader: false })
                ),
                catchError((errors: webDesignDataInterface[]) =>
                    of(WebDesignAction.setWebDesignActionFail({ data: errors, loader: false }))
                )
            )
            )
        )
    );
}