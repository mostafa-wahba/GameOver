import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute2(props) {
    if(localStorage.getItem("userToken")){
        return<Navigate to={"/home"}/>
    }else {
        return props.children
    }

}
