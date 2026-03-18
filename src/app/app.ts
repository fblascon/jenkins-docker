import { Component, signal } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <app-counter></app-counter>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('jenkins-docker-app');
}
