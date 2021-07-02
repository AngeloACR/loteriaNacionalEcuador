import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lottery-type',
  templateUrl: './lottery-type.component.html',
  styleUrls: ['./lottery-type.component.scss']
})
export class LotteryTypeComponent implements OnInit {
  @Input() image: String; 
  @Input() link: String;
  @Input() name: String;
  @Input() loteria: String;
  constructor() { }

  ngOnInit() {
  }

}
