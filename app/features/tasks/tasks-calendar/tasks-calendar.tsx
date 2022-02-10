import React, {PropsWithChildren, VoidFunctionComponent} from 'react';
import {JournalTask} from "../../../models/tasks.models";
import {ListItem, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

interface TasksCalendarProps {
    tasks: JournalTask[]
}

const TasksCalendar: VoidFunctionComponent<PropsWithChildren<TasksCalendarProps>> = ({tasks}) => {
    return (
        <Stack>
            <Typography variant='h2'>Today's Tasks</Typography>
            <List>
                {tasks.map((task) => <ListItem key={task.$id}>{task.title}</ListItem>)}
            </List>
        </Stack>
    );
};

export default TasksCalendar;
