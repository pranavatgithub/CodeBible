import { Component, OnInit } from '@angular/core';
@Component({ //decarator - “decorating” HelloWorldComponent as a Component
  selector: 'app-hello-world', // this component can be used like <app-hello-world></app-hello-world>
  templateUrl: './hello-world.component.html', // html reference
  template: `
    <p>we can add like this as well! </p>
  `,
  styleUrls: ['./hello-world.component.css'] // styles - follow style-encapsulation (don't overflow)
})
export class HelloWorldComponent implements OnInit { //defn class
  constructor() { }
  ngOnInit() {
  }
}