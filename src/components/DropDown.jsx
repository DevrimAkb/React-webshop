import React, { useState } from 'react'
import { ShoppingCart } from './ShoppingCart'

export const DropDown = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        { isOpen && <div className="absolute inset-0 bg-transparent" onClick={() => setIsOpen(false)}/>}
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => setIsOpen(state => !state)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {children}
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <ShoppingCart />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
