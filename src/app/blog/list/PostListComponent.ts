import { Component, OnInit } from "@angular/core";
import { PostService } from '../service/PostService';
import { Observable } from 'rxjs';
import { PostListItem } from '../service/dataModel/PostListItem';
@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
})

export class PostListComponent implements OnInit{
    
    public postList: Observable<PostListItem[]> ;
    
    constructor(private postService: PostService){
    }
    
    ngOnInit(){
        this.postList = this.postService.getAllPostItems();
    }
}
