
import type { User, UserProfile, Course, Tryout } from "../types/user.type";

const now = new Date();

export const user: User = {
  id: "1",
  fullname: "Sigit Sasongko",
  username: "FastTiger-N4c3W",
  email: "sigit.center31@gmail.com",
  phoneNumber: "+6286403152165",
  password: "password123",
  active: 1,
  data: "{}",
  createdAt: now,
  updatedAt: now,
};

export const userProfile: UserProfile = {
  id: "1",
  userId: "1",
  bio: "Sigit Sasongko",
  gender: "Male",
  address: "Jl. Soekarno Hatta No. 12, Bandung",
  active: 1,
  data: "{}",
  createdAt: now,
  updatedAt: now,
};

export const courses: Course[] = [
  {
    id: "1",
    title: "Advanced JavaScript Programming",
    description: "Learn modern JavaScript techniques and best practices",
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    totalDuration: 1800, // in minutes
    spentDuration: 1200, // in minutes
    imageUrl: "https://via.placeholder.com/150/6366f1/FFFFFF?text=JS",
  },
  {
    id: "2",
    title: "React Native for Beginners",
    description: "Build your first mobile app with React Native",
    progress: 45,
    totalModules: 10,
    completedModules: 4,
    totalDuration: 1500, // in minutes
    spentDuration: 675, // in minutes
    imageUrl: "https://via.placeholder.com/150/8b5cf6/FFFFFF?text=React",
  },
  {
    id: "3",
    title: "Data Science Fundamentals",
    description: "Introduction to data science and machine learning",
    progress: 25,
    totalModules: 15,
    completedModules: 4,
    totalDuration: 2500, // in minutes
    spentDuration: 625, // in minutes
    imageUrl: "https://via.placeholder.com/150/a78bfa/FFFFFF?text=Data",
  },
];

export const tryouts: Tryout[] = [
  {
    id: "1",
    title: "JavaScript Assessment",
    description: "Test your JavaScript knowledge",
    progress: 75,
    totalQuestions: 40,
    completedQuestions: 30,
    deadline: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    imageUrl: "https://via.placeholder.com/150/6366f1/FFFFFF?text=JS+Test",
  },
  {
    id: "2",
    title: "React Framework Quiz",
    description: "Evaluate your React skills",
    progress: 30,
    totalQuestions: 50,
    completedQuestions: 15,
    deadline: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    imageUrl: "https://via.placeholder.com/150/8b5cf6/FFFFFF?text=React+Quiz",
  },
];

// Calculate overall progress
export const overallProgress = {
  courses: Math.round(
    courses.reduce((sum, course) => sum + course.progress, 0) / courses.length
  ),
  tryouts: Math.round(
    tryouts.reduce((sum, tryout) => sum + tryout.progress, 0) / tryouts.length
  ),
  overall: Math.round(
    (courses.reduce((sum, course) => sum + course.progress, 0) +
      tryouts.reduce((sum, tryout) => sum + tryout.progress, 0)) /
      (courses.length + tryouts.length)
  ),
  totalCoursesCompleted: courses.filter((course) => course.progress === 100).length,
  totalTime: courses.reduce((sum, course) => sum + course.spentDuration, 0), // in minutes
};