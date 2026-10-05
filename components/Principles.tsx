import { principles } from '@/content/site';
import Button from './ui/Button';
import Eyebrow from './ui/Eyebrow';
import Icon from './ui/Icon';

export default function Principles() {
  return (
    <section className="principles">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <Eyebrow>{principles.eyebrow}</Eyebrow>
            <h2 className="h2">{principles.title}</h2>
          </div>
        </div>
        <div className="pr-grid">
          {principles.items.map((p) => (
            <div className="pr rv" key={p.title}>
              <Icon className="ic" name={p.icon} size={30} strokeWidth={1.8} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="motto rv">
          <p>{principles.motto}<span>{principles.mottoEm}</span></p>
          <Button href="#contact">{principles.cta}</Button>
        </div>
      </div>
    </section>
  );
}
