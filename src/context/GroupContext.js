import React, { useContext, useState } from "react";

const GroupContext = React.createContext()
const GroupUpdateContext = React.createContext()

export function useGroup(){
    return useContext(GroupContext)
}
export function useGroupUpdate(){
    return useContext(GroupUpdateContext)
}

export function GroupProvider( {children} ){

    const [selectedGroup, setSelectedGroup] = useState(null)

    function setGroup(group){
        setSelectedGroup(group)
    }

    return (
        <GroupContext.Provider value={selectedGroup}>
            <GroupUpdateContext.Provider value={setGroup}>
                {children}
            </GroupUpdateContext.Provider>
        </GroupContext.Provider>
    )

}