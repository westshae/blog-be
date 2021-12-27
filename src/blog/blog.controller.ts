import { Body, Controller, Get, Query } from "@nestjs/common";
import { BlogService } from "./blog.service";
@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}


  @Get("get")
  get(@Query() query){
    const id = query.id;
    try{
      return this.blogService.getPost(id);
    }catch(e){
      console.error(e);
    }
  }

  @Get("list")
  getList(){
    try{
      return this.blogService.getList();
    }catch(e){
      console.error(e);
    }
  }
}