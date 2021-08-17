import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public panelStateOne = false;
  public panelStateTwo = false;
  public panelStateThree = false;

  public startDate: Date;
  public endDate: Date;

  public selected;

  constructor() { }

  ngOnInit(): void {
    this.startDate = new Date();
    this.endDate = new Date();

    this.endDate.setDate(this.endDate.getDate() + 7);

    this.selected = {
      startDate: this.startDate,
      endDate: this.endDate
    };
  }

}
