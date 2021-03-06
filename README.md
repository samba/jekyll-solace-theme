
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
6. Available as a theme gem for GitHub Pages.
7. Provides easy defaults for all packaged Jekyll features in GitHub Pages.

## Installation for GitHub Pages

For new sites:

1. Add `gem "jekyll-remote-theme"` to your `Gemfile` to track the dependency.
2. Copy this project's [_config.yml](./_config.yml) to your site.
3. Uncomment line 6 in your site's copy of `_config.yml`.
4. Rename `home.html` to `index.html` and remove its `title` attribute.
5. Run `bundle exec jekyll serve` to build and serve your site.

For existing sites, the following parts of [_config.yml](./_config.yml) should be copied:

1. `remote_theme` (commented out in default, must be uncommented)
2. `navigation` 
3. `titles_from_headings`
4. `paginate`, `paginate_path`, and `permalink`
5. `defaults` section

All of these settings should be customizable as you see fit, however the theme code expects/requires them to be present.

## Creating the Home Page

By default, this theme supports `jekyll-readme-index`, so the homepage can be generated from an undecorated `README.md` file (such as this). This **does not** provide the recommended blog reading experience.  

If you wish to provide your own home page, you can start by copying `home.html` to `index.html`. This page relies on the [home layout][2], which provides the _three_ most-recent blog posts.


## Creating the Blog Index Pages

This theme creates several pages that are structured to group posts by tag, category, and author. 
The [site's front-end code](assets/site.js) automatically filters those pages when an associated anchor is used (e.g. `#tagname`).

First, you should probably copy these pages out of the theme's source:

- [blog/index.html](blog/index.html)
- [blog/tag.html](blog/tag.html)
- [blog/author.html](blog/author.html)
- [blog/category.html](blog/category.html)



## Adding Pages in the Navigation menu

By default, all pages in the `pages` directory get listed in the navigation menu.

This theme allows for pages to be excluded by adding a property to their frontmatter, `menu: false`.
These pages will still be rendered, navigable by search engines, etc, but they will be excluded from the main navigation menu.

An example of _disabling_ the listing of a specific page is provided at: [`pages/three.md`](pages/three.md)

__Other notes__:
- Jekyll [basically distinguishes `posts` by their origin in `_posts` directory][1]. Posts are not included in the menu.


## Known Issues

- The `jekyll-readme-index` does not render `index.html` correctly when the `include` list in `_config.yml` contains `README.md`. Seemingly, this may be due to `jekyll-optional-front-matter` converting it to `README.html` too early.


[1]: https://ben.balter.com/2015/02/20/jekyll-collections/
[2]: https://github.com/samba/jekyll-solace-theme/tree/master/_layouts/home.html
