import { Section } from '../layout/Section';

const Sponsors = () => (
  <Section
    title="إحصائياتنا الناجحة"
    description="أرقام تتحدث عن نفسها وتؤكد ثقة المستثمرين في منصتنا"
  >
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary-600">+500</div>
        <div className="mt-2 text-lg text-gray-700">مستثمر راضٍ</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary-600">18%</div>
        <div className="mt-2 text-lg text-gray-700">عائد سنوي متوسط</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary-600">+2B</div>
        <div className="mt-2 text-lg text-gray-700">ريال مستثمر</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary-600">16</div>
        <div className="mt-2 text-lg text-gray-700">شهر متوسط الاستثمار</div>
      </div>
    </div>
  </Section>
);

export { Sponsors };
