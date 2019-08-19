import cn from 'classnames';
import * as React from 'react';

import { Icon } from '../Icon';
import { Link } from '../Link';
import { Portal } from '../Portal';
import { IHeaderItem } from './index';

export interface IMobileHeader {
  items: IHeaderItem[];
}

export interface IMobileHeaderState {
  showMenu: boolean;
}

export class Mobile extends React.Component<IMobileHeader, IMobileHeaderState> {
  public state = {
    showMenu: false,
  };

  public render() {
    const { items = [] } = this.props;
    const { showMenu } = this.state;
    const [main, ...other] = items.filter(item => !item.hideMobile);
    const extras = other.filter(item => !item.isButton);
    const buttons = other.filter(item => item.isButton);

    return (
      <div className="hidden md:flex flex-1 justify-end">
        <span onClick={() => this.setState({ showMenu: true })}>
          <Icon icon={['fad', 'bars']} className="cursor-pointer ml-3 text-white" size="2x" />
        </span>

        {showMenu && (
          <Portal>
            <div className="fixed pin z-50 flex flex-col overflow-y-auto">
              <div className="relative m-4 pt-6 bg-white rounded" onClick={() => this.setState({ showMenu: false })}>
                <div className="px-6">
                  <div className="absolute pin-t pin-r p-4 flex items-center">
                    <span onClick={() => this.setState({ showMenu: false })}>
                      <Icon icon={['fad', 'times']} className="cursor-pointer text-grey" size="lg" />
                    </span>
                  </div>

                  {main && (
                    <div className="text-md">
                      <div className="pb-2 uppercase font-bold text-grey-darker">{main.title}</div>

                      <div className="flex flex-wrap">
                        {main.links &&
                          main.links.map((product, index) => {
                            return (
                              <Link key={index} to={product.href} className="w-1/2 flex items-center text-black py-4">
                                {product.icon && (
                                  <Icon
                                    className={cn(product.titleColor && `text-${product.titleColor}`)}
                                    icon={product.icon}
                                  />
                                )}

                                <div className="flex-1 ml-3">
                                  <div className={cn('font-bold', product.titleColor && `text-${product.titleColor}`)}>
                                    {product.title}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  )}

                  {extras &&
                    extras.length > 0 &&
                    extras.map((item, index) => {
                      if (item.links && item.links.length) {
                        return (
                          <>
                            <div className="border-t py-3 mt-3 -mx-2" />

                            <div className="pb-2 uppercase font-bold text-grey-darker">{item.title}</div>

                            <div className="flex flex-wrap mb-4">
                              {item.links.map((link, linkIndex) => (
                                <Link key={linkIndex} to={link.href} className="w-1/2 py-4 font-bold text-md">
                                  {link.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        );
                      }

                      return (
                        <Link key={index} to={item.href} className="w-1/2 py-4 font-bold text-md">
                          {item.title}
                        </Link>
                      );
                    })}
                </div>

                {buttons &&
                  buttons.map(button => (
                    <Link
                      key={button.title}
                      to={button.href}
                      className="w-full p-4 bg-primary text-white block text-center font-bold mt-6"
                    >
                      {button.title}
                    </Link>
                  ))}
              </div>
              <div className="flex-grow" onClick={() => this.setState({ showMenu: false })} />
            </div>
          </Portal>
        )}
      </div>
    );
  }
}
