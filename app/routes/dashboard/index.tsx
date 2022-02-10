import React from 'react';
import ContextsList from "../../features/contexts/contexts-list";
import Box from "@mui/material/Box";
import {Models, Query} from 'appwrite';
import {ActionFunction, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {DashboardLoaderData} from "../../models/dashboard.models";
import {JournalTask} from "../../models/tasks.models";
import TasksCalendar from "../../features/tasks/tasks-calendar/tasks-calendar";
import {journalContextsGenerator, journalTaskGenerator, listOf} from "../../mocks";
import Api from '~/api/connection'
import Contexts from '~/api/contexts.service'
import Tasks from '~/api/tasks.service';

export const meta: MetaFunction = () => {
    return {
        title: 'Personal Journal | Dashboard'
    }
}

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData()
    return null;
}

export const loader: LoaderFunction = async () => {
    const api = Api.connect()
    const contextService = Contexts(api)
    const tasksService = Tasks(api)
    const contexts = await contextService.getAll()
    const tasks = await tasksService.getAll()
    
    return {contexts, tasks};
}

const DashboardIndex = () => {
    const {contexts, tasks} = useLoaderData<DashboardLoaderData>()

    const onTaskCompleted = ($id: string, checked: boolean) => console.log($id, checked)

    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '3fr 2fr'}}>
            <TasksCalendar tasks={tasks} handleTaskCompletion={onTaskCompleted}/>
            <ContextsList contexts={contexts}/>
        </Box>
    );
};

export default DashboardIndex;
