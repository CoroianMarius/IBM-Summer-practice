import styled from "../../css/eventCard.module.css"

export default function groupsManagement({groups}){
    const{name, users} = groups
    return<>
        <div className={styled.event}>
            <button id={styled.create}>Create group</button>
            <div className={styled.Dept}>
            {groups && groups.map((group)=>(
                <button key={group.name} className={styled.acceptBtn} >{group.name}</button>
            ))
            }
        </div>
        </div>
    </>
}