import {JournalTask} from "./tasks.models";

export interface JournalContext {
    $id: string;
    name: string;
    tasks_q: number;
}

export interface JournalContextDetail extends JournalContext {
    tasks: JournalTask[]
}

export interface JournalTaskDetail {
    context: JournalContextDetail
    task: JournalTask
}