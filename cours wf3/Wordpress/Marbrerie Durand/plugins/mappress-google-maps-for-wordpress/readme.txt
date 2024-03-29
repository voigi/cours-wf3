=== MapPress Maps for WordPress ===
Contributors: chrisvrichardson
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4339298
Tags: maps, map, google maps, leaflet maps, leaflet map plugin, map plugin, directions, google map plugin, map widget, mapbox, mapping
Requires at least: 5.3
Requires PHP: 5.6
Tested up to: 5.6
Stable tag: 2.57.3

== Description ==
MapPress adds beautiful interfactive Google and Leaflet maps to WordPress.

Easily create unlimited maps and locations using the Gutenberg block editor, classic editor or shortcodes.

Upgrade to [MapPress Pro](https://mappresspro.com/mappress) for custom markers, searchable mashups, clustering, and much more.  See it in action on the [MapPress Home Page](https://mappresspro.com/mappress) or test it yourself with a [Free Demo Site](https://mappresspro.com/demo)!

[Home Page](https://mappresspro.com/mappress)
[Documentation](https://mappresspro.com/mappress-beta)
[FAQ](https://mappresspro.com/mappress-faq)
[Support](https://mappresspro.com/mappress-faq)

= Key Features =
* Add unlimited maps and markers to any post, page or custom post type
* Locations can be added by address, place, or latitude/longitude, or dragged into position
* Markers support custom text and HTML including photos, images, and links
* Google street view and overlays (traffic, bicycling and transit)
* Markers link to Google maps for detailed turn-by-turn directins
* Maps can be generated using PHP for use in themes and templates

= Pro Version Features =
* Get [MapPress Pro](https://mappresspro.com/mappress) for additional functionality
* Custom marker icons, or upload your own - 100 standard icons included
* Combine maps and locations into a searchable "mashup" map
* Filter locations by by taxonomy, tag or category
* Map and mashup widgets
* Marker clustering for both Leaflet and Google
* Multiple geocoders including Google, Nominatim, Algolia and MapBox
* Customizable marker and list templates
* Custom map colors and styles using Google styled maps and Mapbox Studio
* Generate maps automatically from custom fields
* Automatically assign marker icons by taxonomy, tag, or category
* KML support for Google Earth
* Google drawing manager for drawing polygons, circles, and lines directly on your maps
* MultiSite compatible
* Compatible with WPML language settings

= Localization =
Please [Contact me](https://mappresspro.com/chris-contact) if you'd like to provide a translation or an update.  Many thanks to all the folks who have created and udpated translations.

== Installation ==

See full [installation intructions and Documentation](https://mappresspro.com/mappress-documentation)
1. Install and activate the plugin through the 'Plugins' menu in WordPress
1. You should now see a MapPress meta box in in the 'edit posts' screen

[Home Page](https://mappresspro.com/mappress)
[Documentation](https://mappresspro.com/mappress-documentation)
[FAQ](https://mappresspro.com/mappress-faq)
[Support](https://mappresspro.com/forums)

== Frequently Asked Questions ==
Please see the plugin documentation pages:

[Home Page](https://mappresspro.com/mappress)
[Documentation](https://mappresspro.com/mappress-documentation)
[FAQ](https://mappresspro.com/mappress-faq)
[Support](https://mappresspro.com/forums)

== Upgrade ==

1. Deactivate your old MapPress version
1. Delete your old MapPress version (don't worry, the maps are saved in the database)
1. Follow the installation instructions to install the new version

== Changelog ==

= 2.57.3 =
* Fixed: notice in multisite admin
* Fixed: add missing textdomains

= 2.57.2 =
* Fixed: remove extra translation json file

= 2.57.1 =
* Fixed: language texts were not being picked up for JavaScript texts

= 2.57 =
* Added: new map editor for WordPress Classic editor
* Added: 'add media' button in map POI editor opens WordPress media library to insert images, etc. into POIs
* Added: enabled POI list toggle in editors
* Changed: leaflet popups can now size larger and not overflow the map area
* Changed: editor popups are now larger
* Changed: better positioning of popup pointer over map markers

= 2.56.11 =
* Changed: move WPML settings to free version

= 2.56.10 =
* Added: when using the WPML language plugin, maps are copied when duplicating a post from the original language

= 2.56.9 =
* Changed: Google infoBox popups resize better to fit large content
* Changed: exclude MapPress from Autoptmize to prevent "wp is not defined" errors in WordPress i18n scripts

= 2.56.8 =
* Fixed: mashup markers linking to home page instead of individual posts

= 2.56.7 =
* Changed: CSS improvements in map library
* Changed: Nominatim PHP gecodoer now sleeps for 1 sec to comply with their usage limits
* Changed: improved Nominatim address title parsing

= 2.56.6 =
* Fixed: typo in initial open directions

= 2.56.5 =
* Fixed: fixed version incompatibility in plugin header

= 2.56.4 =
* Changed: enabled Gutenberg blocks for blogs that did not use beta versions

= 2.56.3 =
* Fixed: directions form not working
* Fixed: fatal error for missing icon upload

= 2.56.2 =
* Changed: map font color set to black
* Fixed: Next Gen Gallery plugin interferes with template output

= 2.56.1 =
* Added: refresh button for Gutenberg mashup block
* Added: workaround for Gutenberg 'additional classes' bug (https://core.trac.wordpress.org/ticket/45882)
* Fixed: POI title was not set for POIs added using Nominatim geocoder
* Fixed: autocomplete CSS styles are not applied
* Fixed: Remove console log message

= 2.56.0 =
* Release beta changes from 2.55

= 2.55.2 =
* Added: map library, available in the MapPress settings
* Changed: map 'picker' dialog now saves scroll position

= 2.55.1 =
* Added: Gutenberg map and mashup blocks added
* Added: mini mode setting (width at which the left POI list is collapsed)

= 2.55 =
* Added: clustering is now supported, enable it in the MapPress settings screen
* added: maps with POI list on the left go into 'mini' mode when small: list is hidden and buttons can be used to toggle map or list
* Added: custom icons can now be uploaded directly in the MapPress settings screen
* Added: a new widget is available to display a single map, in addition to the mashup widget
* Added: .jpg icons are now supported in addition to .png and .gif
* Added: mashup filters dropdown includes post counts for each term
* Added: filter 'mappress_options' allows global options to be changed before maps are displayed
* Added: mashup queries now only read post title and body if 'POI content' setting is set to 'Post title + post excerpt'
* Added: new PHP filters are available for mashup queries: mappress_pre_filter($filters), mappress_pre_query($query) and mappress_post_query($map)
* Changed: algolia autocomplete has been removed and replaced with jquery autocomplete
* Changed: because of data discrepancies, algolia places no longer provides autocomplete results for Nominatim/Mapbox geocoders
* Changed: Nominatim/Mapquest autocomplete requests will affect quotas with those services, only Algolia is "free"
* Changed: for the 'left' map layout, directions are displayed in the sidebar like the POI list
* Changed: mashups with blank query now show ALL posts: [mashup] is now equivalent to [mashup query="all"]
* Changed: to show current posts, use [mashup query="current"] instead of leaving query blank
* Changed: PHP templates have been converted to JavaScript templates (for example, file 'map.php')
* Changed: mashup filter CSS has been converted to a grid layout
* Changed: Leaflet updated to version 1.7.1
* Changed: JS map 'close' and 'open' methods changed to 'poiOpen' and 'poiClose'
* Changed: like Google, the Leaflet API is now downloaded from CDN rather than the plugin directory
* Changed: action 'mappress_map_save' receives entire $map object, not just $mapid
* Fixed: some geocoders were not properly using the country/language parameters
* Fixed: color picker not positioning correctly when opened
* Fixed: popup not positioning correctly when opened

= 2.53.6 =
* Changed: additional CSS changes to migrate layout to flex
* Changed: map font switched to sans-serif (overriding theme - change mappress.css if needed)
* Fixed: warning in settings when switching map engine type
* Fixed: warning in PHP log when displaying empty mashups
* Fixed: mashup sometimes deselected current POI in list for small maps

= 2.53.5 =
* Added: curly braces can now be used in mashup queries to pass array parameters
* Changed: map layout switched to CSS flex
* Fixed: exclude mashup shortcodes from Gutenberg REST requests

= 2.53.4 =
* Added: 'dragging' and 'keyboard' shortcode attributes for Leaflet maps
* Fixed: map shortcode not working in archive text widget
* Fixed: a few themes/plugins trigger wp_footer too early, preventing templates from loading before scripts

= 2.53.3 =
* Changed: removed space in version string because of conflict with some CDNs
* Changed: editor made slightly (25px) taller
* Changed: restored mashup option to open post in same tab
* Changed: internal changes to remove correctedAddress property

= 2.53.2 =
* Fixed: custom styles stopped working after MapBox URL change
* Fixed: updated line unused method for PHP 7.2 compatibility checker

= 2.53.1 =
* Changed: minor internal updates to geocoders
* Fixed: centering not working on maps from old versions of plugin

= 2.53 =
* Added: Algolia, Nominatim and MapBox geocoders can be selected on MapPress settings screen
* Changed: updated Algolia Places to latest version
* Changed: updated Leaflet to 1.4.0
* Fixed: added missing left float for mashup thumbnails (to modify it, see '.mapp-body .wp-post-image' in mappress.css)
* Fixed: dead directions link if setting 'none' was imported from prior versions

= 2.52.5 =
* Added: setting to display KML POIs in mashup maps
* Fixed: conflict with 2017 theme and Leaflet zoom buttons
* Fixed: maps output in Gutenberg REST requests when option to load scripts in header is selected

= 2.52.4 =
* Added: a 'check now' button has been added to the settings screen to force license check
* Fixed: priority was too high for default 'mappress_poi_props' filter

= 2.52.3 =
* Added: geocoding errors are now shown on the settings screen

= 2.52.2 =
* Fixed: map controls language code not saving/displaying correctly

= 2.52.1 =
* Fixed: ajax error when opening map for edit

= 2.52 =
* Fixed: prevent enter press in map list search from publishing post
* Changed: updated map editor search/filter function
* Changed: internal function Mappress::ssl() renamed Mappress::is_ssl() - please update any custom directions.php or search.php to use the new name

= 2.51 =
* Added: mashups with a center but no zoom will perform a radius search
* Fixed: KML markers showing POI text instead of text from KML file
* Fixed: mashup initial center and zoom have been improved
* Fixed: mashups not displaying on some servers; updated gzip detection
* Changed: internal mashup query and layers control changes

= 2.50.10 =
* Fixed: PHP 7.2 notice on widgets_init
* Fixed: blank map when initial centering for mashups using Google engine

= 2.50.9 =
* Added: support for high-resolution MapBox tiles on high DPI (retina) devices
* Changed: mashups with multiple POIs will now honor shortcode zoom
* Changed: Leaflet updated to 1.3.4
* Fixed: notice on multisite settings screen when user is not super-admin

= 2.50.8 =
* Added: dropdowns for language/country codes
* Fixed: blank map occurs if other plugins trigger window resize before map is initialized
* Fixed: only print mashup templates in Pro version
* Fixed: continue execution if map container is missing

= 2.50.7 =
* Fixed: Google maps not displaying in editor when no styles defined

= 2.50.6 =
* Fixed: search toolbar not hidden when editing map

= 2.50.5 =
* Fixed: 2nd style bug preventing map display

= 2.50.4 =
* Fixed: bug in styles could prevent map from displaying

= 2.50.3 =
* Added: Mapbox token can be set in wp-config.php for multisite with: define('MAPPRESS_APIKEY_MAPBOX')
* Fixed: editor now shows ALL results when searching for maps
* Fixed: Google styles were not being applied

= 2.50.2 =
* Added: easy entry of Mapbox Studio style names in the MapPress settings screen
* Fixed: custom styles are now retained when switching engines
* Fixed: initialopeninfo parameter was not working for Leaflet maps
* Fixed: better CSS for search box in firefox

= 2.50.1 =
* Fixed: updater was not correctly checking major versions, e.g. 2.50 vs 2.50.1

= 2.50 =
* Added: updated editor map list in the map editor now allows searching across all posts
* Fixed: POI list was not refreshing when filtering in some installations

= 2.49.8 =
* Added: error message when places API not loaded
* Added: enter points into map editor as "lat,lng"
* Changed: mashups should now show all POIs
* Changed: mashups with a single POI will honor shortcode zoom
* Fixed: map not resizing when a tab is displayed

= 2.49.7 =
* Added: filters to set MapBox studio styles and custom map tiles
* Changed: mapping engine now defaults to leaflet
* Fixed: removed links pointing to beta documentation
* Fixed: KML popup could appear multiple times when editing multiple maps
* Fixed: unable to drag markers in editor when using Leaflet

= 2.49.6 =
* Fixed: autocomplete conflict with WordPress tag search fields

= 2.49.5 BETA =
* Fixed: missing leaflet layer control images

= 2.49.4 BETA =
* Fixed: incorrect documentation URLs

= 2.49.3 BETA =
* Fixed: missing files for algolia/leaflet in build version

= 2.49.2 BETA =
* Fixed: bug preventing new POIs using Google engine
* Fixed: mashup POI list not refreshing on first zoom/pan (Google)
* Fixed: map dialog appearing under 'hamburger' menu
* Fixed: removed 'mapp-static' class
* Fixed: notice on some sites during settings save
* Fixed: duplicate texts in .POT translation file

= 2.49.1 BETA =
* Fixed: mashups were using the map-popup and map-item templates instead of mashup-popup and mashup-item
* Fixed: removed extra 'mapp-iw' tags from popup templates
* Fixed: javascript error when centering on invalid place (leaflet only)
* Fixed: removed CSS min-width for leaflet popup
* Fixed: notice in admin plugins search screen (updater was not setting 'plugin' field in version response)
* Fixed: error for leaflet KML layers (setZindexOffset)
* Fixed: maximum mashup POIs was locked at 5

= 2.49 BETA =
* Added: support added for Leaflet, MapBox, and Algolia search
* Added: mashups are now searchable - see the search options on the MapPress settings screen
* Added: client-side templating system and template editor on MapPress settings screen
* Changed: filter fields now output more data (type, meta_type, etc)
* Changed: the 'mini' map mode (with list/map toggles) has been temporarily removed
* Changed: Pro updater is now available by default

= 2.48.7 =
* Fixed: restored inline directions form
* Changed: updated 'directions.php' template file and CSS
* Changed: updated plugin with new mappresspro.com URL
* Changed: re-added use of inline script functions for themes that match tags inside content (json) data

= 2.48.6 =
* Fixed: geocoding bug in editor
* Removed: drawingmanager

= 2.48.5 =
* Fixed: shake in editor caused by Google API update
* Fixed: API compatibility setting not applied in admin screens
* Changed: removed inline directions, shape editor

= 2.48.4 =
* Added: maps now support full-screen control: [mappress fullscreenControl="true"]
* Fixed: map center was changing when resizing
* Fixed: mashups were ignoring custom POI list template
* Changed: mashup filter now shows term names instead of term slugs

= 2.48.3 =
* Added: dismissible notices
* Fixed: incorrect sorting for mashups with 'orderby' clause in query
* Fixed: incorrect CSS in settings screen
* Changed: use gzip only for mashups, not for maps, added checks for PHP libraries

= 2.48.2 =
* Fixed: POI list was being hidden on small maps with 'inline' vertical layout
* Fixed: empty 'ghost' link if post thumbnail is absent

= 2.48.1 =
* Updated version number

= 2.48 =
* Updated version number

= 2.47.10 =
* Fixed: centering error for fixed centers

= 2.47.9 =
* Fixed: PHP 7 error on 'break' statement

= 2.47.8 =
* Fixed: bug in free version prevented editing

= 2.47.7 =
* Fixed: internal javascript error

= 2.47.6 =
* Added: prevent javascript caching when upgrading from free to Pro
* Added: enable gzip compression for AJAX data (depends on server settings)
* Added: 'compatibility' setting to prevent loading maps API by other plugins/themes
* Added: new layout with POIs on left.  Use settings or [mashup layout="left"] for a single map
* Added: shortcode 'center' can be a place or 'user' to geolocate, for example: [mashup center="new york"] or [mashup center="user"]
* Changed: mashup query updated to improve performance
* Changed: faster excerpts for mashup POIs
* Changed: Pro update settings are now enabled by default
* Changed: automatic centering zooms out less whenever possible (viewport padding reduced to zero)
* Changed: clickableIcons defaulted to false (prevent clicks on Google landmarks)
* Changed: removed extra code for xhtml validity checkers
* Changed: updates to directions and template 'map-directions.php'
* Changed: detection for Jetpack infinite scroll improved

= 2.47.5 =
* Added: filter labels can now include an icon in braces, for example [blue-dot]
* Added: filter 'mappress_query_filter' for post-query filtering
* Fixed: workaround for older versions of WordPress which have error in underscore library

= 2.47.4 =
* Added: setting to open POIs in a new tab/window.  For shortcodes use [mashup mashupClick="postnew"]
* Fixed: mashups for custom post types were displaying all post types
* Fixed: maps saved from custom fields in older versions were not auto-centering properly

= 2.47.3 =
* Fixed: Pro version updater bug fixes

= 2.47.2 =
* Fixed: Pro version automatic updater was not notifying about new updates (it may be necessary to update to the current version manually).

= 2.47.1 =
* Changed: the settings for mashup POI title and body display have been combined.  Select either poi title + body or post title + excerpt.  For shortcodes use [mashup mashupbody="poi"] for poi title + body, or [mashup mashupbody="post"] for post title + excerpt

= 2.47 =
* Added: filter dropdown now includes icons from the 'automatic icons' setting (for use as a map legend)
* Fixed: editor spawner multiple icon color pickers, so popups were sometimes in the wrong position
* Changed: 'directions' and 'mashupClick' (POI click behavior for mashups) are now global, set them from the settings screen instead of the shortcode
* Changed: templates 'map.php' and 'map-list.php' were updated, please update any custom templates
* Changed: list CSS class 'mapp-pois'/'mapp-poi' were changed to 'mapp-items'/'mapp-item'

= 2.46.10 =
* Changed: pro updater cache name changed to 'mappress_updater_[action]'

= 2.46.9 =
* Fixed: POI editor error if tinyMCE is disabled in user settings

= 2.46.8 =
* Fixed: default style not being applied
* Fixed: infoWindow displaying even when type = 'none'

= 2.46.7 =
* Fixed: maps in Jquery tabs control not automatically resizing

= 2.46.6 =
* Fixed: sorting in editor not working after first re-sort

= 2.46.5 =
* Fixed: javascript error on settings screen
* Fixed: improved check for multiple API keys
* Fixed: custom template not applied for mashup POIs

= 2.46.4 =
* Fixed: mashup poilist not shown if shortcode enabled and global setting disabled
* Fixed: default map style not always applied

= 2.46.3 =
* Fixed: editor not loading properly in 2.46.2
* Fixed: minZoom not working in shortcodes

= 2.46.2 =
* Fixed: Pro version automatic updater communications errors
* Fixed: icon picker was not working on MapPress settings page

= 2.46.1 =
* Added: updated French translation, thank you to Serge
* Fixed: directions were showing 'null' if empty

= 2.46 =
* Added: NEW TEMPLATES - this release includes all new template files - please update any custom templates to match the new versions.
* Added: mashup results can now be filtered by taxonomies, see the MapPress settings screen
* Added: setting 'Automatic updates' allows automatic updates for the Pro version
* Added: new layout with POIs on the left instead of under map, enable with: [mappresss layout="left"]
* Added: check for multiple Google Maps API loads
* Changed: template names now use hyphens instead of underscores and some names have changed: map_layout.php => map.php, map_poi_list.php => map-list.php
* Changed: CSS class names, for example for the POI list class '.mapp-poi-list' is now '.mapp-list'.  Please update any custom CSS.
* Changed: use the 'hamburger' menu in the map editor to set a map's center & zoom (previously a checkbox was shown in the map editor)
* Changed: mashups now ignore any center/zoom settings and automatically center to show all POIs
* Changed: directions now have a Google Maps link.  Transportation modes have been removed
* Changed: 'my location' shown only for SSL or localhost sites (Google has forbidden geolocation on non-secure sites)
* Changed: maps automatically recenter on screen resize (previously this was the 'adaptive' setting)
* Changed: scripts are now loaded in the header if JetPack Infinite Scroll is enabled

= 2.45.4 =
* Fixed: default custom style not applied when displaying map

= 2.45.3 =
* Fixed: bug when saving quotes (such as image tags) in POI body
* Fixed: custom map styles not displayed properly

= 2.45.2 =
* Removed: directions settings 'from' and 'to'
* Removed: 'adaptive' setting

= 2.45.1 =
* Fixed: maps were not saving attributes correctly including title, size and map type
* Fixed: maps with one POI were not setting zoom correctly
* Fixed: setting for default poi zoom was not saving
* Fixed: setting for POI click ('mashupClick') was ignored if used in shortcode
* Changed: directions 'to' is added by default for all POIs
* Removed: setting for no directions (directions="none")
* Removed: POI links ('poiLinks') setting removed

= 2.45 =
* Added: a new checkbox in the map editor allows you to choose whether to save the center and zoom.  If unchecked, the map will auto-center when displayed.
* Added: POI list sorting can now be set via the settings screen, the default is no sort
* Added: POI list can now be clicked anywhere to select a POI (not just the POI title)
* Added: a new 'hamburger' menu on the map provides map functions including centering and the bicycling, traffic, and transit layers
* Added: a new 'layers' shortcode attribute enables bicycling/transit/traffic layers when map is initially displayed, for example [mappress layers="bicycling"]
* Changed: autoicons function simplified: only 1 rule type is allowed, unfortunately you must *re-enter* any existing autoicons settings.
* Changed: mashup settings are now global including infowindow type ('iwtype'), POI body ('mashupBody'), and POI title ('mashupTtitle') - use the settings screen to set them, NOT the shortcode
* Changed: obsolete map control settings have been removed, and settings have been simplified to match Google defaults
* Changed: when centering a map, if the map has a saved center/zoom the viewport will be reset to that center/zoom, otherwise it will autocenter
* Changed: the 'initialopeninfo' shortcode attribute now accepts only true or false, not a POI index
* Changed: POI 'directions' links have been removed from the POI list (but still show in the POIs).  This allows display of more POIs in the list.
* Removed: mashup link ('mashuplink') setting, POI titles now always link to underlying post in mashups
* Removed: settings 'draggable', 'keyboardshortcuts', 'maptypecontrol', 'maptypecontrolstyle', 'maptypeids', 'overviewmapcontrol', 'overviewmapcontrolopened', 'pancontrol', 'rotatecontrol', 'scalecontrol', 'scrollwheel', 'streetviewcontrol', 'tilt','tooltips','zoomcontrol', 'zoomcontrolstyle'
* Removed: settings 'template', 'templatedirections', 'templatepoi', 'templatepoilist'
* Removed: settings 'bicycling', 'traffic', 'transit', 'initialBicycling', 'initialTraffic', 'initialTransit'
* Removed: 'bigger map' and POI 'zoom' functions
* Removed: the 'mapLinks' setting is removed (these functions have been replaced by the new map menu)