import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { PostResource } from './PostResource';
import { PostListItem } from './dataModel/PostListItem';

@Injectable()
export class PostService{
    constructor(private postResource: PostResource){
        
    }
    
    public getAllPostItems(): Observable<PostListItem[]>{
        return this.postResource.findAll();
    }
}