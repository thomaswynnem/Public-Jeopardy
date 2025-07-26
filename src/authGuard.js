import { redirect } from "react-router-dom";

export async function authGuard() {
  const token = localStorage.getItem("jwt");
  if (!token) throw redirect("/login");   // forces React‑Router redirect
  return null;
}