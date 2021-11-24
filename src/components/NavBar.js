import React from 'react';

import { useMetaMask } from "metamask-react";

function NavBar() {

    const { status, connect, account, chainId } = useMetaMask();

    return (
        <div>
            <nav className="font-kanit">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-4">
                            <div>
                            <a href="#" class="flex items-center py-5 px-2 text-black hover:text-gray-900">
                                <span class="font-semibold text-4xl text-indigo-900">traitor</span>
                            </a>
                            </div>
                        </div>

                        <div class="hidden md:flex items-center space-x-1">
                            <a href="" class="py-5 px-3 text-xl">Link</a>
                            {(function() {
                                switch(status) {
                                    case 'notConnected':
                                        return (
                                            <button onClick={connect} className="text-yellow-500 text-semibold bg-yellow-100 hover:bg-yellow-300 rounded-full py-2 px-3 transition duration-300">Connect to a wallet</button>
                                        )
                                    case 'connecting':
                                        return (
                                            <span className="text-yellow-500 text-semibold bg-yellow-100 hover:bg-yellow-300 rounded-full py-2 px-3 transition duration-300">Connecting...</span>
                                        )
                                    case 'connected':
                                        console.log(chainId)
                                        return (
                                            <div>
                                                <span className="text-green-500 text-semibold bg-green-100 rounded-full py-2 px-3 transition duration-300">
                                                    {account.substring(0,6)}...{account.substring(account.length-4)}
                                                </span>
                                            </div>
                                        )
                                }
                                }
                            )()}
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