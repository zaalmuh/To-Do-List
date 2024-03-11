import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
import { Delete } from '@mui/icons-material';

export default function ToDoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const removeTodo = () => {
    remove(todo.id);
  };
  const toggleTodo = () => {
    toggle(todo.id);
  };
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
          <Delete />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox edge="start" onClick={toggleTodo} checked={todo.completed} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}
