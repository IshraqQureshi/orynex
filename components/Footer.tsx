import Image from 'next/image';
import { footer } from '@/content/site';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Image src="/images/logo-white.png" alt="Orynex Tech" width={137} height={42} style={{ height: 42, width: 'auto' }} />
            <p className="tagline">{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="wordmark" aria-hidden="true">oryne<span>x</span></div>
        <div className="foot-bottom">
          <span>{footer.copyright}</span>
          <span className="mono">{footer.strap}</span>
        </div>
      </div>
    </footer>
  );
}
