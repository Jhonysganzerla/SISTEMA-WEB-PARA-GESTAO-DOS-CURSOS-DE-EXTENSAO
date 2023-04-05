import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[telefoneMask]'
})
export class TelefoneMaskDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    // Get the input value and remove all non-numeric characters
    let input = event.target.value.replace(/\D/g, '');

    // Apply the phone number mask: (00) 00000-0000
    if (input.length === 11) {
      input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (input.length === 10) {
      input = input.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (input.length > 6) {
      input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2-');
    } else if (input.length > 2) {
      input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    }

    // Set the masked input value
    this.renderer.setProperty(this.el.nativeElement, 'value', input);
  }
}