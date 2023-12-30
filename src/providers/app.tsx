import { ThemeRegistry } from './ThemeRegistry'

type AppProviderProps = {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeRegistry>{children}</ThemeRegistry>
}
