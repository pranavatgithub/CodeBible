// create a new FormControl with the value "Nate"
let nameControl = new FormControl("Nate"); // smallest form unit
var name = nameControl.value; // -> Nate
// now we can query this control for certain values:
nameControl.errors // -> StringMap<string, any> of errors
nameControl.dirty // -> false
nameControl.valid // -> true
// etc.

// can be used like 
var template = `<input type="text" [formControl]="name" />`

let personInfo = new FormGroup({
    firstName: new FormControl("Nate"),
    lastName: new FormControl("Murray"),
    zip: new FormControl("90210")
});

personInfo.value; // -> {
// firstName: "Nate",
// lastName: "Murray",
// zip: "90210"
//}

// module infos

import {
    FormsModule, ReactiveFormsModule
} from '@angular/forms';
// farther down...
@NgModule({
    declarations: [
        // ... our declarations here
    ], imports: [
        FormsModule, // <-- add this ReactiveFormsModule // <-- and this
    ],
    bootstrap: []
})
class FormsDemoAppModule { }

var sampleForm = `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)"> ngForm comes from FormModule 
           <label for="skuInput">SKU</label>
           <input type="text" id="skuInput" placeholder="SKU" name="sku" ngModel>
           <button type="submit" class="ui button">Submit</button>
        </form>
`;
// in above example f in #f is a ref of ngForm which is a formControl 
// ngSubmit coming from Formmodule & see f.value will give us key-values of form elems, literally f is formcontrol 
//


// REACTIVE FORMS

import { Component, OnInit } from '@angular/core'; import {
    FormBuilder,
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'app-demo-form-sku-with-builder',
    templateUrl: './demo-form-sku-with-builder.component.html',
    styles: []
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
    myForm: FormGroup;
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }
    ngOnInit() {
    }
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}

let template = `
    <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)">
        <input type="text"
               id="skuInput"
               placeholder="SKU" 
               [formControl]="myForm.controls['sku']">
    </form>`