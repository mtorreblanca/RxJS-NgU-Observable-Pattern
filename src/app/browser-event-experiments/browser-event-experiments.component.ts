import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.scss']
})
export class BrowserEventExperimentsComponent implements OnInit {

  // member variable
  hoverSection: HTMLElement;


  ngOnInit() {

    this.hoverSection = document.getElementById('hover');

    this.hoverSection.addEventListener('mousemove', onMouseMove);

  }

  unsubscribe() {
    console.log('Called unsubscribe()');

    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function onMouseMove(ev: MouseEvent) {
  console.log(ev);
}
