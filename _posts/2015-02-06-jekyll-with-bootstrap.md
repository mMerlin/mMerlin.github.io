---
layout: post
category : idea
tags : [jekyll, bootstrap, refactor, theme]
tagline : "Make the world a better place"
title : "Refactor Jekyll Bootstrap themes and layouts"
---
The
<a href="https://github.com/plusjade/jekyll-bootstrap/">JekyllBootstrap</a>
repository provides a quick and easy way to get
<a href="http://getbootstrap.com/">Twitter Bootstrap</a>
into a Jekyll powered site.&nbsp; However, it seems to have baked in some things that are not really part of Bootstrap, or the theme support it also provides.

Twitter bootstrap framework is only css (and a bit of js).&nbsp; It creates rules for classes to be used in HTML, and defines an approximate structure for them.&nbsp; It does not specify any specific html that should by used.&nbsp; Other than the tags to reference and load the css and javascript files.

To use Jekyll, layout templates are needed to be able to display complete pages from parts.  The way JekyllBootstrap is setup, each individual theme provides it's own set of template pieces, that have references to the the needed bootstrap styling files, plus extra for other common header boilerplate.&nbsp; However it does not provide any easy method of extended that information, either for site, page, or individual post use.  The only way to make changes seems to be to edit the template files themselves, effectively creating a new theme.

In addition, comparing the template files for the 2 themes provided directly from the jekyll-bootstrap repository shows them to be nearly identical.  They provide the same layout, and a bit of css class name overrides to produce the theme.

This can be improved by a bit of refactoring, to extract the common code, parameterize the variations, and provide hooks to insert additional information through configuration and file specific meta data.

To start, all of the standard header boilerplate should be put in a separate file, where it can be maintained in one place.  This should not be the responsibility of either styling or layout themes.  Much of the information is to assist with cross-browser portability/compatibility, with doctype version and base language information.  Nothing to do with the themes, although both can be dependent in minimal capabilities.  Like HTML5.

If the layout templates can be successfully parameterized as well, a theme might devolve to a simple settings file, that fills in the blanks in the common files.  Especially if the required (Twitter) bootstrap files can be referenced from a CDN, instead of needing to include them directly with the them files.  Another duplications gotten rid of.

Using the above, it may be possible to mix and match between styling themes, and layout themes.  A single layout template can be populated using any (compatible) styling theme, and a single styling theme should be able to work with any template.  As long as the settings information gets merged.  Done correctly, with usable defaults for theme and layout, this should still work “out of the box”, to provide the claimed **0 to Blog in 3 Minutes** on the
<a href="http://jekyllbootstrap.com/">Jekyll Boostrap</a> site.
