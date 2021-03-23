import { NgModule } from "@angular/core";
import { PostService } from './service/PostService';
import { PostResource } from './service/PostResource';
import { PostListModule } from './list/PostListModule';

@NgModule({
    imports:[
        PostListModule
    ],
    exports: [
        PostListModule
    ],
    declarations: [],
    providers:[
        PostService,
        PostResource
    ],
})
export class BlogModule{

}