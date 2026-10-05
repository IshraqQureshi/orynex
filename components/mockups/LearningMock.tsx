import { mocks } from '@/content/site';

export default function LearningMock() {
  const m = mocks.learning;
  return (
    <div className="mock" aria-label={m.label}>
      <div className="mock-bar"><i></i><i></i><i></i></div>
      <div className="mono-box">
        <small className="mono">{m.caption}</small>
        <div className="mods">
          {m.modules.map((x) => <div className={x.hot ? 'hot' : undefined} key={x.name}>{x.name}</div>)}
        </div>
      </div>
      <div className="mono" style={{ fontSize: 11, color: '#566079', marginTop: 10 }}>{m.footer}</div>
    </div>
  );
}
