import {JournalContext} from "../../models/context.models";
import {VoidFunctionComponent} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import {NavigateNext} from "@mui/icons-material";
import {Link} from "@remix-run/react";

export interface ContextsListProps {
    contexts: JournalContext[]
}

export const ContextsList: VoidFunctionComponent<ContextsListProps> = ({contexts}) => {
    return (
        <Box>
            <Typography variant='h2'>Contexts</Typography>
            <List>
                {contexts.map(context =>
                    <ListItem
                        key={context.$id}
                        secondaryAction={
                            <Link to={['/context', context.$id].join('/')}>
                                <IconButton edge="end" aria-label="delete">
                                    <NavigateNext/>
                                </IconButton>
                            </Link>
                        }
                    >
                        <ListItemText
                            primary={context.name}
                            secondary={`Tasks: ${context.tasks_q}`}
                        />
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default ContextsList;