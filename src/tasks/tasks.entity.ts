export enum TasksStatus {
    PENDING = 'PENDING',
    IN_PROCESS = 'IN PROGRESS',
    DONE = 'DONE',
}

export class Tasks{ 
    id: string;
    title: string;
    description: string;
    status: TasksStatus;
}