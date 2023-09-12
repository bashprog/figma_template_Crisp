import React from "react";

import s from './Header.module.scss';
import Logo from "@/components/Logo/Logo";

import Link from "next/link";
import { oswald, roboto } from "@/app/fonts";
import Search from "./Search";

import {AiOutlineHeart} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi2'

const MockedList = [
    {title: 'Home', href: '/'},
    {title: 'Shop', href: '/shop'},
    {title: 'Blog', href: '/blog'},
    {title: 'Sale', href: '/sale'},
    {title: 'Contact us', href: '/contact'},
]

const Header: React.FC = () => {
    return (
        <>
            <header className={`${s.header} ${oswald.className}`}>
                <Logo/>
                <nav className={s.navigation}>
                    <ul className={s.navList}>
                        {MockedList.map((el, key) => (
                            <li key={key}>
                                <Link href={el.href}>
                                    {el.title}
                                </Link>
                            </li>
                        ))}
                        <li className={s.searchLi}>
                            <Search/>
                        </li>
                    </ul>
                </nav>
                <div className={s.rightSide}>
                    <div className={s.login}>
                        <span>Sign in</span>
                        <span>Create an account</span>
                    </div>
                    <div className={s.cartBox}>
                        <AiOutlineHeart/>
                        <div className={s.cart}>
                            <HiOutlineShoppingBag/>
                            <div className={s.text}>
                                <p className={roboto.className}>Shopping Cart </p>
                                <span className={roboto.className}>0,00 EUR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={s.backLayer}/>
        </>
    )
};

export default Header;