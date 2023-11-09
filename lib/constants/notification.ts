import { ENotificationCategory, TNotification } from "@/app/types/features/notification";
import { currentUser, users } from "./user";

/**
 * Placeholder notifications
 */
export const notifications: TNotification[] = [
    {
        id: "abc123",
        title: "Critical System Update",
        description: "A critical system update is scheduled tonight at 11:00 PM. Please save your work and log out before that time.",
        details: {
            category: ENotificationCategory.CRITICAL,
            timestamp: new Date("2023-11-09T14:30:00"),
        },
    },
    {
        id: "def456",
        title: "New Company Policy",
        description: "We have implemented a new company policy regarding remote work. Please review the updated policy document in the shared folder.",
        details: {
            category: ENotificationCategory.ANNOUNCEMENT,
            timestamp: new Date("2023-11-09T09:15:00"),
            sender: currentUser,
        }
    },
    {
        id: "ghi789",
        title: "Task Reminder",
        description: "Reminder: Deadline for Project Alpha tasks is approaching. Ensure all tasks are completed by Friday.",
        details: {
            category: ENotificationCategory.REMINDER,
            timestamp: new Date("2023-11-09T16:45:00"),
            sender: users[0],
        }
    },
    {
        id: "jkl012",
        title: "Urgent Security Alert",
        description: "An unauthorized access attempt was detected. Change your password immediately and report any suspicious activity to IT.",
        details: {
            category: ENotificationCategory.ALERT,
            timestamp: new Date("2023-11-09T11:20:00")
        }
    },
    {
        id: "mno345",
        title: "Company Town Hall Meeting",
        description: "Join us for the quarterly town hall meeting on Friday at 2:00 PM. Important updates and Q&A session.",
        details: {
            category: ENotificationCategory.EVENT,
            timestamp: new Date("2023-11-09T14:00:00"),
            sender: users[1]
        }
    },
    {
        id: "pqr678",
        title: "Server Maintenance Tonight",
        description: "Routine server maintenance is scheduled tonight at 10:00 PM. Brief service interruption expected.",
        details: {
            category: ENotificationCategory.REMINDER,
            timestamp: new Date("2023-11-09T13:45:00")
        }
    },
    {
        id: "stu901",
        title: "Team Building Event",
        description: "Don't forget the team-building event this Saturday. Get ready for a day of fun activities and bonding.",
        details: {
            category: ENotificationCategory.EVENT,
            timestamp: new Date("2023-11-09T08:30:00"),
            sender: users[2]
        }
    },
    {
        id: "vwx234",
        title: "Project Beta Milestone Achieved",
        description: "Great news! Project Beta has reached a significant milestone. Congratulations to the team!",
        details: {
            category: ENotificationCategory.ANNOUNCEMENT,
            timestamp: new Date("2023-11-09T15:10:00"),
            sender: currentUser,
        }
    },
    {
        id: "yza567",
        title: "Expense Report Submission",
        description: "Friendly reminder to submit your expense reports for October by the end of the week.",
        details: {
            category: ENotificationCategory.REMINDER,
            timestamp: new Date("2023-11-09T10:50:00"),
            sender: currentUser
        }
    },
    {
        id: "bcd890",
        title: "Temporary Office Closure",
        description: "Due to unforeseen circumstances, the office will be closed tomorrow. Remote work is encouraged.",
        details: {
            category: ENotificationCategory.OTHER,
            timestamp: new Date("2023-11-09T12:25:00"),
            sender: currentUser
        }
    }
];