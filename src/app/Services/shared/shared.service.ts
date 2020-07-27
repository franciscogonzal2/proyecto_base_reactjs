import { Injectable } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { AppState } from '../../Redux/globalReducer';
import { languageSelector } from 'src/app/Redux/Selectors/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private store: Store<AppState>
  ) {}

  getSelectedLanguage(): string{
    let leng: string;
    this.store.pipe(select(languageSelector)).subscribe( len => leng = len );
    return leng;
  }

}
