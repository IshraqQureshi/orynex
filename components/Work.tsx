import { work } from '@/content/site';
import CaseStudy from './CaseStudy';
import Eyebrow from './ui/Eyebrow';

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 20 }}>
          <div className="rv">
            <Eyebrow>{work.eyebrow}</Eyebrow>
            <h2 className="h2">{work.title}</h2>
          </div>
          <p className="lead rv">{work.lead}</p>
        </div>
        {work.cases.map((c) => <CaseStudy key={c.title} data={c} />)}
      </div>
    </section>
  );
}
