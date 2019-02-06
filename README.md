# Solace theme for Jekyll

- Lightweight, streamlined design. Eliminate distractions. Let the reader focus on your content.
- Focus on blog content, with clean and easy support for other page types.
- Easy to customize all functionality and styling.


## Features

1. Simple, clean design that's responsive, mobile-friendly, and easily customizable.
2. Intuitive blog presentation and navigation.
3. Automatic inclusion of new pages in main navigation.
4. Featured categories for blog content in main navigation.
5. Easily extended Sass modules, so you can customize the look & feel.
6. Available as a theme gem for GitHub pages.

## Installation for GitHub Pages

1. Add `gem "jekyll-solace-theme"` to your `Gemfile` to track the dependency
2. Add `jekyll-remote-theme` to the list of `plugins` in your `_config.yml` file
3. Add `remote_theme: samba/jekyll-solace-theme` to your `_config.yml` file to set the site theme
4. Run `bundle exec jekyll serve` to build and serve your site


## Adding Pages in the Navigation menu

By default, all pages in the `pages` directory get listed in the navigation menu.

This theme allows for pages to be excluded by adding a property to their frontmatter, `menu: false`.
These pages will still be rendered, navigable by search engines, etc, but they will be excluded from the main navigation menu.

An example of _disabling_ the listing of a specific page is provided at: [`pages/three.md`](pages/three.md)

__Other notes__:
- Jekyll [basically distinguishes `posts` by their origin in `_posts` directory][1]. Posts are not included in the menu.


[1]: https://ben.balter.com/2015/02/20/jekyll-collections/
