'use client';
import { PRODUCT_CATEGORIES } from '@/config';
import { useState, useRef, useEffect } from 'react';
import NavItem from './NavItem';
// import { useOnClickOutside } from '@/hooks/use-on-click-outside';

const NavItems = () => {
    const [activeIdex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIdex !== null;

    return (
        <div className="flex gap-4 h-full">
            {PRODUCT_CATEGORIES.map((category, index) => {
                const handleOpen = () => {
                    if (activeIdex === index) {
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(index);
                    }
                };

                const isOpen = index === activeIdex;

                return (
                    <NavItem
                        key={index}
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen}
                    />
                );
            })}
        </div>
    );
};

export default NavItems;
