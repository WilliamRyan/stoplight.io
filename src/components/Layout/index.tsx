import * as React from 'react';

import Analytics from 'src/components/Analytics';
import Footer, { IFooterProps } from 'src/components/Footer';
import Header, { IHeader } from 'src/components/Header';
import { BannerVisibilityProvider } from '../../hooks/useBanner';

export interface ILayout {
  header?: Partial<IHeader>;
  footer?: Partial<IFooterProps>;
}

export const Layout: React.FunctionComponent<ILayout> = ({ children, header, footer }) => {
  return (
    <BannerVisibilityProvider>
      <Analytics>
        <Header {...header} />

        <div className="relative bg-grey-lightest">{children}</div>

        <Footer {...footer} />
      </Analytics>
    </BannerVisibilityProvider>
  );
};
