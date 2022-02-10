import {VoidFunctionComponent} from "react";
import {JournalContextDetail} from "../../models/context.models";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import {Link} from "@remix-run/react";
import IconButton from "@mui/material/IconButton";
import {NavigateNext} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

const ContextDetail: VoidFunctionComponent<{ context: JournalContextDetail }> = ({context}) => {
    return (
        <Box>
            <Typography variant='h2'>{context.name}</Typography>
            <List>
                {context.tasks.map(task =>
                    <ListItem
                        key={task.$id}
                        secondaryAction={
                            <Link to={['/context', context.$id, 'task', task.$id].join('/')}>
                                <IconButton edge="end" aria-label="delete">
                                    <NavigateNext/>
                                </IconButton>
                            </Link>
                        }
                    >
                        <ListItemText primary={task.title}/>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default ContextDetail;