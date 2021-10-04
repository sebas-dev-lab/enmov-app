import React, { useEffect } from 'react'
import DashboardAdmin from '../../components/Admin/Dashboard'

const Admin = () => {
    useEffect(()=>{
        var p = navigator.mediaDevices.getUserMedia({ audio: true});
        p.then((midstream)=>{
            console.log(midstream, 'acaaaa')
            
        }).catch(e=>{
            console.log(e, 'entro aca')
        })
    },[])
    return (
        <DashboardAdmin/>
    )
}

export default Admin
