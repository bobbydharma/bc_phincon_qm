import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import CustomProgressBar from "../../components/ui/CustomProgressBar";
import { useProgressStore } from "../../stores/progress.store";
import { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { RefreshCcw } from "lucide-react";

const ProgressStats = () => {
  const { progress, loading, error,  getProgress } = useProgressStore();
  const timeSpentLearning = progress?.timeSpentLearning ?? 0;

  const hours = Math.floor(timeSpentLearning / (1000 * 60 * 60));
  const minutes = Math.floor((timeSpentLearning % (1000 * 60 * 60)) / (1000 * 60));

  const fetchData = async () => {
    await getProgress();
  }

  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="text-center text-gray-500 py-6">
        Loading progress...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-6 space-y-4">
        <p>{error}</p>
        <Button onClick={fetchData} className="gap-2">
          <RefreshCcw className="h-4 w-4" />
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gray-600">
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-blue-600">
              {progress?.progress}%
            </span>
          </div>
          <CustomProgressBar
            progress={progress?.progress ?? 0}
            size="lg"
            showLabel={false}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gray-600">
            Courses Completed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-blue-600">
              {progress?.courseCompleted}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-gray-600">
            Time Spent Learning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-blue-600">
              {hours}h {minutes}m
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressStats;
