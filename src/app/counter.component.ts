import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Contador Jenkins Demo</h2>
    <p>Valor actual: {{ counterService.getCount() }}</p>
    <button (click)="counterService.increment()">Incrementar</button>
    <button (click)="counterService.decrement()">Decrementar</button>
    <button (click)="counterService.reset()">Resetear</button>
  `,
})
export class CounterComponent {
  public counterService = inject(CounterService);
}
