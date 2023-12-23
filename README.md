# MONZ frontend using 11ty/TailwindCSS/Flowbite/GSAP/Swiper

![MONZ](https://www.m-o.nz/images/monz_O_hover.png)

This boilerplate/skeleton is based on [Minimal 11ty Starter](https://github.com/tomreinert/minimal-11ty-tailwind-starter), please check it out first for the basics.

## Getting started

1. git clone the repository
2. `cd hellmut-monz-11ty` (or the name of the folder you've cloned into)
3. install dependencies with `npm install`
4. watch for changes and serve locally on http://localhost:8080 with `npm run serve`
5. compile the website with `npm run build` and serve it from the `_site` folder.

## UI Library

Take a look at the reusable snippets at http://localhost:8080/ui-library/

## Development notes

* The template uses inline TailwindCSS classes, mixed with abstracted out generic components like buttons (e.g. `.monz-container`, `.list-greater`, `.stretched-link` and others).
* For generic top/bottom section spacers use the `*-section` and `*-section-sm` classes.
* Place individual SVG icons into the `/src/img/icons` folder and run `gulp build_sprite` in order to generate `/src/img/icons/dist/sprite.svg`, use them as
```
<svg viewBox="0 0 24 24" class="w-5 h-5 text-white">
  <use href="/img/icons/dist/sprite.svg#hamburger"></use>
</svg>
```

* All URLs must end with `/`, e.g. `permalink: "/work/movies/course17/chapter-{{ pagination.pageNumber }}/"`
* The single most important way to group items is:

  ```
  ---
  tags: ["work", "movies", "course", "course17"]
  ---
  ```

* ...this will create `collections.work`, `collections.movies`, `collections.course` and `collections.course17` collections which you can iterate through later with e.g. `{% for item in collections.movies %}`.
* The CSS utility classes are 'controlled' centrally from `tailwind.config.js`, the grid calculation is in `src/styles/variables.css`, the color variables in `src/styles/colors.css`.
* `src/sitemap.njk` is responsible for generating the `sitemap.xml`, double-check its conditions in case you want to exclude some pages, collections from it.
* Update the `robots.txt` once deployed to production.
* A typical post could contain all this information (depending on post type):

```
---
title: Teaching 47
date: 2018-05-01
excerpt: "Excerpt for Teaching 47"
coverPhoto: {
                "webP": "/img/pexels-rdne-stock-project-8474487-640x424.webp",
                "webP2x": "/img/pexels-rdne-stock-project-8474487-640x424@2x.webp",
                "jpg": "/img/pexels-rdne-stock-project-8474487-640x424.jpg",
                "jpg2x": "/img/pexels-rdne-stock-project-8474487-640x424@2x.jpg",
                "height": "small",
                "figureBackgroundColor": "bg-info",
                "figcaption": "Back View of Astronauts Holding Hands"
            }
coverVideo: https://www.youtube-nocookie.com/embed/r6sGWTCMz2k?si=DI0OK3Ee9riTKDHT
layout: layouts/post-layout-cover-only.njk
permalink: /doc/2017-21/teaching-47/

# NOTE: tags are the means of creating 11ty collections e.g. `collections.teching`
tags: ["doc", "year2017to2021", "teaching"]

# NOTE: categories are just for display no related functionality
categories: ["blog", "philosophy"]

projectDetails:
  Director: "Ali Abbasi"
  Year: 2018
  Genre: "crime, drama, fantasy"
  Duration: "1h 50m"
price: "$11.11 - $44.50"
bookDetailsReviews:
  - text: “No, don’t quote me.”
    source: Enzo Ledoux, PhD, author Le Pantalon
  - text: “Can’t talk now.”
    source: Luke Horowitz, cashier Coles

# NOTE: each chapter should have its corresponding `section` set
section: 2
chapterDescription: "Course 17 chapter 2.2 - - - Lorem ipsum dolor sit amet, consectetur adipiscing elit."
---
```