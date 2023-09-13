import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import {TasksService} from './tasks.service';
import {CreateTasksDTO, UpdateTasksDTO} from './dto/tasks.dto'
@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}
    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTasksDTO) {
        return this.taskService.createTasks(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTasks(@Param('id') id: string) {
        this.taskService.deleteTasks(id)
    }

    @Patch(':id')
    updateTasks(@Param('id') id: string, @Body() updateFields: UpdateTasksDTO ){
        return this.taskService.updateTasks(id, updateFields);
    }
}
