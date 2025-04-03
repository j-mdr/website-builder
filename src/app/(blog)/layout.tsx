import { SanityLive } from '@/sanity/lib/live';
import { DisableDraftModeComponentClient } from '@/components/disable-draft-mode/disable-draft-mode.component.client';
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
          <DisableDraftModeComponentClient />
          <VisualEditing />
        </>
      )}
    </div>
  );
}
