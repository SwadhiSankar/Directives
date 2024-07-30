import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input<string>('muapp');
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('directive');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmation = window.confirm('Do you want to leave the app?');

    if (confirmation) {
      const address = this.hostElement.nativeElement.href;
      this.hostElement.nativeElement.href = address + this.queryParam();
      return;
    }
    event?.preventDefault();
  }
}
