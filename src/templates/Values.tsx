import { Section } from '../layout/Section';

const Values = () => (
  <Section id="values" title="قيمنا" description="">
    <div className="grid grid-cols-1 gap-4 text-right md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border p-4">
        <h3 className="mb-2 text-xl font-bold">الشفافية</h3>
        <p>نتعامل بصدق مع العملاء ونوفر معلومات مُفصّلة ومحدّثة.</p>
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="mb-2 text-xl font-bold">الريادة</h3>
        <p>ننتهج سياسة الابتكار في تقديم خدمات متميزة.</p>
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="mb-2 text-xl font-bold">المصداقية</h3>
        <p>نحافظ على سمعتنا ومصداقيتنا، عبر الالتزام بالنزاهة.</p>
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="mb-2 text-xl font-bold">الاستدامة</h3>
        <p>ننفذ مشاريعنا بالحفاظ على الموارد الطبيعية.</p>
      </div>
    </div>
  </Section>
);

export { Values };
