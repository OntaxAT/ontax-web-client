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
        <div className="bg-primary dark:bg-slate-800 p-10 flex flex-col text-white">
          <div className="grow">
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
