import { useParams } from "@remix-run/react"

export default function DashboardId() {
  const { id } = useParams()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Dashboard Id {id}</h1>
    </div>
  )
}