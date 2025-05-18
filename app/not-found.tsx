import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-melixer-darker">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-melixer-light/70 mb-8">Oops! Page not found</p>
        <Link href="/" className="bg-gradient px-6 py-3 rounded-md text-white hover:opacity-90 transition-opacity">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
