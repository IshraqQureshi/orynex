import Image from 'next/image';
import { about } from '@/content/site';
import Eyebrow from './ui/Eyebrow';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy rv">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="h2" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="big" style={{ marginTop: 28 }}>{about.big}</p>
            <p>{about.body}</p>
          </div>
          <div className="about-visual rv-s">
            <Image className="par" src="/images/flow.jpg" alt={about.imageAlt} fill sizes="(max-width: 1080px) 100vw, 600px" />
            <div className="lifecycle">
              <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF7A55' }}>{about.lifecycleLabel}</div>
              <div className="lc-steps">
                {about.lifecycle.map((s) => <div key={s}>{s}</div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="stats">
          {about.stats.map((s) => (
            <div className="stat rv" key={s.value}>
              <div className="n">{s.value}{s.sup ? <sup>{s.sup}</sup> : null}</div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
