import { jsx } from "react/jsx-runtime";
import { L as Login } from "./Login-BFT9KHqq.js";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "@tanstack/react-router";
import "./Auth-DnuZMw72.js";
import "react";
import "@mui/material/Card";
import "@mui/material/Typography";
import "./router-CLW_eow8.js";
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
import "@mui/material/Box";
import "@mui/material/Container";
import "@mui/material/Divider";
import "@mui/material/IconButton";
import "@mui/material/Link";
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
import "@mui/material/TextField";
const SignInContainer = styled(Stack)(({
  theme
}) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4)
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage: "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage: "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))"
    })
  }
}));
function LoginComp() {
  return /* @__PURE__ */ jsx(SignInContainer, { direction: "column", justifyContent: "space-between", children: /* @__PURE__ */ jsx(Login, {}) });
}
export {
  LoginComp as component
};
