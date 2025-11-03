import * as React from "react";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../../utils/posts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Badge from '@mui/material/Badge';

export const Route = createFileRoute("/_authed/posts")({
  loader: () => fetchPosts(),
  component: PostsComponent,
});

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

function PostsComponent() {
  const results = Route.useLoaderData();
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };
  console.log(results);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Rick and Morty
        </Typography>
        <Typography>
          Stay in the loop with the latest characters
        </Typography>
      </div>
      <Grid container spacing={2} columns={12}>
          {[
            ...results,
            { id: "i-do-not-exist", title: "Non-existent Post" },
          ].map((result) => {
            return (
            <Grid key={result.id} size={{ xs: 12, md: 3 }}>
              <Link
                to="/posts/$postId"
                params={{
                  postId: result.id,
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: "text-black font-bold" }}
              >
                <StyledCard
                  variant="outlined"
                  onFocus={() => handleFocus(0)}
                  onBlur={handleBlur}
                  tabIndex={0}
                  className={focusedCardIndex === 0 ? "Mui-focused" : ""}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={result.image}
                    sx={{
                      aspectRatio: "16 / 9",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  />
                  <StyledCardContent>
                    <div className="mt-2 mx-4">
                    <Badge badgeContent={result.status} color="secondary" />
                    </div>
                    <Typography gutterBottom variant="h6" component="div">
                      {result.name}
                    </Typography>
                    <StyledTypography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {result.species}
                    </StyledTypography>
                  </StyledCardContent>
                </StyledCard>
              </Link>
            </Grid>
            );
          })}
      </Grid>
      <Outlet />
    </Box>
  );
}
