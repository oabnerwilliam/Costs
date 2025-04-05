import React, { useEffect } from 'react'

import SearchInput from '../../components/form/search/input/SearchInput'

const HandleSearch = ({list, setSearchText, searchText, placeholder, setFiltered}) => {
    const filteredList = React.useMemo(() => 
        list.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        ), [list, searchText]
    );

    useEffect(() => {
        setFiltered(filteredList);
    }, [filteredList, setFiltered]);
    
    const pesquisarItem = (e) => {
        setSearchText(e.target.value)
    }
  
    return (
        <SearchInput
        placeholder={placeholder}
        handleOnChange={pesquisarItem}/>
    )
}

export default HandleSearch
