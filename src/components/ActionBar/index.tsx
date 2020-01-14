import cn from 'classnames';
import * as React from 'react';

import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';

export interface IActionBar {
  enabled: boolean;
  text: string;
  ctas: ICallToAction[];
  className?: string;
}

export const ActionBar: React.FunctionComponent<IActionBar> = props => {
  const { enabled, text, ctas, className } = props;

  if (!enabled) {
    return null;
  }

  const isCentered = !ctas || ctas.length > 2;

  return (
    <Container>
      <div
        className={cn(
          className,
          'ActionBar p-12 flex-wrap items-center sm:flex-col sm:justify-center bg-black rounded-lg shadow-md',
          {
            flex: !isCentered,
          },
        )}
      >
        {text && (
          <div
            className={cn('flex flex-1 font-semibold text-xl text-white sm:text-lg sm:text-center', {
              'pb-10 justify-center': ctas && ctas.length > 2,
            })}
          >
            {text}
          </div>
        )}

        {ctas && (
          <div
            className={cn(
              'flex-1 flex sm:justify-center sm:content-between sm:flex-wrap sm:mt-3',
              isCentered ? 'justify-center' : 'justify-end',
            )}
          >
            {ctas.map((cta, index) => (
              <CallToAction key={index} className={cn(index > 0 ? 'ml-4 sm:ml-0' : '', 'sm:my-3')} {...cta} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
