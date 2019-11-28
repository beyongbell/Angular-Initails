import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.carousel').carousel();
  }

}
