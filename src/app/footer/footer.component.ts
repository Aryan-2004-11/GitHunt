import { Component, Input } from '@angular/core';
import { Developer } from '../models/Developer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() appTitle: string = '';
  @Input() appTheme: string = '';
  @Input() currentYear: number = 0;
  @Input() developer: Developer; // Removed default value

  constructor() {
    // Default developer object in case no input is provided
    this.developer = {
      name: '',
      githubUrl: '',
    };
  }
}
