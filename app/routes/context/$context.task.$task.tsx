import {VoidFunctionComponent} from "react";
import {JournalTaskDetail} from "~/models/context.models";
import {ActionFunction, useLoaderData, LoaderFunction, redirect} from "remix";
import ContextDetail from "~/features/contexts/context-detail";
import Box from "@mui/material/Box";
import TaskForm from "~/features/tasks/task-form/task-form";
import {journalContextDetailsGenerator, journalTaskGenerator} from "../../mocks";

import Api from '~/api/connection'
import ContextService from '~/api/contexts.service'
import TasksService from '~/api/tasks.service'

export const action: ActionFunction = async ({request}) => {
    const formData: FormData = await request.formData()
    const serialized: { [key: string]: string } = {}
    for (const [key, value] of formData.entries()) {
        serialized[key] = value as string;
    }
    return null
}

export const loader: LoaderFunction = async ({params}) => {
    if(!params.context || !params.task) return redirect('/dashboard')
    const api = Api.connect()
    const context = await ContextService(api).getDetail(params.context)
    const task = await TasksService(api).getTask(params.task)
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