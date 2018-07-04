import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css', '../../assets/css/custom.css']
})
export class ManagementComponent implements AfterViewChecked{
  constructor(private elementRef: ElementRef) {

  }
  ngAfterViewChecked() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}