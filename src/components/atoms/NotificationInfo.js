import styles from "@/app/groupsV2/groups.module.css"

export default function NotificationInfo({notification}){
    return <div className={styles.notificationsInfo}>
            {notification}
    </div>
}