import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Initail';
  name  = '';

  public constructor(private titleService: Title ) { }

  public setTitle( setTitle: string) {
    this.titleService.setTitle( setTitle );
  }
}
