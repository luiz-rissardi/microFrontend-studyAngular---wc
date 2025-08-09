import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shoes {
  private data = [{
    shoesName:"nike",
    price:34.90
  }]

  getPrice():Observable<any>{
    return new Observable(sub => sub.next(this.data))
  }
}
