import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  templateUrl: './hover-click.component.html',
  styleUrls: ['./hover-click.component.scss'],
})
export class HoverClickComponent {
  isActive = false;
  isDiv2Visible = false;

  toggleDiv() {
    this.isActive = !this.isActive;
    if (!this.isActive) {
      this.isDiv2Visible = false;
    }
  }

  handleHover(event: MouseEvent) {
    event.stopPropagation();
    this.isActive = true;
    this.isDiv2Visible = false;
  }

  showDiv2() {
    if (!this.isActive) {
      this.isDiv2Visible = true;
    }
  }

  hideDiv2() {
    if (!this.isActive) {
      this.isDiv2Visible = false;
    }
  }
}
