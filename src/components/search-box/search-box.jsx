import React from "react";

import './search-box.css';

export const SearchField = ({placeholder,onChange})=>{
 
    return(
<div class="search__container">
    <input type="search" class="search__input" placeholder={placeholder} onChange={onChange} width="80px" />
    </div>
    );
};