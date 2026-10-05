import { process } from '@/content/site';
import Eyebrow from './ui/Eyebrow';

export default function Process() {
  const last = process.steps.length - 1;
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <Eyebrow>{process.eyebrow}</Eyebrow>
            <h2 className="h2">{process.title}</h2>
          </div>
          <p className="lead rv">{process.lead}</p>
        </div>
        <div className="steps">
          {process.steps.map((s, i) => (
            <div className={`step${i === 0 || i === last ? ' edge' : ''} rv`} key={s.title}>
              {s.noLine ? null : <span className="line"></span>}
              <div className="no mono">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
