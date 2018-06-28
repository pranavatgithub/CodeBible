export class UserListComponent implements OnInit {
    names: string[];//Array<string>
    constructor() {
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
    ngOnInit() {
    }
}

/*
<ul>
    <li *ngFor="let name of names">Hello {{ name }}</li>
</ul>
*/