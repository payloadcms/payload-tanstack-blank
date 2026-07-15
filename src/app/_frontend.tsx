import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_frontend')({
  component: FrontendLayout,
})

function FrontendLayout() {
  return (
    <div data-frontend="" className="font-sans">
      <Outlet />
    </div>
  )
}
