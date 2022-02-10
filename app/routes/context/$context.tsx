import {JournalContextDetail} from "../../models/context.models";
import {useLoaderData} from "remix";
import Box from "@mui/material/Box";

import ContextDetail from '~/features/contexts/context-detail'
import {Paper} from "@mui/material";
import {journalContextDetailsGenerator} from "../../mocks";

export const loader = async () => {
    return journalContextDetailsGenerator(5);
}

export default function Context() {
    const context = useLoaderData<JournalContextDetail>()

    return <>
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <ContextDetail context={context}/>
            <Paper sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1em'}}>No Task
                Selected</Paper>
        </Box>
    </>
}