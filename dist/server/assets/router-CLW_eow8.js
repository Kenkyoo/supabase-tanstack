import { useRouter, useMatch, rootRouteId, ErrorComponent, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, notFound, createRouter } from "@tanstack/react-router";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { g as getSupabaseServerClient } from "./supabase-B58YyUwE.js";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link$1 from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { useColorScheme, styled, alpha, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Menu from "@mui/material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SvgIcon from "@mui/material/SvgIcon";
import axios from "redaxios";
const createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error(error);
  return /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsx(ErrorComponent, { error }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
          },
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Home"
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          onClick: (e) => {
            e.preventDefault();
            window.history.back();
          },
          children: "Go Back"
        }
      )
    ] })
  ] });
}
function NotFound({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-gray-600 dark:text-gray-400", children: children || /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." }) }),
    /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.history.back(),
          className: "bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Go back"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Start Over"
        }
      )
    ] })
  ] });
}
const appCss = "/assets/app-D219LoN-.css";
const seo = ({
  title,
  description,
  keywords,
  image
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@tannerlinsley" },
    { name: "twitter:site", content: "@tannerlinsley" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...image ? [
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:image", content: image }
    ] : []
  ];
  return tags;
};
function Copyright() {
  return /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { color: "text.secondary", mt: 1 }, children: [
    "Copyright © ",
    /* @__PURE__ */ jsx(Link$1, { color: "text.secondary", href: "https://mui.com/", children: "Sitemark" }),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear()
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(
      Container,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" }
        },
        children: /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Link$1, { color: "text.secondary", variant: "body2", href: "#", children: "Privacy Policy" }),
                /* @__PURE__ */ jsx(Typography, { sx: { display: "inline", mx: 0.5, opacity: 0.5 }, children: " • " }),
                /* @__PURE__ */ jsx(Link$1, { color: "text.secondary", variant: "body2", href: "#", children: "Terms of Service" }),
                /* @__PURE__ */ jsx(Copyright, {})
              ] }),
              /* @__PURE__ */ jsxs(
                Stack,
                {
                  direction: "row",
                  spacing: 1,
                  useFlexGap: true,
                  sx: { justifyContent: "left", color: "text.secondary" },
                  children: [
                    /* @__PURE__ */ jsx(
                      IconButton,
                      {
                        color: "inherit",
                        size: "small",
                        href: "https://github.com/mui",
                        "aria-label": "GitHub",
                        sx: { alignSelf: "center" },
                        children: /* @__PURE__ */ jsx(GitHubIcon, {})
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      IconButton,
                      {
                        color: "inherit",
                        size: "small",
                        href: "https://x.com/MaterialUI",
                        "aria-label": "X",
                        sx: { alignSelf: "center" },
                        children: /* @__PURE__ */ jsx(TwitterIcon, {})
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      IconButton,
                      {
                        color: "inherit",
                        size: "small",
                        href: "https://www.linkedin.com/company/mui/",
                        "aria-label": "LinkedIn",
                        sx: { alignSelf: "center" },
                        children: /* @__PURE__ */ jsx(LinkedInIcon, {})
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function ToggleMode() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        id: "basic-button",
        "aria-controls": open ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: handleClick,
        children: /* @__PURE__ */ jsx(DarkModeIcon, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Menu,
      {
        id: "basic-menu",
        anchorEl,
        open,
        onClose: handleClose,
        slotProps: {
          list: {
            "aria-labelledby": "basic-button"
          }
        },
        children: /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
              minHeight: "56px"
            },
            children: /* @__PURE__ */ jsxs(FormControl, { children: [
              /* @__PURE__ */ jsx(FormLabel, { id: "demo-theme-toggle", children: "Theme" }),
              /* @__PURE__ */ jsxs(
                RadioGroup,
                {
                  "aria-labelledby": "demo-theme-toggle",
                  name: "theme-toggle",
                  row: true,
                  value: mode,
                  onChange: (event) => setMode(event.target.value),
                  children: [
                    /* @__PURE__ */ jsx(
                      FormControlLabel,
                      {
                        value: "system",
                        control: /* @__PURE__ */ jsx(Radio, {}),
                        label: "System"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      FormControlLabel,
                      {
                        value: "light",
                        control: /* @__PURE__ */ jsx(Radio, {}),
                        label: "Light"
                      }
                    ),
                    /* @__PURE__ */ jsx(FormControlLabel, { value: "dark", control: /* @__PURE__ */ jsx(Radio, {}), label: "Dark" })
                  ]
                }
              )
            ] })
          }
        )
      }
    )
  ] });
}
function SitemarkIcon() {
  return /* @__PURE__ */ jsx(SvgIcon, { sx: { height: 21, width: 100, mr: 2 }, children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width: 86,
      height: 19,
      viewBox: "0 0 86 19",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#B4C0D3",
            d: "m.787 12.567 6.055-2.675 3.485 2.006.704 6.583-4.295-.035.634-4.577-.74-.422-3.625 2.817-2.218-3.697Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#00D3AB",
            d: "m10.714 11.616 5.352 3.908 2.112-3.767-4.295-1.725v-.845l4.295-1.76-2.112-3.732-5.352 3.908v4.013Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4876EF",
            d: "m10.327 7.286.704-6.583-4.295.07.634 4.577-.74.422-3.66-2.816L.786 6.617l6.055 2.676 3.485-2.007Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4876EE",
            d: "M32.507 8.804v6.167h2.312v-7.86h-3.366v1.693h1.054ZM32.435 6.006c.212.22.535.33.968.33.434 0 .751-.11.953-.33.213-.23.318-.516.318-.86 0-.354-.105-.641-.318-.86-.202-.23-.52-.345-.953-.345-.433 0-.756.115-.968.344-.202.22-.303.507-.303.86 0 .345.101.632.303.861ZM24.46 14.799c.655.296 1.46.444 2.413.444.896 0 1.667-.139 2.312-.416.645-.277 1.141-.664 1.488-1.162.357-.506.535-1.094.535-1.764 0-.65-.169-1.2-.506-1.649-.328-.459-.785-.818-1.373-1.076-.587-.267-1.266-.435-2.037-.502l-.809-.071c-.481-.039-.828-.168-1.04-.388a1.08 1.08 0 0 1-.318-.774c0-.23.058-.44.173-.631.116-.201.29-.359.52-.474.241-.114.535-.172.882-.172.366 0 .67.067.91.201.053.029.104.059.15.09l.012.009.052.037c.146.111.263.243.35.395.125.21.188.444.188.703h2.311c0-.689-.159-1.286-.476-1.793-.318-.516-.776-.913-1.373-1.19-.588-.287-1.296-.43-2.124-.43-.79 0-1.474.133-2.052.4a3.131 3.131 0 0 0-1.358 1.12c-.318.487-.477 1.066-.477 1.735 0 .927.314 1.673.94 2.237.626.564 1.464.89 2.514.976l.794.071c.645.058 1.113.187 1.401.388a.899.899 0 0 1 .434.788 1.181 1.181 0 0 1-.231.717c-.154.201-.38.36-.68.474-.298.115-.669.172-1.112.172-.49 0-.89-.067-1.199-.2-.308-.144-.539-.33-.694-.56a1.375 1.375 0 0 1-.216-.746h-2.297c0 .679.168 1.281.505 1.807.337.517.834.928 1.489 1.234ZM39.977 15.07c-.8 0-1.445-.095-1.936-.286a2.03 2.03 0 0 1-1.084-.99c-.221-.469-.332-1.1-.332-1.893V8.789h-1.2V7.11h1.2V4.988h2.153V7.11h2.312V8.79h-2.312v3.198c0 .373.096.66.289.86.202.192.486.287.852.287h1.17v1.937h-1.112Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4876EE",
            fillRule: "evenodd",
            d: "M43.873 14.899c.52.23 1.117.344 1.791.344.665 0 1.252-.115 1.763-.344.51-.23.934-.55 1.271-.96.337-.412.564-.88.679-1.407h-2.124c-.096.24-.279.44-.549.603-.27.162-.616.244-1.04.244-.262 0-.497-.031-.704-.093a1.572 1.572 0 0 1-.423-.194 1.662 1.662 0 0 1-.636-.803 3.159 3.159 0 0 1-.163-.645h5.784v-.775a4.28 4.28 0 0 0-.463-1.98 3.686 3.686 0 0 0-1.343-1.477c-.578-.382-1.291-.574-2.139-.574-.645 0-1.223.115-1.733.345-.501.22-.92.52-1.257.903a4.178 4.178 0 0 0-.78 1.305c-.174.478-.26.98-.26 1.506v.287c0 .507.086 1.004.26 1.492.183.478.443.913.78 1.305.347.382.775.688 1.286.918Zm-.094-4.674.02-.09a2.507 2.507 0 0 1 .117-.356c.145-.354.356-.622.636-.804.104-.067.217-.123.339-.165.204-.071.433-.107.686-.107.395 0 .723.09.983.272.27.173.472.426.607.76a2.487 2.487 0 0 1 .16.603h-3.57c.006-.038.013-.076.022-.113Z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4876EE",
            d: "M50.476 14.97V7.112h1.835v1.98a4.54 4.54 0 0 1 .173-.603c.202-.536.506-.937.91-1.205.405-.277.9-.416 1.488-.416h.101c.598 0 1.094.139 1.489.416.404.268.707.67.91 1.205l.016.04.013.037.028-.077c.212-.536.52-.937.925-1.205.405-.277.901-.416 1.489-.416h.1c.598 0 1.098.139 1.503.416.414.268.727.67.94 1.205.211.535.317 1.205.317 2.008v4.475h-2.312v-4.604c0-.43-.115-.78-.346-1.047-.222-.268-.54-.402-.954-.402-.414 0-.742.139-.982.416-.241.268-.362.626-.362 1.076v4.56h-2.326v-4.603c0-.43-.115-.78-.346-1.047-.222-.268-.535-.402-.94-.402-.423 0-.756.139-.996.416-.241.268-.362.626-.362 1.076v4.56h-2.311Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4876EE",
            fillRule: "evenodd",
            d: "M68.888 13.456v1.515h1.834v-4.82c0-.726-.144-1.319-.433-1.778-.289-.468-.712-.817-1.271-1.047-.549-.23-1.228-.344-2.037-.344a27.76 27.76 0 0 0-.896.014c-.318.01-.626.024-.924.043l-.229.016a36.79 36.79 0 0 0-.552.042v1.936a81.998 81.998 0 0 1 1.733-.09 37.806 37.806 0 0 1 1.171-.025c.424 0 .732.1.925.301.193.201.289.502.289.904v.029h-1.43c-.704 0-1.325.09-1.864.272-.54.172-.959.445-1.257.818-.299.363-.448.832-.448 1.405 0 .526.12.98.361 1.363.24.373.573.66.997.86.433.201.934.302 1.502.302.55 0 1.012-.1 1.388-.302.385-.2.683-.487.895-.86a2.443 2.443 0 0 0 .228-.498l.018-.056Zm-.39-1.397v-.63h-1.445c-.405 0-.718.1-.939.3-.212.192-.318.455-.318.79 0 .157.026.3.08.429a.99.99 0 0 0 .238.345c.221.191.534.287.939.287a2.125 2.125 0 0 0 .394-.038c.106-.021.206-.052.3-.092.212-.095.385-.253.52-.473.135-.22.212-.526.23-.918Z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4876EE",
            d: "M72.106 14.97V7.11h1.835v2.595c.088-.74.31-1.338.665-1.791.481-.603 1.174-.904 2.08-.904h.303v1.98h-.578c-.635 0-1.127.172-1.473.516-.347.334-.52.822-.52 1.463v4.001h-2.312ZM79.92 11.298h.767l2.499 3.672h2.6l-3.169-4.51 2.606-3.35h-2.427l-2.875 3.737V4.5h-2.312v10.47h2.312v-3.672Z"
          }
        )
      ]
    }
  ) });
}
const StyledToolbar = styled(Toolbar)(({ theme: theme2 }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme2.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme2.vars || theme2).palette.divider,
  backgroundColor: theme2.vars ? `rgba(${theme2.vars.palette.background.defaultChannel} / 0.4)` : alpha(theme2.palette.background.default, 0.4),
  boxShadow: (theme2.vars || theme2).shadows[1],
  padding: "8px 12px"
}));
function AppAppBar() {
  const { user } = Route$7.useRouteContext();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return /* @__PURE__ */ jsx(
    AppBar,
    {
      position: "fixed",
      enableColorOnDark: true,
      sx: {
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)"
      },
      children: /* @__PURE__ */ jsx(Container, { maxWidth: "lg", children: /* @__PURE__ */ jsxs(StyledToolbar, { variant: "dense", disableGutters: true, children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: { flexGrow: 1, display: "flex", alignItems: "center", px: 0 },
            children: [
              /* @__PURE__ */ jsx(SitemarkIcon, {}),
              /* @__PURE__ */ jsxs(Box, { sx: { display: { xs: "none", md: "flex" } }, children: [
                /* @__PURE__ */ jsx(Button, { variant: "text", color: "info", size: "small", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/",
                    activeProps: {
                      className: "font-bold"
                    },
                    activeOptions: { exact: true },
                    children: "Home"
                  }
                ) }),
                /* @__PURE__ */ jsx(Button, { variant: "text", color: "info", size: "small", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/posts",
                    activeProps: {
                      className: "font-bold"
                    },
                    children: "Posts"
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx("div", { children: user ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(Typography, { variant: "h6", color: "white", gutterBottom: true, children: user.email }),
                /* @__PURE__ */ jsx(Button, { color: "primary", variant: "contained", size: "small", children: /* @__PURE__ */ jsx(Link, { to: "/logout", children: "Logout" }) })
              ] }) : /* @__PURE__ */ jsx(Button, { color: "primary", variant: "text", size: "small", children: /* @__PURE__ */ jsx(Link, { to: "/login", children: "Login" }) }) }),
              /* @__PURE__ */ jsx(ToggleMode, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Box, { sx: { display: { xs: "flex", md: "none" }, gap: 1 }, children: [
          /* @__PURE__ */ jsx(ToggleMode, {}),
          /* @__PURE__ */ jsx(IconButton, { "aria-label": "Menu button", onClick: toggleDrawer(true), children: /* @__PURE__ */ jsx(MenuIcon, {}) }),
          /* @__PURE__ */ jsx(
            Drawer,
            {
              anchor: "top",
              open,
              onClose: toggleDrawer(false),
              PaperProps: {
                sx: {
                  top: "var(--template-frame-height, 0px)"
                }
              },
              children: /* @__PURE__ */ jsxs(Box, { sx: { p: 2, backgroundColor: "background.default" }, children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "flex-end"
                    },
                    children: /* @__PURE__ */ jsx(IconButton, { onClick: toggleDrawer(false), children: /* @__PURE__ */ jsx(CloseRoundedIcon, {}) })
                  }
                ),
                /* @__PURE__ */ jsxs(MenuItem, { children: [
                  " ",
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/",
                      activeProps: {
                        className: "font-bold"
                      },
                      activeOptions: { exact: true },
                      children: "Home"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(MenuItem, { children: [
                  " ",
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/posts",
                      activeProps: {
                        className: "font-bold"
                      },
                      children: "Posts"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(Divider, { sx: { my: 3 } }),
                /* @__PURE__ */ jsx("div", { children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2", children: user.email }),
                  /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      color: "primary",
                      variant: "contained",
                      size: "small",
                      children: /* @__PURE__ */ jsx(Link, { to: "/logout", children: "Logout" })
                    }
                  ) })
                ] }) : /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx(Button, { color: "primary", variant: "text", size: "small", children: /* @__PURE__ */ jsx(Link, { to: "/login", children: "Login" }) }) }) })
              ] })
            }
          )
        ] })
      ] }) })
    }
  );
}
const theme = createTheme({
  colorSchemes: {
    dark: true
  }
});
const fetchUser_createServerFn_handler = createSsrRpc("1f41845ac3b65a581f73e88792eadc03859ad057285ba3f3d7dbd968fe09c1e3");
const fetchUser = createServerFn({
  method: "GET"
}).handler(fetchUser_createServerFn_handler, async () => {
  const supabase = getSupabaseServerClient();
  const {
    data,
    error: _error
  } = await supabase.auth.getUser();
  if (!data.user?.email) {
    return null;
  }
  return {
    email: data.user.email
  };
});
const Route$7 = createRootRoute({
  beforeLoad: async () => {
    const user = await fetchUser();
    return {
      user
    };
  },
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, ...seo({
      title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
      description: `TanStack Start is a type-safe, client-first, full-stack React framework. `
    })],
    links: [{
      rel: "stylesheet",
      href: appCss
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }, {
      rel: "manifest",
      href: "/site.webmanifest",
      color: "#fffff"
    }, {
      rel: "icon",
      href: "/favicon.ico"
    }]
  }),
  errorComponent: (props) => {
    return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(DefaultCatchBoundary, { ...props }) });
  },
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
      /* @__PURE__ */ jsx(CssBaseline, {}),
      /* @__PURE__ */ jsx(AppAppBar, {}),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(Container, { maxWidth: "lg", component: "main", sx: {
        display: "flex",
        flexDirection: "column",
        my: 16,
        gap: 4
      }, children }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] }) })
  ] });
}
const $$splitComponentImporter$4 = () => import("./signup-B1P44ruX.js");
const signupFn_createServerFn_handler = createSsrRpc("391e4fddd1127ccfb7d0d44594936a2e78a25b0239ffeab18aa9ec261f329199");
const signupFn = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(signupFn_createServerFn_handler, async ({
  data
}) => {
  const supabase = getSupabaseServerClient();
  const {
    error
  } = await supabase.auth.signUp({
    email: data.email,
    password: data.password
  });
  if (error) {
    return {
      error: true,
      message: error.message
    };
  }
  throw redirect({
    href: data.redirectUrl || "/"
  });
});
const Route$6 = createFileRoute("/signup")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const logoutFn_createServerFn_handler = createSsrRpc("566828ec21d0ccdce1df662ede59410e979248719d530394b6aca7f837fe7339");
const logoutFn = createServerFn().handler(logoutFn_createServerFn_handler, async () => {
  const supabase = getSupabaseServerClient();
  const {
    error
  } = await supabase.auth.signOut();
  if (error) {
    return {
      error: true,
      message: error.message
    };
  }
  throw redirect({
    href: "/"
  });
});
const Route$5 = createFileRoute("/logout")({
  preload: false,
  loader: () => logoutFn()
});
const $$splitComponentImporter$3 = () => import("./login-R49rqCnu.js");
const Route$4 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitErrorComponentImporter = () => import("./_authed-0-X3F2VP.js");
const loginFn_createServerFn_handler = createSsrRpc("c734b57656130e92f97e5895851097dba28c0c97bd955c5a94d61db533974b39");
const loginFn = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(loginFn_createServerFn_handler, async ({
  data
}) => {
  const supabase = getSupabaseServerClient();
  const {
    error
  } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password
  });
  if (error) {
    return {
      error: true,
      message: error.message
    };
  }
});
const Route$3 = createFileRoute("/_authed")({
  beforeLoad: ({
    context
  }) => {
    if (!context.user) {
      throw new Error("Not authenticated");
    }
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
const $$splitComponentImporter$2 = () => import("./index-PBkZ7dCY.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const fetchPost_createServerFn_handler = createSsrRpc("fcc606bc6a4391068ed708ee59e18e7e8c5685d0fa5f2f3f35a0d234c04f679f");
const fetchPost = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(fetchPost_createServerFn_handler, async ({
  data: postId
}) => {
  console.info(`Fetching post with id ${postId}...`);
  const post = await axios.get(`https://rickandmortyapi.com/api/character/${postId}`).then((r) => r.data).catch((err) => {
    console.error(err);
    if (err.status === 404) {
      throw notFound();
    }
    throw err;
  });
  return post;
});
const fetchPosts_createServerFn_handler = createSsrRpc("9d2d75863ee5cc1769ed0162f4537aed3a4f16255a893cf6e946a857810a32df");
const fetchPosts = createServerFn({
  method: "GET"
}).handler(fetchPosts_createServerFn_handler, async () => {
  console.info("Fetching posts...");
  await new Promise((r) => setTimeout(r, 1e3));
  return axios.get("https://rickandmortyapi.com/api/character").then((r) => r.data.results.slice(0, 19));
});
const $$splitComponentImporter$1 = () => import("./posts-B2-BjLNb.js");
const Route$1 = createFileRoute("/_authed/posts")({
  loader: async () => {
    return fetchPosts();
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./posts._postId-BqyznWtZ.js");
const $$splitComponentImporter = () => import("./posts._postId-BXXUIbe-.js");
const Route = createFileRoute("/_authed/posts/$postId")({
  loader: ({
    params: {
      postId
    }
  }) => fetchPost({
    data: postId
  }),
  errorComponent: PostErrorComponent,
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
function PostErrorComponent({
  error
}) {
  return /* @__PURE__ */ jsx(ErrorComponent, { error });
}
const SignupRoute = Route$6.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$7
});
const LogoutRoute = Route$5.update({
  id: "/logout",
  path: "/logout",
  getParentRoute: () => Route$7
});
const LoginRoute = Route$4.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$7
});
const AuthedRoute = Route$3.update({
  id: "/_authed",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const AuthedPostsRoute = Route$1.update({
  id: "/posts",
  path: "/posts",
  getParentRoute: () => AuthedRoute
});
const AuthedPostsPostIdRoute = Route.update({
  id: "/$postId",
  path: "/$postId",
  getParentRoute: () => AuthedPostsRoute
});
const AuthedPostsRouteChildren = {
  AuthedPostsPostIdRoute
};
const AuthedPostsRouteWithChildren = AuthedPostsRoute._addFileChildren(
  AuthedPostsRouteChildren
);
const AuthedRouteChildren = {
  AuthedPostsRoute: AuthedPostsRouteWithChildren
};
const AuthedRouteWithChildren = AuthedRoute._addFileChildren(AuthedRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  LoginRoute,
  LogoutRoute,
  SignupRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  NotFound as N,
  Route$1 as R,
  SitemarkIcon as S,
  Route as a,
  loginFn as l,
  router as r,
  signupFn as s
};
