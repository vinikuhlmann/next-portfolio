export default function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="mb-5 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        {text}
      </h2>
      <hr className="mx-auto mb-5 bg-black dark:bg-white" />
    </div>
  );
}