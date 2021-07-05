import React,{useState} from 'react'

export default function Search({ callbackSearch }) {
    const [searchInput,setSearchInput]=useState("")
    function handleChange(e) {
    setSearchInput(e.target.value.toLowerCase())
    }
    return (
        <div className="  input-group">
            <div className="form-outline">
                <input onChange={ handleChange} type="search" id="searchform"
                    className="form-control" />
                <label className="form-label" for="searchform">Search</label>
            </div>
            <button onClick={ ()=>callbackSearch(searchInput)}type="button" className=" w-10 h-25 ml-3 btn-primary">
                <i className=" m-2 fas fa-search"></i>
            </button>
        </div>
    )
}

