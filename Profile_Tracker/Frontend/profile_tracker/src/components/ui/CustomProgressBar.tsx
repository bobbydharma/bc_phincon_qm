import { cn } from "../../lib/utils";

interface CustomProgressBarProps {
  progress: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  className?: string;
}

const CustomProgressBar = ({
  progress,
  size = "md",
  showLabel = true,
  color = "primary",
  className,
}: CustomProgressBarProps) => {
  // Define height based on size
  const heightMap = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4",
  };

  // Define color based on type or overridden by progress
  const getColorClass = () => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    if (progress >= 70) return "bg-green-500";

    const colorMap = {
      primary: "bg-purple-600",
      secondary: "bg-blue-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500",
    };
    return colorMap[color];
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-1">
        {showLabel && (
          <span className="text-sm font-medium text-gray-700">{progress}%</span>
        )}
      </div>
      <div className={cn("w-full bg-gray-200 rounded-full", heightMap[size])}>
        <div
          className={cn("rounded-full transition-all duration-500", getColorClass(), heightMap[size])}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CustomProgressBar;