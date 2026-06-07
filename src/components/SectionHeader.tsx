interface Props {
  idx: string;
  en: string;
}

export default function SectionHeader({ idx, en }: Props) {
  return (
    <header className="sec-head">
      <span className="sec-idx mono">{idx}</span>
      <h2 className="sec-en">{en}</h2>
      <span className="sec-rule" />
    </header>
  );
}
