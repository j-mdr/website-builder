'use server';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export async function ThemeProviderComponentServer({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
