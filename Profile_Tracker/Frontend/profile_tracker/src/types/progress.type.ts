/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProgressType {
    progress: number;
    courseCompleted: number;
    timeSpentLearning: number
}

export interface ProgressStateType {
  progress: ProgressType | null;
  loading: boolean;
  error: any;
  message: string | null;
  status: string | null;
}