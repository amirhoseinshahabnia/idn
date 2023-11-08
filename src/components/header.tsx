import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 py-4 lg:px-24 lg:py-6 border-b border-gray-900 sticky top-0 z-50 bg-black bg-opacity-60 backdrop-blur">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="hover:opacity-80">
          شبکه ایرانیان دیاسپورا
        </Link>
      </div>
    </header>
  );
}
