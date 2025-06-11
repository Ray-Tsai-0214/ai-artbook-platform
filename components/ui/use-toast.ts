import * as React from "react"

type ToastProps = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

type ToastActionElement = React.ReactElement

const ToastContext = React.createContext<{
  toast: (props: ToastProps) => void
}>({
  toast: () => {},
})

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const toast = React.useCallback((props: ToastProps) => {
    // Simple toast implementation - in a real app you'd use a toast library
    console.log("Toast:", props)
    if (typeof window !== "undefined") {
      alert(`${props.title}${props.description ? `\n${props.description}` : ""}`)
    }
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
    </ToastContext.Provider>
  )
}