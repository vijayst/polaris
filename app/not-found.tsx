import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <p className="text-6xl font-bold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
