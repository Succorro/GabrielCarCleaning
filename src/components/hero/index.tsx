import { Rocket, Globe2, Wrench, Zap } from 'lucide-react'
import { Button } from '../ui/button'

export const Hero = () => {

  return (
    <div className="flex min-h-screen bg-white">
      <section className="w-full py-32 md:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mb-24">
                <h1 className="mb-6 text-3xl font-bold tracking-tighter text-teal-800 sm:text-5xl xl:text-6xl/none">
                  hero-title
                </h1>
                <Button className="font-semiboldn gap-3 py-6 text-lg" size={'lg'} asChild>
                  <a href="https://github.com/Quilljou/vite-react-ts-tailwind-starter">
                    <Zap />
                    get-started
                  </a>
                </Button>
              </div>
              <div className="mx-auto w-full max-w-full space-y-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                    <div className="rounded-full bg-black p-4 text-teal-800">
                      <Rocket size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-teal-800">modernstack</h2>
                    <p className="text-teal-800">modernstack-desc</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                    <div className="rounded-full bg-black p-4 text-teal-800">
                      <Globe2 size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-teal-800">i18nsupport</h2>
                    <p className="text-teal-800">i18nsupport-desc</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                    <div className="rounded-full bg-black p-4 text-teal-800">
                      <Wrench size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-teal-800"> linters </h2>
                    <p className="text-teal-800">linters-desc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
