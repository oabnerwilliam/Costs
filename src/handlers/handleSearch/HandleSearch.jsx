import React, { useEffect, useState } from 'react'

import SearchInput from '../../components/form/search/input/SearchInput'

const HandleSearch = ({list, setSearchText, searchText, placeholder, setFiltered}) => {
    const [filteredList, setFilteredList] = useState(list)

    useEffect(()=>{
        if(searchText) {
            setFilteredList(list.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            ))    
        }
    }, [searchText])
    
    /*const filteredList = React.useMemo(() => 
        list.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        ), [list, searchText]
    );*/

    useEffect(() => {
        setFiltered(filteredList);
    }, [filteredList]);
    
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
