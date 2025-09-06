import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  textColor?: string;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>{props.logo}</div>
    <nav>
      <ul
        className={`navbar mt-4 flex items-center text-xl font-medium ${
          props.textColor || 'text-gray-800'
        } md:mt-0 md:space-x-8 md:space-x-reverse`}
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
