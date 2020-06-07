import {Component} from '@angular/core';
import printJS from 'print-js';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex-container">
      <button id="print-button" (click)="print()">Imprimir</button>
    </div>
    <div class="flex-container">
      <div id="brochure">
        <iframe [src]="fordTaurosBrochureUrl | safe"></iframe>
      </div>
    </div>
  `,
  styles: [
    '.flex-container { display: flex; align-content: center; justify-content: center; }',
    '#brochure { width: 297mm; height: 210mm; }',
    '#brochure iframe { width: 100%; height: 100%; }',
    '#print-button { padding: 8px 0; min-width: 180px; margin: 8px 0; }'
  ]
})
export class AppComponent {

  fordTaurosBrochureUrl = 'https://www.ford.com/services/assets/Brochure?make=Ford&model=Taurus&year=2019';

  print() {
    printJS(this.fordTaurosBrochureUrl);
  }

}
