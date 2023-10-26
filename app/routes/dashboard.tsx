import { Outlet } from "@remix-run/react"

export default function Dashboard() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}