import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Masonry from "@mui/lab/Masonry";
import TaskCard from "../components/TaskCard";

function TaskList() {
  return (
    <>
      <Typography variant="h1"> Todos My Boy </Typography>
      <Container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        <Masonry>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 4 }}>
            <TaskCard />
          </Grid>
        </Masonry>
      </Container>
    </>
  );
}

export default TaskList;
