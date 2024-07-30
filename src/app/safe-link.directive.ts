import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input<string>('muapp');
  constructor() {
    console.log('directive');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmation = window.confirm('Do you want to leave the app?');

    if (confirmation) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + this.queryParam();
      return;
    }
    event?.preventDefault();
  }
}
