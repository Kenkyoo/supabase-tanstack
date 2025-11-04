import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { Outlet, Link } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import { R as Route } from "./router-CLW_eow8.js";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router-devtools";
import "./supabase-B58YyUwE.js";
import "@supabase/ssr";
import "@mui/material/Container";
import "@mui/material/Divider";
import "@mui/material/IconButton";
import "@mui/material/Link";
import "@mui/material/Stack";
import "@mui/icons-material/GitHub";
import "@mui/icons-material/LinkedIn";
import "@mui/icons-material/X";
import "@mui/material/CssBaseline";
import "@mui/material/AppBar";
import "@mui/material/Toolbar";
import "@mui/material/Button";
import "@mui/material/MenuItem";
import "@mui/material/Drawer";
import "@mui/icons-material/Menu";
import "@mui/icons-material/CloseRounded";
import "@mui/material/RadioGroup";
import "@mui/material/Radio";
import "@mui/material/FormControl";
import "@mui/material/FormControlLabel";
import "@mui/material/FormLabel";
import "@mui/material/Menu";
import "@mui/icons-material/DarkMode";
import "@mui/material/SvgIcon";
import "redaxios";
const StyledCard = styled(Card)(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer"
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px"
  }
}));
const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16
  }
});
const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis"
});
function PostsComponent() {
  const results = Route.useLoaderData();
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };
  return /* @__PURE__ */ jsxs(Box, { sx: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h1", gutterBottom: true, children: "Rick and Morty" }),
      /* @__PURE__ */ jsx(Typography, { children: "Stay in the loop with the latest characters" })
    ] }),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, columns: 12, children: results.map((result, index) => /* @__PURE__ */ jsx(Grid, { size: {
      xs: 12,
      md: 3
    }, children: /* @__PURE__ */ jsx(Link, { to: "/posts/$postId", params: {
      postId: String(result.id)
    }, activeProps: {
      className: "text-black font-bold"
    }, children: /* @__PURE__ */ jsxs(StyledCard, { variant: "outlined", onFocus: () => handleFocus(index), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === index ? "Mui-focused" : "", children: [
      /* @__PURE__ */ jsx(CardMedia, { component: "img", alt: result.name, image: result.image, sx: {
        aspectRatio: "16 / 9",
        borderBottom: "1px solid",
        borderColor: "divider"
      } }),
      /* @__PURE__ */ jsxs(StyledCardContent, { children: [
        /* @__PURE__ */ jsx("div", { className: "mt-2 mx-4", children: /* @__PURE__ */ jsx(Badge, { badgeContent: result.status, color: "secondary" }) }),
        /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: result.name }),
        /* @__PURE__ */ jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: result.species })
      ] })
    ] }) }) }, result.id)) })
  ] });
}
export {
  PostsComponent as component
};
