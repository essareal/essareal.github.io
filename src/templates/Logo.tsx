import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '160' : '32';

  return (
    <span
      className={`inline-flex items-center ${
        props.xl ? 'text-white' : 'text-gray-900'
      }`}
    >
      <img
        src="/apple-touch-icon.png"
        alt={AppConfig.site_name}
        width={size}
        height={size}
      />
    </span>
  );
};

export { Logo };
