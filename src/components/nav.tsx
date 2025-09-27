import { Link } from 'react-router-dom';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

export const Nav = () => {
    return (
        <NavigationMenu className="border-b px-4 py-2">
            <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/">Главная</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/data">Данные</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/form">Форма</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/counter">Счётчик</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
