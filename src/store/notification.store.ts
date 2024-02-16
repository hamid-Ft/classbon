import { get } from "react-hook-form";
import { Notification } from "@/types/notification.store.interface";
import { create } from "zustand";
import { generateID } from "@/utils/string";
import { devtools } from "zustand/middleware";

type NotificationState = {
	notifications: Notification[];
	showNotification: (notification: Omit<Notification, "id">) => void;
	dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationState>()(
	devtools((set, get) => ({
		notifications: [],
		showNotification: (notification) => {
			const id = generateID();
			set((state) => ({
				notifications: [...state.notifications, { id: id, ...notification }],
			}));
			setTimeout(() => {
				get().dismissNotification(id);
			}, 5000);
		},
		dismissNotification: (id) => {
			set((state) => ({
				notifications: state.notifications.filter((p) => p.id !== id),
			}));
		},
	}))
);

export const showNotification = (notifications: Omit<Notification, "id">[]) => {
	notifications.forEach((p) =>
		useNotificationStore.getState().showNotification(p)
	);
};
