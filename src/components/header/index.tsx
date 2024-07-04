import {LuX, LuMenu } from 'react-icons/lu'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState } from "react"
import DarkButton from "../ui/DarkButton"

interface HeaderProps {
  setTheme: (theme: boolean) => void;
  theme: boolean;
}
export function Header({setTheme, theme}: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="relative -left-1 flex w-[101vw] h-[14vh] items-center justify-between bg-white text-teal-950 dark:bg-slate-400 dark:text-DTeal px-4 py-4 md:px-12">
      <a href="/" className="text-xs md:text-base">
        <img className="w-16" src="/GCCBg.PNG" alt="logo" />
      </a>
      <div className="sm:hidden">
        <DarkButton setTheme={setTheme} theme={theme}/>
        <DropdownMenu.Root onOpenChange={()=> setOpenMenu(!openMenu)}>
          <DropdownMenu.Trigger asChild>
            <button className="  transition-all duration-700 ease-in-out" aria-label="Customise options">
              {openMenu ? <LuX/>: <LuMenu className='focus:border-none dark:text-white'/>}
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal >
            <div className="static justify-center align-center items-center">
              <DropdownMenu.Content className=" absolute -left-[95vw] bg-white w-[100vw] h-[100vh] mt-8 will-change-auto transition-all ease-in-out duration-700">
                <div className="flex flex-col justify-center items-center text-Teal dark:bg-slate-950 text-center align-center pt-10">
                  <DropdownMenu.Item className=" text-4xl  font-bold py-10">
                    <a href="#">Home</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className=" text-4xl  font-bold py-10">
                    <a href="#gallery">Gallery</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className=" text-4xl  font-bold py-10">
                    <a href="#services">Services</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className=" text-4xl  font-bold py-10">
                    <a href="#contact">Contact</a>
                  </DropdownMenu.Item>
                </div>
              </DropdownMenu.Content>
            </div>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      <div className="flex items-center gap-4  font-bold max-sm:hidden">
        <a className={styles.a} href="#">Home</a>
        <a className={styles.a} href="#gallery">Gallery</a>
        <a className={styles.a} href="#services">Services</a>
        <a className={styles.a} href="#contact">Contact</a>
        <DarkButton setTheme={setTheme} theme={theme}/>
      </div>
    </div>
  )
}

const styles = {
  a: "hover:underline"
}