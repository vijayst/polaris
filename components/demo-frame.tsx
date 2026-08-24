export default function DemoFrame({
  src,
  title,
  height = 700,
}: {
  src: string;
  title: string;
  height?: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        loading="lazy"
        className="block max-w-full"
      />
    </div>
  );
}
