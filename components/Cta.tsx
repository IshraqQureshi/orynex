import { cta } from '@/content/site';
import BgPicture from './ui/BgPicture';
import Button from './ui/Button';
import Eyebrow from './ui/Eyebrow';
import Icon from './ui/Icon';

export default function Cta() {
  return (
    <section className="cta on-dark" id="contact">
      <div className="cta-bg">
        <BgPicture name="cta" src="/images/cta.jpg" width={2600} height={1200} />
      </div>
      <div className="wrap cta-in">
        <div className="cta-copy rv">
          <Eyebrow>{cta.eyebrow}</Eyebrow>
          <h2>{cta.titleLead}<em>{cta.titleEm}</em></h2>
          <p>{cta.text}</p>
        </div>
        <div className="cta-card rv-s">
          <small>{cta.cardLabel}</small>
          <a className="mail" href={`mailto:${cta.email}`}>{cta.email}</a>
          <hr />
          <ul>
            {cta.checks.map((c) => (
              <li key={c}><Icon name="check" size={18} strokeWidth={2.4} />{c}</li>
            ))}
          </ul>
          <Button href={cta.buttonHref} arrow={18}>{cta.button}</Button>
        </div>
      </div>
    </section>
  );
}
