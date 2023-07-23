import styles from "@/app/groupsV2/groups.module.css"
import GroupMenuButton from "../atoms/GroupMenuButton"

export default function GroupSideBarV2({groups}){

    return(
        <div className={styles.sidebarContainer}>
            {groups?.map((group,idx) => 
                // <GroupMenuButton key={group.id} group={group} />
                <GroupMenuButton key={idx} group={group} />
            )}
        </div>
    )
}