---
path: >-
  /blog/stoplight-v1-1-5-release
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2019-10-02T14:00:00.059Z
author: Robert Wallach
title: Stoplight v1.1.5 Release
subtitle: 'Platform, Studio, and Prism'
image: /images/changelog-stock.jpg
color: black
disqus:
  enabled: true
actionBar:
  ctas:
    - color: purple
  enabled: false
meta:
  description: 'Platform, Studio, and Prism'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v1.1.5 Release| Stoplight API Corner
  image: /images/changelog-stock.jpg
  twitter:
    description: 'Platform, Studio, and Prism'
    title: Stoplight v1.1.5 Release | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---

## Platform v1.1.5

### Features
- Added "View in Docs" button to explorer read panel 
- Docs endpoint pages now display the method and path 
- Navigating between docs pages will now scroll you to the top of the page 
- Docs page table of contents is displayed as a popover on smaller screens

### Fixes
- Images in docs now point directly to the original repository, rather than to jsdeliver
- Parameters with long names no longer overflow into their type 
- Correctly shows how your docs will look on mobile screens in the docs preview 

## Studio v1.1.4

### Features

- Support operation parameter references
- Support running spectral rules on JSON schema files: [#122](https://github.com/stoplightio/studio/issues/122)

### Fixes

- Opening a project can sometimes get stuck on the "processing" screen indefinitely
- Project failing to open results in removed project folder
- Multiple line breaks in markdown cause strange issues: [#68](https://github.com/stoplightio/studio/issues/68)
- Request/response examples display an error in the read view: [#80](https://github.com/stoplightio/studio/issues/80)
- Right click context menu not working in file tree for non git projects
- Expanding editor window with diagnostics panel causes error in UI: [#94](https://github.com/stoplightio/studio/issues/94)

## Prism v3.1.1

### Fixes

- Prism is now giving precedence to application/json instead of using it as a "fallback" serializer, fixing some conditions where it wouldn't get triggered correctly: [#599](https://github.com/stoplightio/prism/issues/599)
- Prism is now taking in consideration the required properties for combined schemas (oneOf, allOf): [#575](https://github.com/stoplightio/prism/issues/575)
- Prism will never have enough information to return a 403 status code; all these occurrences have been now replaced with a 401status code which is more appropriate: [#624](https://github.com/stoplightio/prism/issues/624)
- Prism is now negotiating the error response dynamically based on the validation result (security or schema validation) instead of always returning a static order of responses: [#591](https://github.com/stoplightio/prism/issues/591)
- Prism is now selecting proper serializer when Accept header contains content type which is missing in spec: [#589](https://github.com/stoplightio/prism/issues/589)
- HEAD requests no longer fail with 406 Not Acceptable: [#575](https://github.com/stoplightio/prism/issues/575)
