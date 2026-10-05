import type { ReactNode } from 'react';
import Icon from './Icon';

type Props = {
  href: string;
  variant?: 'primary' | 'ghost' | 'dark';
  arrow?: number;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({ href, variant = 'primary', arrow, onClick, children }: Props) {
  return (
    <a className={`btn btn-${variant}`} href={href} onClick={onClick}>
      {children}
      {arrow ? <Icon name="arrow" size={arrow} strokeWidth={2.2} /> : null}
    </a>
  );
}
