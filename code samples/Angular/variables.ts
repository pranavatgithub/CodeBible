export class UserItemComponent implements OnInit {
    name: string; // <-- added name property - we can render it like {{name}} in html
    title: HTMLInputElement;
    constructor() {
        this.name = 'Felipe'; // set the name
    }
    ngOnInit() {
    }
}
