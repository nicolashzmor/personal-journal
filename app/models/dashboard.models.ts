import {JournalContext} from "./context.models";
import {JournalTask} from "./tasks.models";

export interface DashboardLoaderData {
    contexts: JournalContext[]
    tasks: JournalTask[]
}