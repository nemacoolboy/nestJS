import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.service";
import { TagEntity } from "./tag.entity";

@Controller()
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get("/api/tags")
  async findAll(): Promise<TagEntity[]> {
    return await this.tagService.findAll();
  }
}
