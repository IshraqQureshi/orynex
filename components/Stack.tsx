import { stack } from '@/content/site';
import Eyebrow from './ui/Eyebrow';

export default function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <div className="rv">
            <Eyebrow>{stack.eyebrow}</Eyebrow>
            <h2 className="h2">{stack.title}</h2>
          </div>
          <p className="lead rv">{stack.lead}</p>
        </div>
        <div className="st-grid">
          {stack.groups.map((g) => (
            <div className={`st${g.dark ? ' dark' : ''} rv`} key={g.title}>
              <h3><i></i>{g.title}</h3>
              <div className="tags">{g.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
