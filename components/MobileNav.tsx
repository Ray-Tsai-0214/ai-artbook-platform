"use client"

import { useState } from "react"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const MobileNav = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white-1 hover:text-orange-1 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black-1/80 md:hidden">
          <div className="fixed left-0 top-0 h-full w-64 bg-black-1 p-6">
            <div className="flex items-center gap-2 mb-8">
              <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
              <h1 className="text-18 font-extrabold text-white-1">AI Artbook</h1>
            </div>

            <nav className="flex flex-col gap-4">
              {sidebarLinks.map(({ route, label, imgURL }) => {
                const isActive = pathname === route || pathname.startsWith(`${route}/`)

                return (
                  <Link
                    href={route}
                    key={label}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex gap-3 items-center py-3 px-4 rounded-lg transition-colors",
                      {
                        "bg-orange-1 text-white-1": isActive,
                        "text-white-2 hover:text-white-1 hover:bg-black-2": !isActive,
                      }
                    )}
                  >
                    <Image src={imgURL} alt={label} width={20} height={20} />
                    <p>{label}</p>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNav