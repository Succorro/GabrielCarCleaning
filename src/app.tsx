import React, { useMemo, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import './app.css'
const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
)

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  const [showDevtools, setShowDevtools] = useState(false)
  useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old)
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createRouter()} />
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  )
}
