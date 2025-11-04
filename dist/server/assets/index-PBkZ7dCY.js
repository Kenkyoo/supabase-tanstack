import { jsx, jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || "https://wallpapers.com/images/high/family-picture-rick-and-morty-pc-4k-yqkkayfih9gxtev2.webp"})`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || "https://wallpapers.com/images/high/family-picture-rick-and-morty-pc-4k-yqkkayfih9gxtev2.webp"})`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700]
  })
}));
function Hero() {
  return /* @__PURE__ */ jsx(
    Box,
    {
      id: "hero",
      sx: (theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"
        })
      }),
      children: /* @__PURE__ */ jsxs(
        Container,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 }
          },
          children: [
            /* @__PURE__ */ jsxs(
              Stack,
              {
                spacing: 2,
                useFlexGap: true,
                sx: { alignItems: "center", width: { xs: "100%", sm: "70%" } },
                children: [
                  /* @__PURE__ */ jsxs(
                    Typography,
                    {
                      variant: "h1",
                      sx: {
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        fontSize: "clamp(3rem, 10vw, 3.5rem)"
                      },
                      children: [
                        "Rick and ",
                        /* @__PURE__ */ jsx(
                          Typography,
                          {
                            component: "span",
                            variant: "h1",
                            sx: (theme) => ({
                              fontSize: "inherit",
                              color: "primary.main",
                              ...theme.applyStyles("dark", {
                                color: "primary.light"
                              })
                            }),
                            children: "Morty"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      sx: {
                        textAlign: "center",
                        color: "text.secondary",
                        width: { sm: "100%", md: "80%" }
                      },
                      children: "Build with tanstack, nextjs, material ui and supabase. Explore our cutting-edge app, delivering high-quality images tailored to your needs."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(StyledBox, { id: "image" })
          ]
        }
      )
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsx(Hero, {});
}
export {
  Home as component
};
