// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Masonry from "@mui/lab/Masonry";
import TaskCard from "../components/TaskCard";

import { taskData } from "../data/tasks";

function TaskList() {
  return (
    <Container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
      <Masonry>
        {taskData.map((task) => (
          <Grid key={task._id} size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard task={task} />
          </Grid>
        ))}
      </Masonry>
    </Container>
  );
}

export default TaskList;
