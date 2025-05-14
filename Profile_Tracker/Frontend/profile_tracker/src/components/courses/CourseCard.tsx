import { Card, CardContent } from "../../components/ui/card";
import type { CourseType } from "../../types/course.type";

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="h-full flex flex-col justify-between overflow-hidden transition-all hover:shadow-lg rounded-lg bg-white shadow-sm border border-gray-100">
      <CardContent className="pt-4 px-5">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-semibold text-lg break-words leading-snug min-h-[3rem] line-clamp-2">
            {course.title}
          </h3>
        </div>

        <p className="text-sm text-gray-700 mb-4 line-clamp-2 h-10">
          {course.description ?? "No description available."}
        </p>

        <div className="text-xs text-gray-600 mb-2 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <span className="inline-block">📅</span>
            <span>
              {course.data.startDate} - {course.data.endDate}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block">📦</span>
            <span>Type: {course.data.type}</span>
            <span className="mx-1"></span>
            <span className="inline-block">🏷️</span>
            <span>Tag: {course.tag}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
