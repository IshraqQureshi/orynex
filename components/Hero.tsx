import { preload } from 'react-dom';
import { hero } from '@/content/site';
import BgPicture, { bgSrcSet } from './ui/BgPicture';
import Button from './ui/Button';
import Eyebrow from './ui/Eyebrow';

export default function Hero() {
  preload('/images/optimized/hero-1920.avif', {
    as: 'image',
    imageSrcSet: bgSrcSet('hero', 'avif'),
    imageSizes: '100vw',
    type: 'image/avif',
    fetchPriority: 'high',
  });
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <BgPicture name="hero" src="/images/hero.jpg" width={2400} height={1600} eager />
      </div>
      <div className="wrap hero-in">
        <Eyebrow className="load d1">{hero.eyebrow}</Eyebrow>
        <h1 className="load d2">{hero.titleLead}<em>{hero.titleEm}</em></h1>
        <p className="sub load d3">{hero.sub}</p>
        <div className="hero-cta load d4">
          <Button href="#contact" arrow={18}>Start a project</Button>
          <Button href="#work" variant="ghost">See our work</Button>
        </div>
        <div className="chips load d5">
          {hero.chips.map((c) => (
            <span className="chip" key={c}><i></i>{c}</span>
          ))}
        </div>
      </div>
      <span className="pulse" style={{ right: '19.6%', top: '37%' }}></span>
      <span className="pulse" style={{ right: '34%', top: '72%' }}></span>
      <div className="scroll-cue mono"><span></span>Scroll</div>
    </section>
  );
}
