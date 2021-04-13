import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  public generations: string[] = ['3rd', '4th', '5th', '6th', '7th',
    '8th', '9th', '10th', '11th', '12th',
    '13th', '14th', '15th'];
  #defaultGeneration = 10;
  #flaw: string | undefined = undefined;

  #_generation = new BehaviorSubject<number>(this.#defaultGeneration);

  get generation(): string {
    return this.generations[this.#_generation.value];
  }

  set generation(value: string) {
    this.#_generation.next(this.generations.indexOf(value));
  }

  get hasFlaw(): boolean {
    return this.#flaw !== undefined;
  }

  set flaw(value: string | undefined) {
    this.#flaw = value;
    switch (value) {
      case undefined:
        this.#_generation.next(this.#defaultGeneration);
        break;
      case 'Fourteenth Generation (2pt)':
        this.#_generation.next(11);
        break;
      case 'Fifteenth Generation (4pt)':
        this.#_generation.next(12);
        break;
    }
  }

  public getGeneration(): Observable<string> {
    return this.#_generation.pipe(map(generationIndex => this.generations[generationIndex]));
  }

  public spendPoints(amount: number): void {
    // validate new index
    const newIndex = this.#defaultGeneration - amount;
    if (newIndex < 0 || newIndex > (this.generations.length - 1) || this.hasFlaw) {
      // invalid index
      return;
    } else {
      // valid index
      this.#_generation.next(newIndex);
    }
  }
}
