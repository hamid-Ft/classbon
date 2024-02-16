"use client";
import { ReactNode, useEffect, useState } from "react";
import { Progress } from "../progress/progress";
import { IconCheck, IconClose, IconError, IconInfo } from "../icons/icons";
import { NotificationToastProps } from "./notification.types";
import {
	NotificationType,
	Notification,
} from "@/types/notification.store.interface";
import { useNotificationStore } from "@/store/notification.store";

const notificationTypes: Record<NotificationType, string> = {
	success: "bg-success",
	info: "bg-info",
	warning: "bg-warning",
	error: "bg-error",
};

const notificationIcons: Record<NotificationType, ReactNode> = {
	success: <IconCheck width={20} height={20} color="white" />,
	info: <IconInfo width={20} height={20} color="white" />,
	warning: <IconInfo width={20} height={20} color="white" />,
	error: <IconError width={20} height={20} color="white" />,
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
	notification: { id, message, type, duration = 5000 },
}) => {
	const dismissNotification = useNotificationStore(
		(state) => state.dismissNotification
	);
	const [progessValue, setProgressValue] = useState<number>(100);
	useEffect(() => {
		const interval = duration / 100;
		const intervalId = setInterval(() => {
			setProgressValue((oldValue) =>
				Math.max(oldValue - 100 / (duration / interval), 0)
			);
		}, interval);
		return () => clearInterval(intervalId);
	}, [duration]);
	return (
		<div className="notification">
			<div className={`notification-icon ${notificationTypes[type]}`}>
				{notificationIcons[type]}
			</div>
			<div className="text-sm font-semibold">{message}</div>
			<button
				className="mr-auto hover:text-white mt-2"
				onClick={() => dismissNotification(id)}>
				<IconClose width={20} height={20} />
			</button>
			<Progress
				className="!absolute bottom-1 left-2 right-2 !w-auto"
				size="tiny"
				variant={type}
				value={progessValue}
			/>
		</div>
	);
};
