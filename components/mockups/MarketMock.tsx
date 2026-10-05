import { mocks } from '@/content/site';
import Icon from '../ui/Icon';

export default function MarketMock() {
  const m = mocks.market;
  return (
    <div className="mock" aria-label={m.label}>
      <div className="mock-bar"><i></i><i></i><i></i></div>
      <div className="gw"><Icon name="plus" size={15} strokeWidth={2.2} />{m.gateway}</div>
      <div className="svcs12">
        {m.hot.map((s) => <div className="hot" key={s}>{s}</div>)}
        {m.plain.map((s) => <div key={s}>{s}</div>)}
      </div>
      <div className="mono" style={{ fontSize: 11, color: '#566079', marginTop: 10 }}>{m.footer}</div>
    </div>
  );
}
