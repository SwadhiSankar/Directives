import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('directive');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmation = window.confirm('Do you want to leave the app?');
    if (confirmation) {
      return;
    }
    event?.preventDefault();
  }
}
