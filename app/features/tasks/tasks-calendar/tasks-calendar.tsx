import React, {PropsWithChildren, VoidFunctionComponent} from 'react';
import styled from 'styled-components';
import {JournalTask} from "../../../models/tasks.models";
import {Checkbox, Stack} from "@mui/material";
import ListItem, {ListItemProps} from '@mui/material/ListItem';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";


const TaskListItem: VoidFunctionComponent<PropsWithChildren<ListItemProps & { checked?: boolean }>> = ListItem

const StyledTasksListItem = styled(TaskListItem)`
  background-color: ${(props: any) => props.checked ? '#ededed' : 'transparent'};
  text-decoration: ${(props: any) => props.checked ? 'line-through' : 'none'};
`

interface TasksCalendarProps {
    tasks: JournalTask[],
    handleTaskCompletion: (task_id: string, completed: any) => void
}

const TasksCalendar: VoidFunctionComponent<PropsWithChildren<TasksCalendarProps>> = ({tasks, handleTaskCompletion}) => {
    return (
        <Stack>
            <Typography variant='h2'>Today's Tasks</Typography>
            <List>
                {tasks.map((task) =>
                    <StyledTasksListItem
                        checked={task.completed}
                        key={task.$id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={(event) => handleTaskCompletion(task.$id, event.target.checked)}
                                checked={task.completed}
                                inputProps={{'aria-labelledby': task.title}}
                            />
                        }
                    >{task.title}</StyledTasksListItem>
                )}
            </List>
        </Stack>
    );
};

export default TasksCalendar;
