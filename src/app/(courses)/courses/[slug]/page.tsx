import { API_URL } from "@/configs/global";
import type { CourseDetails } from "@/types/course-details.interface";
import { CourseAside } from "./_components/course-aside";
import { Tab } from "@/types/tab.type";
import { Tabs } from "@/app/_components/tabs";
import { Accordion } from "@/app/_components/accordion";
import { Accordion as AccordionType } from "@/types/accordion.type";
import CourseComments from "./_components/comments/course-comments";
import { CourseChapter } from "@/types/course-chapter.interface";
import { CourseCurriculum } from "./_components/curriculum";
import { VidoePlayer } from "@/app/_components/video-player";
import Image from "next/image";

export async function generateStaticParams() {
	const res = await fetch(`${API_URL}/courses/slugs`);
	const slugs = await res.json();
	return (slugs as string[]).map((slug) => ({
		slug: slug,
	}));
}

async function getCourse(slug: string): Promise<CourseDetails> {
	const res = await fetch(`${API_URL}/courses/${slug}`);
	return res.json();
}
async function getCurriculum(slug: string): Promise<CourseChapter[]> {
	const res = await fetch(`${API_URL}/courses/${slug}/curriculum`);
	return res.json();
}

export default async function CourseDetails({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const courseData = getCourse(slug);
	const courseCurriculumData = getCurriculum(slug);

	const [course, courseCurriculum] = await Promise.all([
		courseData,
		courseCurriculumData,
	]);

	const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((faq) => ({
		id: faq.id,
		title: faq.question,
		content: faq.answer,
	}));

	const tabs: Tab[] = [
		{
			label: "مشخصات دوره",
			content: course.description,
		},
		{
			label: "دیدگاه ها  و پرسش",
			content: <CourseComments />,
		},
		{
			label: "سوالات متداول",
			content: <Accordion data={faqs} />,
		},
	];

	return (
		<div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
			<div className="dark:bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
			<div className="col-span-10 xl:col-span-7">
				<h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
					{course.title}
				</h1>
				<h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
					{course.subTitle}
				</h2>

				<div className=" mt-5">
					{course.videoUrl ? (
						<VidoePlayer
							src={course.videoUrl}
							poster={`${API_URL}/picture/${course.coverImageId}`}
						/>
					) : (
						<Image
							src={`${API_URL}/picture/${course.coverImageId}`}
							alt={course.title}
							width={550}
							height={327}
							className="w-full"
						/>
					)}
				</div>
			</div>
			<div className="col-span-10 xl:col-span-3">
				<CourseAside {...course} />
			</div>
			<div className="col-span-10 xl:col-span-6 ">
				<Tabs tabs={tabs} />
			</div>
			<div className="col-span-10 xl:col-span-4 ">
				<div className="sticky top-5">
					<h2 className="mb-5 text-xl">سرفصل های دوره</h2>
					<CourseCurriculum data={courseCurriculum} />
				</div>
			</div>
		</div>
	);
}
