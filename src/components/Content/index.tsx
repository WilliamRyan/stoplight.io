import cn from 'classnames';
import * as React from 'react';

import { useBanner } from '../../hooks/useBanner';
import { convertMarkdownToHTML } from '../../utils/markdown/index.js';
import { CallToAction } from '../CallToAction';
import { IInfo } from '../Info';
import { IQuote } from '../Quote';

export interface IContent {
  body: string;
  sidebar?: {
    info?: IInfo;
    quotes?: IQuote[];
  };
  includeToc?: boolean;
  className?: string;
}

export const Content: React.FunctionComponent<IContent> = ({ sidebar, includeToc, className, body }) => {
  const [isBannerShowing] = useBanner();
  const html = convertMarkdownToHTML(body, { includeToc: !sidebar && includeToc });

  return (
    <>
      {!sidebar && includeToc ? (
        <div
          className="sticky flex flex-col items-end -mr-20 -mb-40 z-10 md:-mr-6 m-auto w-1/6 sm:-mb-48 sm:py-8"
          style={{ top: isBannerShowing ? 140 : 80 }}
        >
          <div className="bg-grey-light p-4 rounded-lg shadow-md md:hidden">
            <p className="text-sm font-bold ml-6">Design APIs 10x Faster</p>
            <CallToAction
              className="z-5 mt-4 bg-grey-lightest"
              href="https://stoplight.io/studio/?utm_campaign=studio_blog"
              title="Download Studio"
              color="green"
              icon="arrow-right"
              outlined
            />
            <p className="text-sm italic ml-8 mt-4">Free. Runs everywhere.</p>
          </div>
        </div>
      ) : null}

      <div className={cn('markdown-body pt-10 md:mt-20', { 'has-banner': isBannerShowing })}>
        <div
          className={cn(className, { 'm-auto': !sidebar && !includeToc })}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
};
