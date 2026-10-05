import Image from 'next/image';
import type { CaseData } from '@/content/site';
import LibraryMock from './mockups/LibraryMock';
import MarketMock from './mockups/MarketMock';
import LearningMock from './mockups/LearningMock';

const mockups = { library: LibraryMock, market: MarketMock, learning: LearningMock };

export default function CaseStudy({ data }: { data: CaseData }) {
  const Mock = mockups[data.mock];
  return (
    <article className={`case${data.flip ? ' flip' : ''}`}>
      <div className="case-media rv-s">
        <Image src={data.image} alt="" fill sizes="(max-width: 1080px) 100vw, 700px" />
        <Mock />
      </div>
      <div className="case-copy rv">
        <div className="cat mono">{data.cat}</div>
        <h3>{data.title}</h3>
        <p className="story">{data.story}</p>
        <div className="kpis">
          {data.kpis.map((k) => (
            <div key={k.label}><b>{k.value}</b><span>{k.label}</span></div>
          ))}
        </div>
        <p className="pull">{data.pull}</p>
        <div className="stack-tags">{data.stack.map((s) => <span key={s}>{s}</span>)}</div>
      </div>
    </article>
  );
}
