import type { NextPageContext } from 'next';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

type IErrorProps = {
  statusCode: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
};

const getErrorTitle = (statusCode: number): string => {
  if (statusCode === 404) return 'Page not found';
  if (statusCode === 500) return 'Server error';
  return 'An error occurred';
};

const getErrorMessage = (statusCode: number): string => {
  if (statusCode === 404)
    return 'Sorry, we couldn&apos;t find the page you&apos;re looking for.';
  if (statusCode === 500) return 'Sorry, something went wrong on our end.';
  return 'An unexpected error has occurred.';
};

const Error = ({ statusCode }: IErrorProps) => (
  <div className="text-center">
    <Meta
      title={`Error ${statusCode}`}
      description={`${AppConfig.title} - Error ${statusCode}`}
    />

    <div className="mx-auto mt-12 w-full px-3">
      <div className="mx-auto max-w-screen-md">
        <div className="rounded-md border border-gray-300 px-6 py-16 shadow-xl">
          <div className="mx-auto max-w-md">
            <div className="text-6xl font-bold text-gray-900">{statusCode}</div>
            <div className="mt-2 text-2xl font-medium text-gray-600">
              {getErrorTitle(statusCode)}
            </div>
            <div className="mt-6 text-gray-500">
              {getErrorMessage(statusCode)}
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode || 500;
  }
  return { statusCode };
};

export default Error;
