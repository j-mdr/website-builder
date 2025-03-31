import { SanityLive } from '@/sanity/lib/live';
import { DisableDraftMode } from '@/app/_components/disableDraftMode/DisableDraftMode';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </div>
  );
}
