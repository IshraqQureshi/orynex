import type { ReactNode } from 'react';

export default function Eyebrow({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`eyebrow ${className}`.trim()}>{children}</div>;
}
