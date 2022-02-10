import {JournalContextDetail} from "../../models/context.models";
import {useLoaderData, LoaderFunction, redirect} from "remix";
import Box from "@mui/material/Box";

import ContextDetail from '~/features/contexts/context-detail'
import {Paper} from "@mui/material";
import {journalContextDetailsGenerator} from "../../mocks";

import Api from '~/api/connection';
import ContextService from '~/api/contexts.service';

export const loader: LoaderFunction = async ({params}) => {
    if(!params.context) return redirect('/dashboard');
    return ContextService(Api.connect()).getDetail(params.context);
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