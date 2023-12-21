# MONZ frontend using 11ty/TailwindCSS/Flowbite/GSAP/Swiper

![MONZ](https://www.m-o.nz/images/monz_O_hover.png)

This boilerplate/skeleton is based on [Minimal 11ty Starter](https://github.com/tomreinert/minimal-11ty-tailwind-starter), please check it out first for the basics.

## Getting started

1. git clone the repository
2. `cd hellmut-monz-11ty` (or the name of the folder you've cloned into)
3. install dependencies with `npm install`
4. watch for changes and serve locally on http://localhost:8080 with `npm run serve`
5. compile the website with `npm run build` and serve it from the `_site` folder.

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
* The single most important way to group items is e.g. `tags: ["work", "movies", "course", "course17", "course17section1"]`, this will create `collections.work`, `collections.movies`, `collections.course`, `collections.course17` and `collections.course17section1` collections which you can iterate through later with e.g. `{% for item in collections.movies %}`.