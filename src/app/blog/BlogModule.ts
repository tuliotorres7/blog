import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
import {PostsModule} from './posts/PostModule';
import { ConfirmationDialogComponent } from './dialogs/ConfirmationDialogComponent';


@NgModule({
    imports:[
        PostsModule,
        HttpClientModule,
    ],
    exports: [
        PostsModule,
    ],
    declarations: [
        ConfirmationDialogComponent,
    ],
    entryComponents: [
        ConfirmationDialogComponent,
    ]
    
})
export class BlogModule{

}