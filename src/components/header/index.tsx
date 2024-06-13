import { Menu } from "lucide-react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export function Header() {

  return (
    <div className="fixed -left-1 -top-1 flex w-[101vw] items-center justify-between border bg-teal-800 px-4 py-4 md:px-12">
      <a href="/" className="text-xs md:text-base">
        <img className="w-16" src="/GabrielCarCleaning.png" alt="logo" />
      </a>
      <div className="sm:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton text-white " aria-label="Customise options">
              <Menu />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal className="static justify-center align-center items-center">
            <DropdownMenu.Content className=" absolute -left-[94.5vw] bg-teal-800 w-[100vw] h-[100vh] mt-8 will-change-auto transition-all ease-in-out duration-700">
              <div className="flex flex-col justify-center items-center  text-center align-center pt-10">
                <DropdownMenu.Item className=" text-4xl text-white font-bold py-10">
                  <a href="/">Home</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className=" text-4xl text-white font-bold py-10">
                  <a href="/#services">Services</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className=" text-4xl text-white font-bold py-10">
                  <a href="/#contact">Contact</a>
                </DropdownMenu.Item>

              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      <div className="flex items-center gap-4 text-white font-bold max-sm:hidden">
        <a className={styles.a} href="/">Home</a>
        <a className={styles.a} href="/#services">Services</a>
        <a className={styles.a} href="/#contact">Contact</a>
      </div>
    </div>
  )
}

const styles = {
  a: "hover:underline"
}