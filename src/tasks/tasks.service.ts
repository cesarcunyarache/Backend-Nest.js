import { Injectable } from '@nestjs/common';
import {Tasks, TasksStatus} from './tasks.entity';
import {v4} from 'uuid';
import { UpdateTasksDTO } from './dto/tasks.dto';
@Injectable()
export class TasksService {

    private tasks: Tasks[] = [{
        id: '1',
        title: 'first task',
        description: 'some task',
        status: TasksStatus.PENDING
    }];

    getAllTasks() {
        return this.tasks;
    }
    createTasks(title: string, description: string) { 
        const tasks = {
            id: v4(),
            title,
            description,
           status: TasksStatus.PENDING
        };
        this.tasks.push(tasks);
        return tasks;
        
    }

    deleteTasks(id: string) { 
        this.tasks = this.tasks.filter(tasks => tasks.id !== id);
    }

    getTasks(id: string): Tasks {
        return this.tasks.find((task) => task.id === id);
    }

    updateTasks(id: string, updateFields: UpdateTasksDTO) : Tasks {
        const task = this.getTasks(id); 
        const newTasks = Object.assign(task, updateFields);
        this.tasks =  this.tasks.map((task) => (task.id===id ? newTasks : task));
        return newTasks;
    }
}
