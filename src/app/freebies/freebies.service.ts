import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreebiesService {

  pointsChange = new BehaviorSubject<number>(15);
  #freebieMode = false;

  constructor() {
  }

  get freebieModeActive(): boolean {
    return this.#freebieMode;
  }

  get points(): number {
    return this.pointsChange.value;
  }

  set points(points: number) {
    this.pointsChange.next(points);
  }

  toggleFreebieMode(): void {
    this.#freebieMode = !this.#freebieMode;
  }
}
