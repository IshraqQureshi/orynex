import { Fragment } from 'react';
import { marqueeItems, marqueeLabel } from '@/content/site';

function Items() {
  return (
    <>
      {marqueeItems.map((item) => (
        <Fragment key={item}>{item}<b></b></Fragment>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Capabilities">
      <div className="mq-row">
        <div className="mq-label mono">{marqueeLabel}</div>
        <div className="mq-mask">
          <div className="mq-track">
            <span><Items /></span>
            <span aria-hidden="true"><Items /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
