export class UserItemComponent implements OnInit {
    name: string; // <-- added name property - we can render it like {{name}} in html
    constructor() {
        this.name = 'Felipe'; // set the name
    }
    ngOnInit() {
    }
}
