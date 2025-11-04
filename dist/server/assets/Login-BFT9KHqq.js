import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRouter } from "@tanstack/react-router";
import { u as useMutation, a as useServerFn, A as Auth } from "./Auth-DnuZMw72.js";
import { l as loginFn, s as signupFn } from "./router-CLW_eow8.js";
import Button from "@mui/material/Button";
function Login() {
  const router = useRouter();
  const loginMutation = useMutation({
    fn: loginFn,
    onSuccess: async (ctx) => {
      if (!ctx.data?.error) {
        await router.invalidate();
        router.navigate({ to: "/" });
        return;
      }
    }
  });
  const signupMutation = useMutation({
    fn: useServerFn(signupFn)
  });
  return /* @__PURE__ */ jsx(
    Auth,
    {
      actionText: "Login",
      status: loginMutation.status,
      onSubmit: (e) => {
        const formData = new FormData(e.target);
        loginMutation.mutate({
          data: {
            email: formData.get("email"),
            password: formData.get("password")
          }
        });
      },
      afterSubmit: loginMutation.data ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "text-red-400", children: loginMutation.data.message }),
        loginMutation.data.error && loginMutation.data.message === "Invalid login credentials" ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Button,
          {
            fullWidth: true,
            variant: "contained",
            onClick: (e) => {
              const formData = new FormData(
                e.target.form
              );
              signupMutation.mutate({
                data: {
                  email: formData.get("email"),
                  password: formData.get("password")
                }
              });
            },
            type: "button",
            children: "Sign up instead?"
          }
        ) }) : null
      ] }) : null
    }
  );
}
export {
  Login as L
};
