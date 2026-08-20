import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dropship/ai-agent')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dropship/ai-agent"!</div>
}
