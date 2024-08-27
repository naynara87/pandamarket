import { createContext, useContext, useState, ReactNode } from "react";
import useIsMounted from "../hooks/useIsMounted";
import styles from "./ToasterProvider.module.scss";

// Define the types for the toast messages
interface Toast {
  id: number;
  type: "info" | "warn";
  message: string;
}

interface ToasterContextProps {
  toaster: (type: Toast["type"], message: string) => void;
}

const ICONS: Record<Toast["type"], string | null> = {
  info: null,
  warn: null,
};

interface ToastProps {
  type: Toast["type"];
  message: string;
  onClick: () => void;
}

function Toast({ type, message, onClick }: ToastProps) {
  const isMounted = useIsMounted(100);
  const icon = ICONS[type];
  const className = `${styles.Toast} ${styles[type]} ${
    isMounted ? styles.mounted : ""
  }`;

  return (
    <div className={className} onClick={onClick}>
      {icon && <img className={styles.Icon} src={icon} alt={type} />}
      {message}
    </div>
  );
}

const ToasterContext = createContext<ToasterContextProps | undefined>(
  undefined
);

interface ToasterProviderProps {
  children: ReactNode;
}

function ToasterProvider({ children }: ToasterProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function addToast(type: Toast["type"], message: string): Toast {
    const newToast: Toast = {
      id: Date.now(),
      type,
      message,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
    return newToast;
  }

  function removeToast(id: number) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  function toaster(type: Toast["type"], message: string) {
    const newToast = addToast(type, message);
    setTimeout(() => removeToast(newToast.id), 2000);
  }

  return (
    <ToasterContext.Provider value={{ toaster }}>
      {children}
      <div className={styles.ToastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClick={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToasterContext.Provider>
  );
}

export function useToaster() {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("ToastContext 안에서만 사용할 수 있습니다.");
  }
  return context.toaster;
}

export default ToasterProvider;
