import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogEntity } from "./blog.entity";
import { Repository } from "typeorm";

@Injectable()
export class BlogService{
  @InjectRepository(BlogEntity)
  private readonly authRepo: Repository<BlogEntity>;

  getPost(id:number){
    return id;
  }

  getList(amount:number){
    return amount;
  }
}