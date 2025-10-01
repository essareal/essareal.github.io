import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  textColor?: string;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-col items-center">
    <div>{props.logo}</div>
    {/* small gray letters below the logo */}
    <div className="-mt-8 max-w-48 text-center text-sm leading-tight text-gray-500">
      شركة عصام عبدالله الرصيص للتطوير العقاري
    </div>

    <nav>
      <ul
        className={`navbar flex items-center text-xl font-medium ${
          props.textColor || 'text-gray-800'
        } md:space-x-8 md:space-x-reverse`}
      >
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
