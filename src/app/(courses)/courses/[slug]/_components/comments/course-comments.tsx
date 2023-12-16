"use client";
import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";

const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  return (
    <>
      {comments?.data.map((p) => (
        <p key={p.id} className="mb-8">
          {p.commentText}
        </p>
      ))}
    </>
  );
};
export default CourseComments;
