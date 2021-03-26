import { Component, OnInit } from "@angular/core";
import { PostService } from '../services/PostService';
import { Observable, BehaviorSubject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { CreatePostDialogComponent } from '../dialogs/CreatePostDialogComponent';
import { PostDto } from '../services/dataModel/PostDto';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { EditPostDto } from '../services/dataModel/EditPostDto';
import { ConfirmationDialogComponent } from '../../dialogs/ConfirmationDialogComponent';
@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
    styleUrls: ['postList.scss']
})

export class PostListComponent implements OnInit{
    public postList: Observable<PostDto[]> ;
    public isLoading = false;
    public displayedColumns: string[] = ['id','title','subTitle','imageUrl','action']
    
    private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);


    constructor(private postService: PostService,
                private matDialog: MatDialog){
    }
    
    ngOnInit(){
        this.isLoading = true;
        this.postService.getAllPostItems()
            .pipe(finalize(()=> this.isLoading = false))
            .subscribe((postListItems) => this.postListSubject.next(postListItems));
    }

    public getPostList(): Observable<PostDto[]>{
        return this.postListSubject.asObservable();
    }

    public editPost(editPost: EditPostDto){
        const ref = this.matDialog.open(CreatePostDialogComponent,{
            width: '600px',
            data: {editPostDto: editPost}
        });
        
        ref.afterClosed().subscribe((editedPost: PostDto)=>{
            if(editedPost){
                const list = this.postListSubject.getValue();
                const postIndex = _.findIndex(list,post => post.id === editedPost.id);
                list[postIndex] = editedPost;
                
                this.postListSubject.next(_.cloneDeep(list));
            }

        });
    }

    public deletePost(postDto: PostDto){
        const ref= this.matDialog.open(ConfirmationDialogComponent);
    }

    public createPost(){
        const ref = this.matDialog.open(CreatePostDialogComponent, {
            width: '600px',
        });

        ref.afterClosed().subscribe((newPost: PostDto)=>{
            if(newPost){
                const list = this.postListSubject.getValue();
                list.push(newPost);
                this.postListSubject.next(_.cloneDeep(list));
            }

        });
    }
}
