import { Component ,OnInit } from '@angular/core';
import { CreatePostDto } from '../services/dataModel/CreatePostDto';
import {NgForm} from '@angular/forms';
import { PostService } from '../services/PostService';
import {finalize} from 'rxjs/operators';
@Component({
    selector:'app-create-post-dialog',
    templateUrl: 'createPostDialog.html',
})

export class CreatePostDialogComponent{
    public newPostModel: CreatePostDto = {} as CreatePostDto;
    public isLoading = false;
    constructor(private postService: PostService){
        
    }
    
    public submit(form: NgForm){
        if(form.valid){
            this.isLoading = true;
            this.postService.createPost(this.newPostModel)
            .pipe(finalize(()=> this.isLoading = false))
            .subscribe((response)=>{
                console.log(response);
            });
        }
       
    }
}