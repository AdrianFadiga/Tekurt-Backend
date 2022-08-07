import { Injectable } from "@nestjs/common";
import { PostModel } from "./post.model";

@Injectable()
export class PostService {
    constructor(private postModel: PostModel) {}
};