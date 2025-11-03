import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import SitemarkIcon from "./SitemarkIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export function Auth({
  actionText,
  onSubmit,
  status,
  afterSubmit,
}: {
  actionText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: "pending" | "idle" | "success" | "error";
  afterSubmit?: React.ReactNode;
}) {
  return (
    <Card variant="outlined">
      <SitemarkIcon />
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        {actionText}
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 5,
        }}
                  onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
      >
          <FormControl>
            <FormLabel htmlFor="email">Username</FormLabel>
            <TextField
              required
              type="email"
              name="email"
              id="email"
              fullWidth
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              required
              fullWidth
              type="password"
              name="password"
              id="password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={status === "pending"}
          >
            {status === "pending" ? "..." : actionText}
          </Button>
          {afterSubmit ? afterSubmit : null}
      </Box>
    </Card>
  );
}
