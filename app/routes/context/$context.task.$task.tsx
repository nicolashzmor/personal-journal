import {VoidFunctionComponent} from "react";
import {JournalTaskDetail} from "~/models/context.models";
import {ActionFunction, useLoaderData} from "remix";
import ContextDetail from "~/features/contexts/context-detail";
import Box from "@mui/material/Box";
import TaskForm from "~/features/tasks/task-form/task-form";
import {journalContextDetailsGenerator, journalTaskGenerator} from "../../mocks";

export const action: ActionFunction = async ({request}) => {
    const formData: FormData = await request.formData()
    const serialized: { [key: string]: string } = {}
    for (const [key, value] of formData.entries()) {
        serialized[key] = value as string;
    }
    return null
}

export const loader = async () => {
    const context = journalContextDetailsGenerator(5)
    const task = journalTaskGenerator()
    return {context, task};
}

const JournalTaskDetailed: VoidFunctionComponent<{}> = () => {
    const {context, task} = useLoaderData<JournalTaskDetail>()
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <ContextDetail context={context}/>
            <TaskForm task={task}/>
        </Box>
    )
}

export default JournalTaskDetailed