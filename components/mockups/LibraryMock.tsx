import { mocks } from '@/content/site';
import Icon from '../ui/Icon';

export default function LibraryMock() {
  const m = mocks.library;
  return (
    <div className="mock" aria-label={m.label}>
      <div className="mock-bar"><i></i><i></i><i></i></div>
      <div className="search">
        <Icon name="search" size={18} strokeWidth={2.2} />
        <span>{m.query}<span className="caret"></span></span>
      </div>
      <div className="answer"><b>{m.answerTitle}</b>
        {m.bars.map((w) => <div className="bar" style={{ width: w }} key={w}></div>)}
      </div>
      <div className="langs">{m.langs.map((l) => <span key={l}>{l}</span>)}</div>
    </div>
  );
}
