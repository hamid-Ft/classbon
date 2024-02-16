import { showNotification } from "@/store/notification.store";
import { Problem } from "@/types/http-errors.interface";
import { Notification } from "@/types/notification.store.interface";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { values } from "lodash";

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			//show notification
		},
	}),

	mutationCache: new MutationCache({
		onError: (error: unknown) => {
			showNotifications(error as Problem);
		},
	}),

	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
			throwOnError: false,
			gcTime: 1000 * 60 * 60 * 24,
		},
	},
});

const showNotifications = (problem: Problem) => {
	const notifications: Omit<Notification, "id">[] = [];
	if (problem?.errors) {
		Object.entries(problem.errors).forEach(([_, values]) =>
			values.forEach((errorMessage) =>
				notifications.push({
					message: errorMessage,
					type: "error",
				})
			)
		);
	} else if (problem?.detail) {
		notifications.push({
			message: problem.detail,
			type: "error",
		});
	}
	showNotification(notifications);
};
