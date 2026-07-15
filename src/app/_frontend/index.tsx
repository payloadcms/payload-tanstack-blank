import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_frontend/')({
  component: HomePage,
  head: () => ({
    meta: [{ title: 'Payload Website Template' }],
  }),
})

function HomePage() {
  return <article className="pt-16 pb-24">Hello, world!</article>
}
