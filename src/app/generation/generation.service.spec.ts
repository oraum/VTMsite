import {fakeAsync, TestBed} from '@angular/core/testing';

import {GenerationService} from './generation.service';

describe('GenerationService', () => {
  let service: GenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have correct default generation', () => {
    expect(service.generation).toEqual('13th');
  });

  it('should set generation', () => {
    service.generation = '8th';
    expect(service.generation).toEqual('8th');
  });

  it('should hold information about flaws', () => {
    expect(service.hasFlaw).toBeFalse();
    service.flaw = 'Fourteenth Generation';
    expect(service.hasFlaw).toBeTruthy();
  });

  it('should change generation if points spent', () => {
    expect(service.generation).toEqual('13th');
    service.spendPoints(5);
    expect(service.generation).toEqual('8th');
    service.spendPoints(0);
    expect(service.generation).toEqual('13th');
    service.spendPoints(1);
    expect(service.generation).toEqual('12th');
    service.spendPoints(-5);
    expect(service.generation).toEqual('12th');
  });

  it('should notify about changes', fakeAsync(() => {
    const values: string[] = [];
    service.getGeneration().subscribe(next => values.push(next));

    service.spendPoints(1);

    expect(values.length).toBe(2);
    expect(values).toEqual(['13th', '12th']);
  }));
});
