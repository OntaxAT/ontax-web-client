'use client';

import { FC, useEffect, useState } from 'react';
import { ILayoutProps } from '../types/layouts';
import Image from 'next/image';

const quotes = [
  {
    quote:
      "In the realm of business, there's an unwavering truth - the numbers never lie, serving as the compass that guides us through the labyrinth of commerce.",
    author: 'John D. Rockefeller'
  },
  {
    quote:
      'Accounting, the language of business, is the bridge that connects aspirations to actions, transforming dreams into economic reality.',
    author: 'Warren Buffett'
  },
  {
    quote:
      'The heartbeat of business is the customer, and successful enterprises are those that not only serve but inspire their clientele to become ambassadors of their brand.',
    author: 'Shiv Singh'
  },
  {
    quote:
      'In the world of commerce, the art of negotiation is the fulcrum upon which fortunes pivot, where the skillful dance between interests dictates outcomes',
    author: 'Chester L. Karrass'
  },
  {
    quote:
      'Within the numerical tapestry of business, every digit is a brushstroke, every ledger a canvas, and every financial statement a masterpiece in the making.',
    author: 'Warren Buffett'
  },
  {
    quote:
      'Predicting the future in business is an act of creation, where entrepreneurs craft their destinies through innovation, determination, and relentless pursuit of excellence.',
    author: 'Peter Drucker'
  },
  {
    quote:
      'In the corporate landscape, compensation comes in the form of two currencies - experience, which is your teacher, and cash, which is your paycheck. Embrace the lessons, and the rewards will follow.',
    author: 'Harold S. Geneen'
  },
  {
    quote:
      "Accounting, a true art, is more than just number-crunching; it is the chronicler of a company's journey, capturing the narrative of its successes and challenges, painting a story with financial strokes.",
    author: 'Charles W. Mulford'
  },
  {
    quote:
      "When the winds of adversity blow in the business world, it's not the fall that defines you but the resilience to rise again, stronger and wiser.",
    author: 'Vince Lombardi'
  },
  {
    quote:
      "Accounting is not the calculus of commerce; it is the comprehension of companies. It's about peering beyond the numbers and into the heart of enterprises, decoding their stories, and revealing their essence.",
    author: 'Warren Buffett'
  }
];

const AuthLayout: FC<ILayoutProps> = ({ children }) => {
  const [quote, setQuote] = useState<(typeof quotes)[number]>();

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen relative">
      <div className="container h-[60vh] rounded-2xl shadow-xl grid grid-cols-2 p-0 overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
        <div className="bg-primary dark:bg-slate-800 p-10 flex flex-col text-white relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="603"
            height="603"
            viewBox="0 0 800 800"
            className="absolute w-full h-full top-[-2.5rem] left-[-2.5rem] opacity-70"
          >
            {/* <rect fill="#330033" width="800" height="800" /> */}
            <g fill="none" stroke-width="1" className="stroke-blue-900/30">
              <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
              <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" />
              <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" />
              <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382" />
              <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269" />
            </g>
            <g fill="#505" className="fill-blue-900/50">
              <circle cx="769" cy="229" r="5" />
              <circle cx="539" cy="269" r="5" />
              <circle cx="603" cy="493" r="5" />
              <circle cx="731" cy="737" r="5" />
              <circle cx="520" cy="660" r="5" />
              <circle cx="309" cy="538" r="5" />
              <circle cx="295" cy="764" r="5" />
              <circle cx="40" cy="599" r="5" />
              <circle cx="102" cy="382" r="5" />
              <circle cx="127" cy="80" r="5" />
              <circle cx="370" cy="105" r="5" />
              <circle cx="578" cy="42" r="5" />
              <circle cx="237" cy="261" r="5" />
              <circle cx="390" cy="382" r="5" />
            </g>
          </svg>
          <div className="grow z-10">
            <Image
              src="/ontax_logo_transparent.svg"
              alt="Ontax branding"
              width={50}
              height={50}
              className="inline-block align-middle"
            />
            <span className="pl-3 text-lg align-middle">Ontax</span>
          </div>
          {quote && (
            <div className="text-lg">
              <p>"{quote.quote}"</p>
              <p className="text-base mt-2 opacity-90">{quote.author}</p>
            </div>
          )}
        </div>
        <div className="p-10 flex items-center relative">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
