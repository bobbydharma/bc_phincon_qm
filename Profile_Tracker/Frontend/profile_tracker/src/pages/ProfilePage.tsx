/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";
import ProfileCard from "../components/profile/ProfileCard";
import EditProfileForm from "../components/profile/EditProfileForm";
import ProgressStats from "../components/profile/ProgressStats";
import CourseCard from "../components/courses/CourseCard";
import TryoutCard from "../components/tryouts/TryoutCard";
import CustomProgressBar from "../components/ui/CustomProgressBar";
import type { User, UserProfile } from "../types/user.type";
import { useCourseStore } from "../stores/course.store";
import { useTryoutSectionStore } from "../stores/tryout-section.store";

const ProfilePage = () => {
  const isMobile = useIsMobile();
  const [isEditing, setIsEditing] = useState(false);
  const { coursesResponse, getRunningCourse } = useCourseStore();
  const { tryoutResponse, getRunningTryoutSection } = useTryoutSectionStore();

  useEffect(() => {
    getRunningCourse();
    getRunningTryoutSection();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {isMobile ? <MobileNav /> : <Sidebar />}
      <div className={`flex-1 p-4 md:p-8 ${!isMobile ? "ml-64" : "mt-16"}`}>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Profile Dashboard
        </h1>

        {isEditing ? (
          <EditProfileForm onClose={handleClose} />
        ) : (
          <ProfileCard onEdit={handleEdit} />
        )}

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Learning Progress
          </h2>
          <ProgressStats />
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Running Courses
          </h2>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
              {coursesResponse.courses?.map((course) => (
                <CourseCard course={course} key ={course.id} />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Overall Course Progress</span>
              <span>{coursesResponse.progressCourse.toFixed(0) ?? 0}%</span>
            </div>
            <CustomProgressBar
              progress={coursesResponse.progressCourse ?? 0}
              size="md"
              showLabel={false}
            />
          </div>
        </div>

        <div className="mt-8 mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Running Tryouts
          </h2>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
              {tryoutResponse.tryoutSections?.map((tryout) => (
                <TryoutCard key={tryout.id} tryout={tryout} />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Overall Tryout Progress</span>
              <span>{tryoutResponse.progressTryourt.toFixed(0) ?? 0}%</span>
            </div>
            <CustomProgressBar
              progress={tryoutResponse.progressTryourt ?? 0}
              size="md"
              showLabel={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
