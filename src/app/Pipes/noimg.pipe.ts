import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

  transform(images: any[]): any {
    if( !images )
    {
      return 'assets/img-commons/no-image.png';
    }else{
      return images;
    }
  }

}
