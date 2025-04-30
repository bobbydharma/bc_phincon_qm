import { toast as hotToast } from "react-hot-toast";

interface ToastOptions {
  title: string;
  description?: string;
}

export function useToast() {
  const toast = ({ title, description }: ToastOptions) => {
    hotToast.success(`${title}${description ? ` — ${description}` : ''}`);
  };

  return { toast };
}
