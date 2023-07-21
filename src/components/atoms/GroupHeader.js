import styles from "@/app/groupsV2/groups.module.css"

export default function GroupsContent({name}){
    return <div className={styles.groupHeader}>
        {name}
    </div>
}