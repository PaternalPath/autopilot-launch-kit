import Link from "next/link";
import { siteConfig } from "@/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{siteConfig.siteName}</h3>
            <p className="mt-2 text-sm text-gray-600">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <ul className="mt-2 space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/intake" className="text-sm text-gray-600 hover:text-blue-600">
                  Request Setup
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {currentYear} {siteConfig.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
