import { TasksStatus } from '../tasks.entity';
import { IsNotEmpty, IsOptional, IsString, MinLength, IsIn } from 'class-validator';
export class CreateTasksDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTasksDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TasksStatus.DONE, TasksStatus.IN_PROCESS, TasksStatus.PENDING])
    status?: TasksStatus;
}