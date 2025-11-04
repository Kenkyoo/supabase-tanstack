import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "~/components/NotFound";
import { fetchPost } from "~/utils/posts";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from '@mui/material/Chip';

export const Route = createFileRoute("/_authed/posts/$postId")({
  loader: ({ params: { postId } }) => fetchPost({ data: postId }),
  errorComponent: PostErrorComponent,
  component: PostComponent,
  notFoundComponent: () => {
    return <NotFound>Post not found</NotFound>;
  },
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia component="img" alt="green iguana" image={post.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {post.location.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label={post.species} color="primary" />
          <Chip label={post.status} color="success" />
        </CardActions>
      </Card>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Episodes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {post.episode.map((episode) => (
              <ListItem key={episode} disablePadding>
                <ListItemButton>
                  <ListItemText primary={episode} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
