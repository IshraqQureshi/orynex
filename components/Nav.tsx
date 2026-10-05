'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks } from '@/content/site';
import Button from './ui/Button';
import Icon from './ui/Icon';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 1080 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" aria-label="Orynex home" onClick={close}>
          <Image src="/images/logo-white.png" alt="Orynex Tech" width={124} height={38} priority style={{ height: 38, width: 'auto' }} />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <Button href="#contact" arrow={16}>Start a project</Button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`nav-panel${open ? ' open' : ''}`} aria-hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>{l.label}</a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={close} tabIndex={open ? 0 : -1}>
          Start a project
          <Icon name="arrow" size={16} strokeWidth={2.2} />
        </a>
      </div>
    </header>
  );
}
