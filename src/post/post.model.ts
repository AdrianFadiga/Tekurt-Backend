import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class PostModel {
    constructor(private database: DatabaseService) {}
};