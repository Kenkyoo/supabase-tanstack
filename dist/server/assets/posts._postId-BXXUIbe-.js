import { jsxs, jsx } from "react/jsx-runtime";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import { a as Route } from "./router-CLW_eow8.js";
import "@tanstack/react-router";
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
import "react";
import "@mui/material/Box";
import "@mui/material/Divider";
import "@mui/material/IconButton";
import "@mui/material/Link";
import "@mui/material/Stack";
import "@mui/icons-material/GitHub";
import "@mui/icons-material/LinkedIn";
import "@mui/icons-material/X";
import "@mui/material/styles";
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
function PostComponent() {
  const post = Route.useLoaderData();
  return /* @__PURE__ */ jsxs(Container, { maxWidth: "sm", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardMedia, { component: "img", alt: "green iguana", image: post.image }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: post.name }),
        /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: {
          color: "text.secondary"
        }, children: post.location.name })
      ] }),
      /* @__PURE__ */ jsxs(CardActions, { children: [
        /* @__PURE__ */ jsx(Chip, { label: post.species, color: "primary" }),
        /* @__PURE__ */ jsx(Chip, { label: post.status, color: "success" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Accordion, { children: [
      /* @__PURE__ */ jsx(AccordionSummary, { expandIcon: /* @__PURE__ */ jsx(ExpandMoreIcon, {}), "aria-controls": "panel1-content", id: "panel1-header", children: /* @__PURE__ */ jsx(Typography, { component: "span", children: "Episodes" }) }),
      /* @__PURE__ */ jsx(AccordionDetails, { children: /* @__PURE__ */ jsx(List, { children: post.episode.map((episode) => /* @__PURE__ */ jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsx(ListItemButton, { children: /* @__PURE__ */ jsx(ListItemText, { primary: episode }) }) }, episode)) }) })
    ] })
  ] });
}
export {
  PostComponent as component
};
