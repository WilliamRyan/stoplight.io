import React from 'react';

import { IS_PRODUCTION, SITE_ROOT } from './settings';

function resolveMeta(defaultMeta = {}, meta = {}) {
  return {
    ...defaultMeta,
    ...meta,
    twitter: Object.assign({}, defaultMeta.twitter, meta.twitter),
    jld: Object.assign({}, defaultMeta.jld, meta.jld),
  };
}

export function Document({ Html, Head, Body, children, state }) {
  const { routeInfo, siteData = {} } = state;

  const { integrations = {}, info = {} } = siteData;
  const { intercom, hubspot, googleTagManager } = integrations || {};
  const { pagination = {}, meta: routeMeta, path } = (routeInfo && routeInfo.data) || {};

  const meta = resolveMeta(siteData.meta, routeMeta);
  const { jld } = meta;

  const companyInfo = JSON.stringify({
    '@context': 'http://schema.org/',
    '@type': 'Corporation',
    address: {
      '@type': 'PostalAddress',
      ...info.address,
    },
    email: info.email,
  });

  let robots = 'noindex, nofollow';
  if (IS_PRODUCTION) {
    robots = meta.robots || 'index, follow';
  }

  const __SL = {
    NODE_ENV: process.env.NODE_ENV,
    RELEASE_STAGE: process.env.RELEASE_STAGE,
  };

  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content={robots} />

        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content="stoplight.io" />
        <meta property="og:image" content={SITE_ROOT + meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitter.username} />
        <meta name="twitter:creator" content={meta.twitter.username} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description || meta.description} />
        <meta name="twitter:image" content={SITE_ROOT + meta.twitter.image} />

        <link rel="shortcut icon" href={meta.favicon} type="image/x-icon" />

        {meta.canonical && <link rel="canonical" href={meta.canonical} />}

        {!IS_PRODUCTION && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.CMS_MANUAL_INIT = true;`,
            }}
          />
        )}

        {IS_PRODUCTION &&
          googleTagManager && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManager}');`,
              }}
            />
          )}

        {IS_PRODUCTION && <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />}

        {IS_PRODUCTION &&
          intercom && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                window.intercomSettings = {
                  app_id: "${intercom}"
                };
                (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${intercom}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
              }}
            />
          )}

        {pagination.currentPage &&
          pagination.currentPage !== 1 && (
            <link
              rel="prev"
              href={`${SITE_ROOT}${path}/${pagination.currentPage === 2 ? '' : `page/${pagination.currentPage - 1}/`}`}
            />
          )}

        {pagination.currentPage &&
          pagination.currentPage !== pagination.totalPages && (
            <link rel="next" href={`${SITE_ROOT}${path}/page/${pagination.currentPage + 1}/`} />
          )}

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          console.log("Interested in working for Stoplight? Check out our jobs listing: https://stoplight.io/careers");
          window.__SL = ${JSON.stringify(__SL)};
          `,
          }}
        />

        <script src="https://kit.fontawesome.com/eb61f169e7.js" />
      </Head>

      <Body className="font-sans">
        {IS_PRODUCTION &&
          googleTagManager && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${googleTagManager}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
        {children}

        {IS_PRODUCTION &&
          hubspot && (
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src={`//js.hs-scripts.com/${hubspot}.js`}
            />
          )}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: companyInfo }} />

        {jld.breadCrumbs && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: meta.jld.breadCrumbs }} />
        )}

        {jld.article && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: meta.jld.article }} />}
      </Body>
    </Html>
  );
}
