import { services } from '@/content/site';
import Eyebrow from './ui/Eyebrow';
import Icon from './ui/Icon';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 className="h2">{services.title}</h2>
          </div>
          <p className="lead rv">{services.lead}</p>
        </div>
        <div className="svc-grid">
          {services.items.map((s, i) => (
            <article className={`svc${s.feature ? ' feature' : ''} rv`} key={s.title}>
              <span className="num mono">{String(i + 1).padStart(2, '0')}</span>
              <div className="ic"><Icon name={s.icon} size={24} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
