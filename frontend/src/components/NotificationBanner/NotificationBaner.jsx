// components/NotificationBanner.tsx
import React from "react";

export default function NotificationBanner() {
  return (
    <div className="w-full overflow-hidden bg-[#1E1E1E] text-white text-sm py-2">
      <div className="whitespace-nowrap animate-marquee flex items-center gap-2">
        <a
          href="https://www.coincover.com/blog/beware-of-fraudsters-impersonating-coincover"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          Beware of fraudsters impersonating CoinCover. We will never cold-call
          you and ask for your personal information. Read more here.
        </a>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            d="M9.9987 3.83203L8.8237 5.00703L13.4737 9.66536H3.33203V11.332H13.4737L8.8237 15.9904L9.9987 17.1654L16.6654 10.4987L9.9987 3.83203Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
