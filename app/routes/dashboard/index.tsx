import React from 'react';
import ContextsList from "../../features/contexts/contexts-list";
import Box from "@mui/material/Box";
import {LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {JournalContext} from "../../models/context.models";
import {DashboardLoaderData} from "../../models/dashboard.models";
import {JournalTask} from "../../models/tasks.models";
import TasksCalendar from "../../features/tasks/tasks-calendar/tasks-calendar";
import {journalContextsGenerator, journalTaskGenerator, listOf} from "../../mocks";

export const meta: MetaFunction = () => {
    return {
        title: 'Personal Journal | Dashboard'
    }
}

export const loader: LoaderFunction = async () => {
    const randomTaskLengthContextGenerator = () => journalContextsGenerator(Math.ceil(Math.random() * 10))
    const contexts = listOf<JournalContext>(randomTaskLengthContextGenerator, 4)
    const tasks = listOf<JournalTask>(journalTaskGenerator, 5)
    return {contexts, tasks};
}

const DashboardIndex = () => {
    const {contexts, tasks} = useLoaderData<DashboardLoaderData>()
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <ContextsList contexts={contexts}/>
            <TasksCalendar tasks={tasks}/>
        </Box>
    );
};

export default DashboardIndex;
