"use client"

import styles from "@/app/groupsV2/groups.module.css"
import NotificationDate from "../atoms/NotificationDate"
import NotificationInfo from "../atoms/NotificationInfo"
import { formatDate } from "@/utils/dateFormater"


export default function GroupNotifications({notifications}){


    return <div className={styles.notificationsContainer}>
        {notifications?.map((notification, idx) => (
        <div className={styles.notificationGroup} key={idx}>
          <NotificationDate date={formatDate(notification.date)} />
          <NotificationInfo notification={notification.message} />
        </div>
      ))}
    </div>
}