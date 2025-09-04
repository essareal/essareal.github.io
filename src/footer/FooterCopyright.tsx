import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-copyright px-4 py-2 text-center sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-1 text-sm leading-relaxed sm:text-base">
        <span className="whitespace-nowrap">© Copyright {currentYear}</span>
        <span className="font-medium text-primary-600 dark:text-primary-400">
          {AppConfig.title}
        </span>
        <span className="whitespace-nowrap">
          . Made with{' '}
          <a
            href="https://creativedesignsguru.com"
            className="inline-flex items-center rounded-sm transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            CreativeDesignsGuru
          </a>
          .
        </span>
      </div>
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
