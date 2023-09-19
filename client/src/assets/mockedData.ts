import bg from './img/slider/bg2.png';

import model_1 from './img/slider/w1.png';
import model_2 from './img/slider/w2.png';

import chanel from './img/brands/chanel.png';
import burberry from './img/brands/burberry.png';
import dior from './img/brands/dior.png';
import fendi from './img/brands/fendi.png';
import versace from './img/brands/versace.png';
import gucci from './img/brands/gucci.png';
import armani from './img/brands/armani.png';

import p1 from './img/products/p1.png';
import p2 from './img/products/p2.png';
import p3 from './img/products/p3.png';
import p4 from './img/products/p4.png';
import p5 from './img/products/p5.png';
import p6 from './img/products/p6.png';
import p7 from './img/products/p7.png';
import p8 from './img/products/p8.png';
import { ProductInterface } from '@/components/productCard/productCard.interface';

export const mockSlider = [
    {title: 'Summer sale get 30% off on all dress.', altColorTitle: '30% off', btnTitle: 'shop now', btnHref: '/shop', background: bg, images: [{img: model_1, alt: 'Asian model'}, {img: model_2, alt: 'European model'}]},
    {title: 'Summer sale get 30% off on all dress.', altColorTitle: '30% off', btnTitle: 'shop now', btnHref: '/shop', background: bg, images: [{img: model_1, alt: 'Asian model'}, {img: model_2, alt: 'European model'}]},
    {title: 'Summer sale get 30% off on all dress.', altColorTitle: '30% off', btnTitle: 'shop now', btnHref: '/shop', background: bg, images: [{img: model_1, alt: 'Asian model'}, {img: model_2, alt: 'European model'}]},
    {title: 'Summer sale get 30% off on all dress.', altColorTitle: '30% off', btnTitle: 'shop now', btnHref: '/shop', background: bg, images: [{img: model_1, alt: 'Asian model'}, {img: model_2, alt: 'European model'}]}
]

export const mockBrands = [
    {name: 'chanel', image: chanel},
    {name: 'burberry', image: burberry},
    {name: 'dior', image: dior},
    {name: 'fendi', image: fendi},
    {name: 'versace', image: versace},
    {name: 'gucci', image: gucci},
    {name: 'armani', image: armani}
]

export const mockProducts: ProductInterface[] = [
    {images: [p1], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 139.00},
    {images: [p2], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 235.00},
    {images: [p3], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 90.00},
    {images: [p4], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 139.00, salePrice: 119.00},
    {images: [p5], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 139.00},
    {images: [p6], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 139.00, salePrice: 119.00},
    {images: [p7], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 139.00},
    {images: [p8], category: 'top women', name: 'Angels malu zip jeans slim black used', price: 139.00},
] 