import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useQuery } from "@tanstack/react-query";

type GetCommentsOptions = {
	params: {
		slug: string;
		page: number;
	};
};

const getComments = ({
	params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
	const { slug, page } = params;
	const url = `/courses/${slug}/comments?page=${page}`;
	return readData(url);
};

export const useCourseComments = ({ params }: GetCommentsOptions) => {
	const { data, isLoading } = useQuery({
		queryKey: ["courseComments"],
		queryFn: () => getComments({ params }),
		staleTime: 5 * 60 * 60 * 1000,
		gcTime: 6 * 60 * 60 * 1000,
	});

	return { data, isLoading };
};
