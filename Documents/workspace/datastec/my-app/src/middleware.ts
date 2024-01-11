export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/:account*,/:image*,/:info*,/:payments*,/:proxy*,/:storage*,/:vm*",
  ],
};
