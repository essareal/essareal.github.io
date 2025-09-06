import { Section } from '../layout/Section';

const Contact = () => (
  <Section id="contact">
    <div className="text-center">
      <div className="bg-primary-50 mx-auto max-w-md rounded-lg p-8 shadow-lg">
        <div className="text-primary-900">
          <div className="arabic-text mb-6 text-2xl font-bold">
            عصام الرصيّص
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-6 rtl:space-x-reverse">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/966590008626"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-xl text-primary-700 transition-colors duration-200 hover:text-primary-800 hover:opacity-80"
            >
              <img
                src="/assets/icons/whatsapp.svg"
                alt="WhatsApp"
                className="mb-2 size-8"
              />
              <span>WhatsApp</span>
            </a>

            {/* Phone Link */}
            <a
              href="tel:+966590008626"
              className="flex flex-col items-center text-xl text-primary-700 transition-colors duration-200 hover:text-primary-800 hover:opacity-80"
            >
              <img
                src="/assets/icons/phone.svg"
                alt="Phone"
                className="mb-2 size-8"
              />
              <span>Call</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:info@essamreal.com"
              className="flex flex-col items-center text-xl text-primary-700 transition-colors duration-200 hover:text-primary-800 hover:opacity-80"
            >
              <img
                src="/assets/icons/email.svg"
                alt="Email"
                className="mb-2 size-8"
              />
              <span>Email</span>
            </a>
          </div>
          <div className="mt-6 flex flex-col items-center text-xl text-primary-700">
            <a
              href="tel:+966590008626"
              className="transition-colors duration-200 hover:text-primary-800"
            >
              +966 59 000 8626
            </a>
            <a
              href="mailto:info@essamreal.com"
              className="mt-2 transition-colors duration-200 hover:text-primary-800"
            >
              info@essamreal.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { Contact };
