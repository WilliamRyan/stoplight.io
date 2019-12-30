---
path: /blog/open-source-documentation
tags:
  - blog
  - blog-documentation
relatedTags:
  - blog-documentation
publishedDate: 2019-08-08T15:52:25.832Z
author: Taylor Barnett
title: Where the Wild Docs Are
subtitle: 'Where should open source documentation live? README or on a static site?'
listSubtitle: ''
image: /images/aaron-burden-nz2slpcvw1y-unsplash.jpg
color: black
includeToc: true
actionBar:
  ctas: []
  enabled: false
meta:
  description: 'Where should open source documentation live? README or on a static site?'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Where the Wild Docs Are | Stoplight API Corner
  image: /images/aaron-burden-nz2slpcvw1y-unsplash.jpg
  twitter:
    description: 'Where should open source documentation live? README or on a static site?'
    title: Where the Wild Docs Are | Stoplight API Corner
    image: /images/aaron-burden-nz2slpcvw1y-unsplash.jpg
    username: '@stoplightio'
  url: 'https://stoplight.io/blog/open-source-documentation'
---
A few months ago we began work on releasing two open source projects, [Spectral](https://stoplight.io/open-source/spectral/) and [Prism](https://stoplight.io/open-source/prism/). There was a lot of internal debate on whether we should create separate static documentation sites for them or have more of the documentation live within the GitHub repo. With a team of our size, we have to balance resources and what is best for the end user. So, I [created a Twitter poll](https://twitter.com/taylor_atx/status/1092832408322359297)! Turns out people had a lot of opinions on it. _(Opinions on the internet??? Never!)_

I asked: 
> "If an open source project has documentation in the readme within the repo and similar content in a static site, which are you more likely to look at?"

Out of 210 responses, 59% said README within repo, 29% static site, and 12% said it depends. 

I feel like even though 59% said README within repo, people were pretty split based on the replies. I want to break down some of the pros and cons of each of these approaches and what we decided to do for our projects. 

## Documentation within the GitHub repo

In this option, all documentation is stored and viewed within the repo where the project’s code lives.

![Example of Discourse docs on GitHub](/images/discourse_docs_example.png)

### Pros
**Findability**: It’s not uncommon for a user to randomly find a project on GitHub through different GitHub features likes stars, related projects, etc. By having the documentation within the repo, you increase findability of the project and its docs, versus having to click external links to other sites.

**Search**: GitHub has search built into it. We can complain all we want about it, but it is one less thing that needs to be implemented if you are hosting your own static docs on a separate site. In combination with the built-in search and [Cmd+F](https://twitter.com/quintenpowell/status/1092836948794839042), searching through the documentation isn’t too bad. 

[Peter Swimm said](https://twitter.com/peterswimm/status/1092934668561854464
): 
> "I just skew towards whatever is the most searchable and what is the most link-able. If a static site has anchor links and a search tool then it’s just as good."

**Docs live with the code**: I’m a big believer in the documentation for a project living as close as possible to the code. [Anne Gentle](https://twitter.com/annegentle)’s book, _[Docs as Code](https://www.docslikecode.com/)_, really pushed this. It makes it a lot easier to flag potential documentation changes that are needed when the code changes. As a developer, it is also easier to jump between docs and code when they live in the same place too. For example, if I am getting an error within a project, I am going to search both the docs and the actual code to figure out what might be going on. [As Leon Stigter said](https://twitter.com/LeonStigter/status/1092833446466998272), being in the repo can help him "understand the code" too.

> Note: This is less of an issue if you can host a static documentation site from your project’s main code repository. 

**Installation documentation**: The most important part of documentation is how to get started. It's useless without that. With GitHub’s new [Package Registry](https://github.com/features/package-registry) there is a push to couple package installation instructions with source code within a repository, which promotes the idea that installation documentation should be a prominent part of a GitHub repository.

### Cons
**Scaling is hard**: One giant page of documentation without some sort of sidebar navigation does not scale well for users. Yes, you can Cmd+F, but how do you even know what words to search for? Naturally, you would start moving to separate pages. Separate pages are fine, but you will have to rely heavily on a file based structure, which can get messy quickly if not linked well. All these options don’t scale well when compared to documentation with different sections and sidebar navigation.   

**Less customization**: You are dependent on GitHub Markdown and styling when you write your documentation. Sometimes there are things you would like to include in your styling, like [not allowing users to copy and paste $ in command line examples](https://stoplight.io/blog/writing-documentation-when-you-arent-a-technical-writer-part-one-ef08a09870d1/#copy-and-paste-bugs). It’s also much harder or impossible to add features like analytics within your docs or other custom JavaScript that could improve the user’s experience.

**It’s not your platform**: When you are using GitHub for your documentation, it is completely separate from your static site, community, forum, etc. This makes it harder to have a cohesive experience for your users to get help, build a community, navigate to other parts of your documentation or product, and will impact SEO. I know sometimes SEO feels like a bunch of sorcery, but it is important to consider it for your documentation since it does have value. 

## Documentation on a Static Site

Another approach uses the GitHub README (and often repo description) to send potential users to a separate site for documentation.

![Example of Netlify CMS docs on a GitHub](/images/netlify_cms_github.png)

![Example of Netlify CMS docs on a static site](/images/netlify_cms_docs.png)

### Pros
**It’s your platform**: You can craft the full experience of your documentation when you have it on your own static site, weaving together different projects, documentation, and resources together for a cohesive experience. Also, you get the SEO benefits for your own domain. 

**More customization**: Markdown has its limitations, particularly in regards to design and layout customization. _cough Markdown tables cough_ If you need complete control over your documentation's design and layout and can’t figure out a good hacky solution, static sites are the way to go to provide these additional features. For example, what if you want to add sidebar table of contents to make navigation easier for your users? It might also be important to you for it to feel part of your brand through certain styling, which is only possible with your own static site.  

**Scaling isn’t as hard**: It is much easier to scale your documentation when you are not restricted by the GitHub design. You can make choices that make sense for the design of your API. Maybe you still have almost everything on one page or maybe you break it up with sidebar navigation, it is up to you to decide. As [Margaret Eker said](https://twitter.com/meker/status/1093126795438841856), if there's a long, complex README with multiple sections and headings, then a static site is easier for navigation. While scaling isn’t necessarily easy on a static site because you still need to make important information design decisions, it is more flexible. 

### Cons
**No search**: There are a couple of popular search solutions that documentation sites have been using like [Algolia](https://www.algolia.com/) and [Swiftype](https://swiftype.com/), but you still have to implement them even though they are mostly packaged up nicely for you. 

**More maintenance**: Static site generators aren’t really a new idea, but they have come a long way in terms of creation and deployment. This doesn’t mean there isn’t some maintenance needed. As [Adam DuVander](https://twitter.com/adamd) mentioned in his [blog post](https://stoplight.io/blog/api-documentation-build-buy/#hosting-and-maintaining-api-reference-documentation) about whether you should buy or build documentation, "you likely have a whole new deploy process. Finding the right publication workflow can be a surprising barrier for some teams, especially if they are not already hosting other microsites. The initial build is a milestone, not an end. As you make changes, you’ll need to redeploy. This sort of maintenance is an area often overlooked with any documentation."

**Separate from where the code lives**:  As I mentioned before, it can be useful to have the docs and code to live in the same place. For example, when a developer makes a change to the project, it is a lot easier for them to update the documentation in the same pull request so that the docs stay up to date. Otherwise, it is really easy for the code and the documentation to diverge if updates aren’t made around the same time. 

There is a workaround for this though! You can store your documentation for the static site in the same repository that the code lives in, even if the repo isn’t the focus of your documentation. I like to use tools like [Netlify](https://www.netlify.com/) that make it easier to build static sites as part of the code pull request, so then you can see the documentation updates too. 

## A Hybrid Approach

Use both a GitHub repo and static site, allowing each to do what they do best.

Many responses to the poll confirmed that users want a repo to have an introduction, quickstart (or installation instructions), and navigate them to more resources. It’s a place to “get started.”

This is why I propose a hybrid approach. It’s what we are actually moving towards within Prism and Spectral. Initially, it didn’t make sense for us to build out the static site right from the start, but now as the projects grow it makes more sense. 

![Preview of Spectral's future README](/images/spectral_readme_preview.png)

We will include an introduction, basic installation instructions, and more resources in the repo, but it will link out to our static site. As [Jeremy mentioned](https://twitter.com/IAmJerdog/status/1093122859092901888), it is also important to support users where they find the project. The site will also have the same introduction and expanded installation instructions for users that find the project through our website. 

[Jessica Parsons said](https://twitter.com/VeryThorough/status/1092836194470121472): 
> "Also, if I'm honest, I trust a project a little less when it doesn't have a docs site, because in my experience, projects that take the "all the docs you need are right here in the repo" approach often have poorer quality docs."

It's interesting that some automatically see a project with a static site as higher quality. What are you going to pick, an open source project with a decent static docs site or one where everything is in the README? It has more of an effect that you may believe. (Unrelated: Having a logo can also impress people.)

One concern is, what happens when content is repeated? That’s alright, as [Conrad said](https://twitter.com/beardaway/status/1093123452595326976), "not a failure in developer experience provided that both sources are up to date and are linked properly."

I’d recommend writing most of your documentation in Markdown in the repo and use a content management system (CMS) or static site generator (i.e. [Gatsby](https://www.gatsbyjs.org/), [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/)) that allows you to render that Markdown with styling on a static site. Just make sure to keep any documentation in the README up-to-date when changes are made to the documentation that is on the static site. 

As with many things, the best choice here is not black and white. We found a good balance with the hybrid approach: We will rely on the README for what it does best and will be pulling in docs to our static site for a complete experience.

