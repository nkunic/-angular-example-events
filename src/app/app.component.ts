import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Click event
  onLogoClicked() {
    alert('Logo clicked!');
  }

  // Keyup event
  data = {
    value: 'Test',
  };
  
  onKeyUp(newTitle:string) {
    this.data.value = newTitle;
  }

}
