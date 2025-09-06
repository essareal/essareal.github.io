import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  imageUrl?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={props.color}
    style={{
      backgroundImage: props.imageUrl ? `url(${props.imageUrl})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {props.children}
  </div>
);

export { Background };
