import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hint-my-booking from app.component.ts';

  handleClick() {
    alert('clicked!!!');
  }
}
