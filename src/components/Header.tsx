// Hooks
import { useState } from 'react';

// Images
import logoIcon from '../../assets/images/logo.svg';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';

// shadcn UI
import { Button } from './ui/button';
import { Card } from "./ui/card";

// Utility Functions
// import { cn } from '@/lib/utils';


export default function Header() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    return (
        <Card className="
            flex
            flex-row
            justify-between
            w-full
            h-15
            p-2
        ">
            <img className="w-50 h-15" src={logoIcon} alt="Logo" />

            <Button onClick={toggleTheme}>
                <img 
                    src={theme === 'light' ? moonIcon : sunIcon}
                    alt="Theme Icon" 
                />
            </Button>
        </Card>
    ); 
}