import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        {/* Cafe Name and Description */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white">Cozy Café</h3>
          <p className="text-sm mt-2">Your favorite spot for coffee and comfort.</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <Link href="https://www.facebook.com" className="mx-2 text-gray-300 hover:text-yellow-500 transition ">
            Facebook
          </Link>
          <Link href="https://www.instagram.com" className="mx-2 text-gray-300 hover:text-yellow-500 transition">
          Instagram
            
          </Link>
          <Link href="https://www.twitter.com" className="mx-2 text-gray-300 hover:text-yellow-500 transition">
          Twitter
            
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-sm">
          <p>&copy; 2024 Cozy Café. All rights reserved.</p>
          <p className="mt-1">123 Main Street, Hometown, Country | Call us: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}
