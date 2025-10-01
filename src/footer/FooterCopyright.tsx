import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-copyright px-4 py-2 text-center sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-1 text-sm leading-relaxed sm:text-base">
        © Copyright {currentYear} {AppConfig.title}.
      </div>
      <div className="mt-1 text-sm">
        شركة عصام عبدالله الرصيص للتطوير العقاري
      </div>
      <div className="mt-1 text-sm">رقم السجل التجاري: 7050947402</div>
      {/*
       * PLEASE READ THIS SECTION
       * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
       */}
      <style jsx>
        {`
          .footer-copyright :global(a) {
            @apply text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300;
          }

          .footer-copyright :global(a:hover) {
            @apply underline;
          }

          /* RTL support for Arabic */
          [dir='rtl'] .footer-copyright {
            direction: rtl;
          }

          [dir='rtl'] .footer-copyright .flex {
            direction: rtl;
          }

          /* Mobile-first responsive typography */
          @media (max-width: 640px) {
            .footer-copyright {
              font-size: 0.875rem;
              line-height: 1.6;
            }
          }

          /* Improve readability on mobile */
          @media (max-width: 480px) {
            .footer-copyright .flex {
              flex-direction: column;
              gap: 0.25rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export { FooterCopyright };
