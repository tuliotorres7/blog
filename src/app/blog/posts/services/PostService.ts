import { Injectable } from "@angular/core";
import {ApiConfig} from '../../ApiConfig';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostResource } from './PostResource';
import { PostListItem } from './dataModel/PostListItem';
import { CreatePostDto } from './dataModel/CreatePostDto';

@Injectable()
export class PostService{
    
    constructor(private postResource: PostResource){
        
    }
    
    public getAllPostItems(): Observable<PostListItem[]>{
        return this.postResource.findAll();
    }
    public createPost(createPostDto: CreatePostDto): Observable<CreatePostDto>{
        return this.postResource.create(createPostDto);
    }
}