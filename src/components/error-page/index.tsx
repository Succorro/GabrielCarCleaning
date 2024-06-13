import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../ui/button'

export default function ErrorPage() {
  const error = useRouteError() as any

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
      <h1 className='text-3xl font-bold'>Something Went Wrong</h1>
      <p className="font-mono text-teal-800 font-bold">
        <span className="mr-2 ">{error?.status}</span>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Button asChild>
        <Link to="/">backtohomepage</Link>
      </Button>
    </div>
  )
}
