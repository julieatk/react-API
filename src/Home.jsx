import React, {useEffect, useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    return(()=>{
        axiox.get('https://reqres.in/api/unknown' )
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })

    }, [])
    return(
        <>
        <Colors/>
        </>
    )
} 

export default Home;
