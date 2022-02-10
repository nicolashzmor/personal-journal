import React, {PropsWithChildren} from 'react';
import {JournalTask} from "../../../models/tasks.models";
import {Button, Card, CardContent, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider, TimePicker} from '@mui/lab'
import AdapterDayFns from '@mui/lab/AdapterDateFns'

import {Form} from "@remix-run/react";
import Box from "@mui/material/Box";

const TaskForm: React.VoidFunctionComponent<PropsWithChildren<{ task: JournalTask }>> = ({task}) => {
    const [date, setDate] = React.useState<Date | string>('');

    const handleDateChange = (date: string | null) => {
        if (!date) return;
        setDate(new Date(date))
    }

    return (
        <Card>
            <CardContent>
                <Form method='post'>
                    <LocalizationProvider dateAdapter={AdapterDayFns}>
                        <Stack spacing={3}>
                            <TextField
                                label="Title"
                                name='title'
                                sx={{width: '100%'}}
                                required
                                value={task.title}
                            />
                            <TextField
                                multiline
                                label='Description'
                                name='description'
                                minRows={4}
                                maxRows={8}
                                value={task.description || ''}
                                sx={{width: '100%'}}
                            />
                            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.5em'}}>
                                <DatePicker
                                    label="Schedule Day"
                                    value={date || ''}
                                    onChange={handleDateChange}
                                    renderInput={({required, ...params}: any) =>
                                        <TextField {...params} name='date'/>}
                                />
                                <TimePicker
                                    label="Schedule Time"
                                    value={date || ''}
                                    ampm={false}
                                    onChange={handleDateChange}
                                    renderInput={({required, ...params}: any) =>
                                        <TextField {...params}/>}
                                />
                            </Box>
                            <Button type='submit' variant="outlined">Submit</Button>
                        </Stack>
                    </LocalizationProvider>

                </Form>
            </CardContent>
        </Card>
    );
};

export default TaskForm;
