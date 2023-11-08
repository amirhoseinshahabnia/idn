import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="px-4 py-8 lg:p-24">
      <div className="flex flex-col max-w-5xl w-full lg:mx-auto">
        <h2 className="text-xl">صحفه مورد نظر پیدا نشد</h2>
        <Link href="/" className="hover:opacity-80 text-lime-500 underline">
          بازگشت به خانه
        </Link>
      </div>
    </section>
  );
}
