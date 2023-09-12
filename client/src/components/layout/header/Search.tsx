'use client'

import React, { useState } from 'react';

import s from './Search.module.scss';

import {IoSearchSharp} from 'react-icons/io5'

const Search: React.FC = () => {
    const [search, changeSearch] = useState('');

    return(
        <div className={s.searchBox}>
            <input type='text' value={search} onChange={(e) => changeSearch(e.target.value)} className={s.searchInput} />
            <span className={search ? s.hidden : ''}><IoSearchSharp style={{fontSize: 14, fontWeight: 900}}/> SEARCH</span>
        </div>
    )
};

export default Search;