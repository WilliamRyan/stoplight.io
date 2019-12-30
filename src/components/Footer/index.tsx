import cn from 'classnames';
import * as React from 'react';
import { withSiteData } from 'react-static';

import { Icon, IconProp } from '../Icon';
import { Image } from '../Image';
import { Link } from '../Link';

interface IFooterColumnLink {
  title: string;
  href: string;
  onClick: string;
}

interface IFooterColumn {
  title: string;
  links: IFooterColumnLink[];
}

interface IFooterSocial {
  href: string;
  icon: IconProp;
}

interface IFooterLegal {
  title: string;
  href: string;
}

export interface IFooter {
  columns: IFooterColumn[];
  social: IFooterSocial[];
  legal: IFooterLegal[];
}

export interface IFooterProps {
  bg?: string;
  noBorder?: boolean;
}

export const Footer: React.FunctionComponent<{ footer: IFooter } & IFooterProps> = ({
  footer,
  bg = 'black',
  noBorder,
}) => {
  const { columns, social, legal } = footer;

  return (
    <footer
      className={cn(`bg-${bg} py-12 z-5 relative`, {
        'border-t-4 border-lighten-300': !noBorder,
      })}
    >
      <nav className="container mx-auto flex flex-col items-center" style={{ maxWidth: 1000 }}>
        <div className="py-4">
          <Link to="/">
            <Image className="h-16 hover:opacity-75" src="/images/robot-dude.svg" alt="Logo" />
          </Link>
        </div>

        {columns && (
          <div className="flex flex-wrap justify-between py-8 w-full">
            {columns.map((column, index) => {
              return (
                <div key={index}>
                  <div className="font-bold text-grey-light py-2">{column.title}</div>

                  {column.links &&
                    column.links.map((link, columnIndex) => {
                      return (
                        <Link
                          key={columnIndex}
                          to={link.href}
                          className="cursor-pointer text-grey hover:text-grey-lighter block py-2"
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap justify-around py-8 w-full">
          <Link className="block text-grey pr-4" to="/">
            &copy; {new Date().getFullYear()} Stoplight
          </Link>

          {legal && (
            <div className="flex-1 text-center">
              {legal.map((link, index) => {
                const elems = [
                  <Link key={index} to={link.href} className="text-grey hover:text-grey-lighter">
                    {link.title}
                  </Link>,
                ];

                if (index > 0) {
                  elems.unshift(
                    <span key={`${index}-sep`} className="mx-2">
                      |
                    </span>
                  );
                }

                return elems;
              })}
            </div>
          )}

          {social && (
            <div>
              {social.map((link, index) => {
                const elems = [
                  <Link key={index} to={link.href} className="text-grey hover:text-grey-lighter">
                    <Icon icon={link.icon} size="lg" />
                  </Link>,
                ];

                if (index > 0) {
                  elems.unshift(<span key={`${index}-sep`} className="mx-3" />);
                }

                return elems;
              })}
            </div>
          )}
        </div>
      </nav>
    </footer>
  );
};

export default withSiteData(Footer);
