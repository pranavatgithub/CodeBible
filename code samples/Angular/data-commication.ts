/* <ul>
    <li * ngFor="let name of names" > // names = [a,b,c]
        <app-user-item [name]="name" > </app-user-item> ---> pass item to app-user-item 
    </li >
</ul>
*/

import {
    Component,
    OnInit,
    Input // <--- added this
} from '@angular/core';
@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
    @Input() name: string; // <-- added Input annotation // here it recieved
    constructor() {}
    ngOnInit() { }
}