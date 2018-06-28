@NgModule({
    declarations: [ // declarations specifies the components that are defined in this module
        AppComponent,
        HelloWorldComponent,
        UserItemComponent,
        UserListComponent
    ], imports: [//imports describes which dependencies this module has
        BrowserModule
    ],
    providers: [],//providers is used for dependency injection
    bootstrap: [AppComponent] // toplevel component to load
})
export class AppModule { }