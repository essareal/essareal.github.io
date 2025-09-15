import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  imageUrl?: string;
  blur?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className="relative">
    {props.imageUrl && (
      <div
        className={`absolute inset-0 ${props.blur}`}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
    )}
    <div className={props.color}>{props.children}</div>
  </div>
);

export { Background };
