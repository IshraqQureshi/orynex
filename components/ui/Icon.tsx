import type { ReactNode } from 'react';
import type { IconName } from '@/content/site';

const paths: Record<IconName | 'arrow' | 'check' | 'search' | 'plus' | 'menu' | 'close', ReactNode> = {
  cross: (<><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="2.5" /></>),
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  browser: (<><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18" /></>),
  phone: (<><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M11 18h2" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  cloud: <path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 9.5a4 4 0 01-.5 8.5H7z" />,
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
  bars: <path d="M5 20v-5M12 20V9M19 20V4" />,
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12l5 5L20 7" />,
  search: (<><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>),
  plus: <path d="M4 12h16M12 4v16" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

type Props = {
  name: keyof typeof paths;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({ name, size = 24, strokeWidth = 2, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
