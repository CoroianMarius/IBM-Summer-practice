import styles from "@/app/groupsV2/groups.module.css"

export default function NotificationDate({date}){
    return <div className={styles.notificationsDate}>
            {date}
    </div>
}