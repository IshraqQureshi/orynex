import { audience } from '@/content/site';
import Eyebrow from './ui/Eyebrow';
import Icon from './ui/Icon';

export default function Audience() {
  return (
    <section className="audience on-dark">
      <div className="wrap">
        <div className="rv">
          <Eyebrow>{audience.eyebrow}</Eyebrow>
          <h2 className="h2" style={{ marginTop: 20, maxWidth: 760 }}>{audience.title}</h2>
        </div>
        <div className="aud-list">
          {audience.items.map((a, i) => (
            <a className="aud rv-l" href="#contact" key={a.title}>
              <span className="k mono">{String(i + 1).padStart(2, '0')}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <span className="arr"><Icon name="arrow" size={18} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
