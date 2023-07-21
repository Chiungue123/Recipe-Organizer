import { Component } from '@angular/core';
import { FormVisibilityService } from '../form-visibility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private FormVisibilityService: FormVisibilityService) { }

  onToggleForm() {
    console.log("onToggleForm() called")
    this.FormVisibilityService.toggleForm();
  }
}
