import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const Footer = () => {
  return (
    <div className='flex justify-end mr-10'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
              Icons provided by
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className='bg-teal-950 text-white rounded-xl p-3 gap-5'>
            <DropdownMenu.Item>
              <a href="https://www.flaticon.com/free-icons/pick-up-truck" title="pick up truck icons">Pick up truck icons created by Freepik - Flaticon</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by BZZRINCANTATION - Flaticon</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a href="https://www.flaticon.com/free-icons/suv" title="suv icons">Suv icons created by Konkapp - Flaticon</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by Konkapp - Flaticon</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a href="https://www.flaticon.com/free-icons/cars" title="cars icons">Cars icons created by Vectors Market - Flaticon</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by Freepik - Flaticon</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
  )
}

export default Footer