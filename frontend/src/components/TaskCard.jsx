import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export default function TaskCard() {
  return (
    <>
      <Card>
        <CardHeader
          title="card title"
          subheader="username"
          action={
            <IconButton onClick={() => {}}>
              <DeleteOutlined />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            yor djwewfok efoeiefio qpoifwqfniowefnoewifneiofo fnoiwefwn
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
