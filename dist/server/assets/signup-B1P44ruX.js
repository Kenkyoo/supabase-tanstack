import { jsx, Fragment } from "react/jsx-runtime";
import { u as useMutation, a as useServerFn, A as Auth } from "./Auth-DnuZMw72.js";
import { s as signupFn } from "./router-CLW_eow8.js";
import "react";
import "@tanstack/react-router";
import "@mui/material/styles";
import "@mui/material/Card";
import "@mui/material/Typography";
import "@mui/material/Box";
import "@mui/material/Button";
import "@mui/material/FormLabel";
import "@mui/material/FormControl";
import "@mui/material/TextField";
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
import "@mui/material/MenuItem";
import "@mui/material/Drawer";
import "@mui/icons-material/Menu";
import "@mui/icons-material/CloseRounded";
import "@mui/material/RadioGroup";
import "@mui/material/Radio";
import "@mui/material/FormControlLabel";
import "@mui/material/Menu";
import "@mui/icons-material/DarkMode";
import "@mui/material/SvgIcon";
import "redaxios";
function SignupComp() {
  const signupMutation = useMutation({
    fn: useServerFn(signupFn)
  });
  return /* @__PURE__ */ jsx(Auth, { actionText: "Sign Up", status: signupMutation.status, onSubmit: (e) => {
    const formData = new FormData(e.target);
    signupMutation.mutate({
      data: {
        email: formData.get("email"),
        password: formData.get("password")
      }
    });
  }, afterSubmit: signupMutation.data?.error ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "text-red-400", children: signupMutation.data.message }) }) : null });
}
export {
  SignupComp as component
};
