import GroupHeader from "@/components/atoms/GroupHeader"
import styles from "@/app/groupsV2/groups.module.css"
import GroupNotifications from "./GroupNotifications"

export default function GroupsContent({group}){
    return<div className={styles.groupsContent}>
        <GroupHeader name={group.name} />
        <GroupNotifications notifications={group.notifications} />
    </div>
}