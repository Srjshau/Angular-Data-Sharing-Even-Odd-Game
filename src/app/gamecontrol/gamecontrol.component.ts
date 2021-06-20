import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame(): void {
    clearInterval(this.interval);
  }

}
