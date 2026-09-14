import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  IconButton,
  Typography,
  Checkbox,
  CardActions,
  Stack,
  Chip,
} from "@mui/material";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";

export default function TaskCard({ task }) {
  const [isDone, setIsDone] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsDone(e.target.checked);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography
            variant="h6"
            style={{
              textDecoration: isDone ? "line-through" : "none",
            }}
          >
            {task.title}
          </Typography>
        }
        subheader={
          <Stack direction="row" spacing={1}>
            {/* {task.categories.map((category, index) => (
              <Chip
                key={index}
                label={category.name}
                style={{ backgroundColor: category.color, color: "#fff" }}
              />
            ))} */}
            {/* <Chip label="work" /> */}
            <Chip label="personel" />
            <Chip label="travel" />
            <Chip label="education" />
          </Stack>
        }
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            textDecoration: isDone ? "line-through" : "none",
          }}
        >
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={isDone}
          onChange={handleCheckboxChange}
          inputProps={{ "aria-label": "done checkbox" }}
        />
        <Typography variant="body2">Done</Typography>
        <IconButton onClick={() => {}} style={{ marginLeft: "auto" }}>
          <EditOutlined />
        </IconButton>
        <IconButton onClick={() => {}}>
          <DeleteOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
}
