import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-blue-900">
      {props.title}
    </h1>
    <div className="mt-4 text-2xl text-blue-800">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
