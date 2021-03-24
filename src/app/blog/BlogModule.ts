import { NgModule } from "@angular/core";
import { PostService } from './service/PostService';
import { PostResource } from './service/PostResource';
import { PostListModule } from './list/PostListModule';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
        PostListModule,
        HttpClientModule,
    ],
    exports: [
        PostListModule,
    ],
    declarations: [],
    providers:[
        PostService,
        PostResource,
    ],
})
export class BlogModule{

}