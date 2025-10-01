import className from 'classnames';

import { ScrollAnimation } from '../animation/ScrollAnimation';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const textVariants = {
    hidden: { opacity: 0, x: props.reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:px-6">
        <ScrollAnimation variants={textVariants}>
          <div>
            <h3 className="text-3xl font-semibold text-gray-900">
              {props.title}
            </h3>
            <div className="mt-6 text-xl leading-9">{props.description}</div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
