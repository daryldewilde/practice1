import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import type { ThemeContextType} from '../types/types';
import type { ReactNode } from "react";

// Main layout component with theme-aware styling
export default function Main(props:{children:ReactNode}){
    const themeContext = useContext(ThemeContext) as ThemeContextType
    
    return(
        <main className={`min-h-screen w-full pt-20 pb-20 ${
            themeContext.theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        } flex items-center justify-center p-2 md:p-4`}>
            {/* Content container with responsive design */}
            <div className={`w-full max-w-sm md:max-w-2xl ${
                themeContext.theme === "dark" 
                    ? "bg-gray-800 border-gray-700" 
                    : "bg-blue-100 border-blue-300"
            } rounded-lg p-4 md:p-8 border`}>
                {props.children} 
            </div>
        </main>
    )
}