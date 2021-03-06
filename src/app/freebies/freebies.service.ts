import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreebiesService {

  #freebieMode = false;

  constructor() {
  }

  get freebieModeActive(): boolean {
    return this.#freebieMode;
  }

  toggleFreebieMode(): void {
    this.#freebieMode = !this.#freebieMode;
  }
}
