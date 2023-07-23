import React, { useContext, useState } from "react";

const AdminSideBarContext = React.createContext()
const AdminSideBarUpdateContext = React.createContext()

export function useMenu(){
    return useContext(AdminSideBarContext)
}
export function useMenuUpdate(){
    return useContext(AdminSideBarUpdateContext)
}

export function AdminSideBarProvider( {children} ){

    const [selectedMenu, setSelectedMenu] = useState("Manage Events")

    function setMenu(menu){
        setSelectedMenu(menu)
    }

    return (
        <AdminSideBarContext.Provider value={selectedMenu}>
            <AdminSideBarUpdateContext.Provider value={setMenu}>
                {children}
            </AdminSideBarUpdateContext.Provider>
        </AdminSideBarContext.Provider>
    )

}