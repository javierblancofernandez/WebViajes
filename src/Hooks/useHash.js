import { useState,useEffect} from 'react';

function useHash (){

    const[hash , setHash] =useState('');

    let actualHash= window.location.hash;

    if(actualHash !== hash){
        setHash(actualHash);

    }

    useEffect(()=>{
        let el = hash && document.querySelector(hash);
        el && el.scrollIntoView( {behavior: "auto"})
    });


}

export default useHash;