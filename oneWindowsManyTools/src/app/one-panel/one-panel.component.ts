import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-one-panel',
  templateUrl: './one-panel.component.html',
  styleUrls: ['./one-panel.component.scss']
})
export class OnePanelComponent implements OnInit {

  @Input() text: string;
  @Output() callmsgbox = new EventEmitter<void>();



  constructor() { }

  ngOnInit() { }

  msgBox() {
    this.callmsgbox.emit();
  }

}
