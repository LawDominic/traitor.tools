import React from 'react';
import MM from '../images/mm-logo.svg';

function NavBar() {
    return (
        <div>
            <nav>
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-4">
                            <div>
                            <a href="#" class="flex items-center py-5 px-2 text-black hover:text-gray-900">
                                <span class="font-kanit font-semibold text-4xl text-indigo-900">traitor</span>
                            </a>
                            </div>
                        </div>

                        <div class="hidden md:flex items-center space-x-1">
                            <a href="" class="font-kanit py-5 px-3 text-xl">Link</a>
                            <a href="" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                            <img src={MM} class="h-12 w-12"/>
                        </div>

                        <div class="md:hidden flex items-center">
                            <button class="mobile-menu-button">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                        </div>

                    </div>
                </div>

                <div class="mobile-menu hidden md:hidden">
                    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"></a>
                    <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"></a>
                </div>
                </nav>
        </div>
    )
}

export default NavBar