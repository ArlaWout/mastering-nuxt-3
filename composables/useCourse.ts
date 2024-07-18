import courseData from "./courseData";

export const useCourse = () => {
	return {
		...courseData,
		chapters: courseData.chapters.map(
			(chapter: { lessons: any[]; slug: any }) => ({
				...chapter,
				lessons: chapter.lessons.map((lesson) => ({
					...lesson,
					path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
				})),
			})
		),
	};
};
