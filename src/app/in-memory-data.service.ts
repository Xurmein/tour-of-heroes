import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Moondragon' },
      { id: 2, name: 'Goliath' },
      { id: 3, name: 'Rescue' },
      { id: 4, name: 'Moon Knight' },
      { id: 5, name: 'Jewel' },
      { id: 6, name: 'Hercules' },
      { id: 7, name: 'Taskmaster' },
      { id: 8, name: 'Ms. Marvel' },
      { id: 9, name: 'Hercules' },
      { id: 10, name: 'Justice' },
      { id: 11, name: 'Speedball' }
    ];
    return { heroes };
  }
  getId(heroes : Hero[]) : number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
