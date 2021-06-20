import { Component, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('userInput') input: ElementRef;
  @ContentChild('oddie') oddChild: ElementRef;

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number): void {
    (firedNumber % 2) === 0 ? this.evenNumbers.push(firedNumber) : this.oddNumbers.push(firedNumber);
    console.log(this.input.nativeElement.value);
  }
}
