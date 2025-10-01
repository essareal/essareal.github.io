import { ScrollAnimation } from '../animation/ScrollAnimation';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Values } from './Values';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const defaultVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <ScrollAnimation variants={defaultVariants}>
        <Values />
      </ScrollAnimation>
      <VerticalFeatures />
      <ScrollAnimation variants={defaultVariants}>
        <Banner />
      </ScrollAnimation>
      <ScrollAnimation variants={defaultVariants}>
        <Contact />
      </ScrollAnimation>
      <Footer />
    </div>
  );
};
export { Base };
