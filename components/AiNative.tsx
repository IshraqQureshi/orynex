import Image from 'next/image';
import { Fragment } from 'react';
import { ai } from '@/content/site';
import Eyebrow from './ui/Eyebrow';

export default function AiNative() {
  return (
    <section className="ai on-dark" id="ai">
      <div className="wrap">
        <div className="ai-grid">
          <div className="ai-copy rv">
            <Eyebrow>{ai.eyebrow}</Eyebrow>
            <h2 className="h2" style={{ marginTop: 20 }}>{ai.titleLead}<em>{ai.titleEm}</em></h2>
            <p className="lead">{ai.lead}</p>
            <div className="eq">
              {ai.equation.map((e, i) => (
                <Fragment key={e.label}>
                  {i > 0 ? <b>{i === 1 ? '+' : '='}</b> : null}
                  <div className={e.result ? 'res' : undefined}><small>{e.small}</small>{e.label}</div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="ai-art rv-s">
            <Image src="/images/ai-sphere.jpg" alt={ai.imageAlt} width={1800} height={1800} sizes="(max-width: 1080px) 100vw, 560px" />
          </div>
        </div>
        <div className="helps rv">
          {ai.helps.map((h, i) => (
            <div key={h}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{h}</div>
          ))}
        </div>
        <p className="ai-close rv">{ai.closeLead}<strong>{ai.closeStrong}</strong></p>
      </div>
    </section>
  );
}
