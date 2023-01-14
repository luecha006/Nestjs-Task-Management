import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Param } from '@nestjs/common/decorators';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTaskd();
  }

  //http:/localhost:3000/api/task/sd1sa2d1
  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
