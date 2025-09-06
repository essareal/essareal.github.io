import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Error500 = () => (
  <div className="text-center">
    <Meta
      title="Server error"
      description={`${AppConfig.title} - Server error`}
    />

    <div className="mx-auto mt-12 w-full px-3">
      <div className="mx-auto max-w-screen-md">
        <div className="rounded-md border border-gray-300 px-6 py-16 shadow-xl">
          <div className="mx-auto max-w-md">
            <div className="text-6xl font-bold text-gray-900">500</div>
            <div className="mt-2 text-2xl font-medium text-gray-600">
              Server error
            </div>
            <div className="mt-6 text-gray-500">
              Sorry, something went wrong on our end.
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Error500;
