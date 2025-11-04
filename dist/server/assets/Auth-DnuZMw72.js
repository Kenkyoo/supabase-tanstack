import * as React from "react";
import { useRouter, isRedirect } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import Card$1 from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { S as SitemarkIcon } from "./router-CLW_eow8.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
function useServerFn(serverFn) {
  const router = useRouter();
  return React.useCallback(
    async (...args) => {
      try {
        const res = await serverFn(...args);
        if (isRedirect(res)) {
          throw res;
        }
        return res;
      } catch (err) {
        if (isRedirect(err)) {
          err.options._fromLocation = router.state.location;
          return router.navigate(router.resolveRedirect(err).options);
        }
        throw err;
      }
    },
    [router, serverFn]
  );
}
function useMutation(opts) {
  const [submittedAt, setSubmittedAt] = React.useState();
  const [variables, setVariables] = React.useState();
  const [error, setError] = React.useState();
  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState("idle");
  const mutate = React.useCallback(
    async (variables2) => {
      setStatus("pending");
      setSubmittedAt(Date.now());
      setVariables(variables2);
      try {
        const data2 = await opts.fn(variables2);
        await opts.onSuccess?.({ data: data2 });
        setStatus("success");
        setError(void 0);
        setData(data2);
        return data2;
      } catch (err) {
        setStatus("error");
        setError(err);
      }
    },
    [opts.fn]
  );
  return {
    status,
    variables,
    submittedAt,
    mutate,
    error,
    data
  };
}
const Card = styled(Card$1)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px"
  },
  boxShadow: "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow: "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
  })
}));
function Auth({
  actionText,
  onSubmit,
  status,
  afterSubmit
}) {
  return /* @__PURE__ */ jsxs(Card, { variant: "outlined", children: [
    /* @__PURE__ */ jsx(SitemarkIcon, {}),
    /* @__PURE__ */ jsx(
      Typography,
      {
        component: "h1",
        variant: "h4",
        sx: { width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" },
        children: actionText
      }
    ),
    /* @__PURE__ */ jsxs(
      Box,
      {
        component: "form",
        noValidate: true,
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 5
        },
        onSubmit: (e) => {
          e.preventDefault();
          onSubmit(e);
        },
        children: [
          /* @__PURE__ */ jsxs(FormControl, { children: [
            /* @__PURE__ */ jsx(FormLabel, { htmlFor: "email", children: "Username" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                required: true,
                type: "email",
                name: "email",
                id: "email",
                fullWidth: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(FormControl, { children: [
            /* @__PURE__ */ jsx(FormLabel, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                required: true,
                fullWidth: true,
                type: "password",
                name: "password",
                id: "password"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              fullWidth: true,
              variant: "contained",
              disabled: status === "pending",
              children: status === "pending" ? "..." : actionText
            }
          ),
          afterSubmit ? afterSubmit : null
        ]
      }
    )
  ] });
}
export {
  Auth as A,
  useServerFn as a,
  useMutation as u
};
