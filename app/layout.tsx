import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Platforms Starter Kit',
  description: 'Next.js template for building a multi-tenant SaaS.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [domain, setDomain] = useState(
  //   process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000'
  // );
  // const domains = ['localhost:3000', 'auradev.ai'];
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased`}>
        {/* TODO: Make this a dropdown component later */}
        {/* <div className='fixed top-2 right-2 z-50'>
          <select
            title='Select a domain'
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
              window.location.href = `http://${e.target.value}`;
            }}
            className='border rounded px-2 py-1'
          >
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div> */}
        {children}
      </body>
    </html>
  );
}
