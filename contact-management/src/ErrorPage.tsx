import { useRouteError } from 'react-router-dom'

interface ErrorObject {
  statusText?: string
  message: string
}

function ErrorPage() {
  const error = useRouteError() as ErrorObject

  return (
    <div>
      <p>OH NO</p>
      <code>{error.statusText || error.message}</code>
    </div>
  )
}

export default ErrorPage
