'use client'
import React, { useState } from 'react';

import s from './Footer.module.scss';

import Logo from '@/components/Logo/Logo';

import Link from 'next/link';
import { oswald } from '@/app/fonts';

import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram} from 'react-icons/bi'
import Input from '@/components/Input/Input';
import Button from '@/components/button/Button';

const mockedFeatures = [
    {title: 'men', href: '/shop'},
    {title: 'women', href: '/shop'},
    {title: 'boys', href: '/shop'},
    {title: 'girls', href: '/shop'},
    {title: 'new arrivals', href: '/shop'},
    {title: 'shoes', href: '/shop'},
    {title: 'cothes', href: '/shop'},
    {title: 'accessories', href: '/shop'},
];

const mockedMenu = [
    {title: 'about us', href: '/about'},
    {title: 'contact us', href: '/contact'},
    {title: 'my account', href: '/account'},
    {title: 'orders history', href: '/account/history'},
    {title: 'my wishlist', href: '/wishlist'},
    {title: 'blog', href: '/blog'},
    {title: 'login', href: '/login'},
]

const Footer: React.FC = () => {
    const [email, changeEmail] = useState('');

    return(
        <footer className={s.footer}>
            <div className="container">
                <Logo/>
                <div className={s.features}>
                    <h3 className={oswald.className}>Features</h3>
                    <ul>
                        {mockedFeatures.map((el, key) => (
                            <li key={`features-${key}`}>
                                <Link href={el.href}>
                                    {el.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={s.menu}>
                <h3 className={oswald.className}>Menu</h3>
                    <ul>
                        {mockedMenu.map((el, key) => (
                            <li key={`menu-${key}`}>
                                <Link href={el.href}>
                                    {el.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={s.contact}>
                    <h3 className={oswald.className}>Contact us</h3>
                    <ul>
                        <li>
                           <span>Address:</span> <br />
                           <Link href={'https://www.google.com'} target='_blank'>123 street name, city, england</Link> 
                        </li>
                        <li>
                            <span>Phone:</span> <br />
                            <Link href={'tel:1234567890'} target='_blank'>(123) 456-7890</Link>
                        </li>
                        <li>
                            <span>Email</span> <br />
                            <Link href={'mailto: mail@example.com'}>mail@example.com</Link>
                        </li>
                        <li>
                            <span>Working days/hours</span> <br />
                            <Link href={'/contacts'}>mon - sun / 9:00am - 8:00pm</Link>
                        </li>
                    </ul>
                </div>
                <div className={s.follow}>
                    <h3 className={oswald.className}>Follow us</h3>
                    <ul>
                        <li>
                            <Link href={'https://facebook.com/'} target='_blank'>
                                <div className={s.icon}>
                                    <BiLogoFacebook />
                                </div>
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://twitter.com/?lang=ru'} target='_blank'>
                                <div className={s.icon}>
                                    <BiLogoTwitter/>
                                </div>
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.instagram.com/'} target='_blank'>
                                <div className={s.icon}>
                                    <BiLogoInstagram/>
                                </div>
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={s.join}>
                    <h3 className={oswald.className}>Join us</h3>
                    <p>Subscribe to our newsletters</p>
                    <Input value={email} handler={(e) => changeEmail(e.target.value)} placeholder='Email Address'/>
                    <Button title='Subscribe!' style='white' disabled={email ? false : true} />
                </div>
            </div>
        </footer>
    )
};

export default Footer;