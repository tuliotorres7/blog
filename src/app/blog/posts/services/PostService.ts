import { Injectable } from "@angular/core";
import {ApiConfig} from '../../ApiConfig';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostResource } from './PostResource';
import { CreatePostDto } from './dataModel/CreatePostDto';
import { PostDto } from './dataModel/PostDto';
import { EditPostDto } from './dataModel/EditPostDto';

@Injectable()
export class PostService{
    
    constructor(private postResource: PostResource){
        
    }
    
    public getAllPostItems(): Observable<PostDto[]>{
        return this.postResource.findAll();
    }
    public createPost(createPostDto: CreatePostDto): Observable<CreatePostDto>{
        return this.postResource.create(createPostDto);
    }

    public editPost(editPostDto: EditPostDto): Observable<PostDto>{
        return this.postResource.edit(editPostDto);
    }
}