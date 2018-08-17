/* <ul>
    <li * ngFor="let name of names" > // names = [a,b,c]
        <app-user-item [name]="name" (interaction)="functionOnParentComponent($event)"> </app-user-item> ---> pass item to app-user-item 
    </li >
</ul>
*/

import {
    Component,
    OnInit,
    Input, // <--- added this
    Output,
    EventEmitter,
} from '@angular/core';
@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
    @Input() name: string; // <-- added Input annotation // here it recieved
    @Output() interaction: EventEmitter = new EventEmitter<any>(); 
    constructor() {}
    ngOnInit() { }
    clickTest(){
        this.interaction.emit('im the data!');
    }
}

// another way of passing component

// <my-component [shortName]="myName" [oldAge]="myAge"></my-component>

@Component({
  selector: 'my-component'
})
class MyComponent {
   @Input('shortName') name: string; // see data passed like shortName and used like name
   @Input('oldAge') age: number; // so for outside world the input attribute will be oldAge, but not for inside world
}