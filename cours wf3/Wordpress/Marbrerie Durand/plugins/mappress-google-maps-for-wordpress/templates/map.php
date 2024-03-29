<script type='text/template' id='mapp-tmpl-map'>
	<#
		let id = (map.name) ? map.name + "-layout" : '';
		let classes = 'mapp-layout';
		let layout = (map.layout) ? map.layout : mappl10n.options.layout;

		classes += (layout == 'left') ? ' mapp-left' : ' mapp-inline';
		classes += (mappl10n.options.engine == 'leaflet') ? ' mapp-leaflet ' : ' mapp-google ';

		let alignment = (map.alignment) ? map.alignment : mappl10n.options.alignment;
		classes += (alignment) ? ' mapp-align-' + alignment : '';

		// Gutenberg additional classes https://core.trac.wordpress.org/ticket/45882
		classes += (map.classname) ? ' ' + map.classname : '';
	#>

	<div id='{{id}}' class='{{classes}}'>
		<div class='mapp-wrapper'>
			<div class='mapp-content'>
				<# print(mapp.lib.template('map-header', { map : map })); #>
				<div class='mapp-main'>
					<# print(mapp.lib.template('map-filters', { map : map })); #>
					<# if (layout != 'inline') { #>
						<div class='mapp-list'></div>
					<# } #>
					<# print(mapp.lib.template('map-directions', { map : map })); #>
					<div class='mapp-canvas-panel'>
						<div class='mapp-canvas'></div>
						<# print(mapp.lib.template('map-menu', { map : map })); #>
						<# var iwClass = (map.editable) ? 'mapp-iw-edit' : 'mapp-iw'; #>
						<div class='{{{iwClass}}}'></div>
						<div class='mapp-dialog'></div>
					</div>
				</div>
				<# print(mapp.lib.template('map-footer', { map : map })); #>
			</div>
		</div>
		<# if (layout == 'inline') { #>
			<div class='mapp-list'></div>
		<# } #>
	</div>
</script>

<script type='text/template' id='mapp-tmpl-map-header'>
	<# var filter = !map.editable && map.query && mappl10n.options.filter; #>
	<# var search = map.editable || (map.query && mappl10n.options.search); #>
	<# if (search || filter) { #>
		<div class='mapp-header'>
			<# if (search) { #>
				<div class='mapp-search'>
					<input class='mapp-places' type='text' placeholder='<?php _e('Search', 'mappress-google-maps-for-wordpress'); ?>'/>
					<# if (mappl10n.options.ssl) { #>
						<div class='mapp-geolocate' data-mapp-action='geolocate' title='<?php _e('Your Location', 'mappress-google-maps-for-wordpress');?>'></div>
					<# } #>
				</div>
			<# } #>
			<# if (filter) { #>
				<div class='mapp-caret mapp-header-button mapp-filters-toggle' data-mapp-action='filters-toggle'><?php _e('Filter', 'mappress-google-maps-for-wordpress');?></div>
			<# } #>
		</div>
	<# } #>
</script>

<script type='text/template' id='mapp-tmpl-map-menu'>
	<# if (!map.editable) { #>
		<div class='mapp-controls'>
			<div class='mapp-menu-toggle' data-mapp-action='menu-toggle' title='<?php _e('Menu', 'mappress-google-maps-for-wordpress');?>'></div>
			<div class='mapp-menu'>
				<div class='mapp-menu-item' data-mapp-action='center'><?php _e('Center map', 'mappress-google-maps-for-wordpress');?></div>
				<?php if (Mappress::$options->engine != 'leaflet') { ?>
					<div class='mapp-menu-separator'></div>
					<div class='mapp-menu-item' data-mapp-action='layer' data-mapp-layer='traffic'><?php _e('Traffic', 'mappress-google-maps-for-wordpress');?></div>
					<div class='mapp-menu-item' data-mapp-action='layer' data-mapp-layer='bicycling'><?php _e('Bicycling', 'mappress-google-maps-for-wordpress');?></div>
					<div class='mapp-menu-item' data-mapp-action='layer' data-mapp-layer='transit'><?php _e('Transit', 'mappress-google-maps-for-wordpress');?></div>
				<?php } ?>
			</div>
		</div>
	<# } #>
</script>

<script type='text/template' id='mapp-tmpl-map-footer'>
	<# if ( (map.poiList || mappl10n.options.poiList) && map.layout != 'inline') { #>
		<div class='mapp-footer'>
			<div class='mapp-view-list' data-mapp-action='view-list'><?php _e('Show List', 'mappress-google-maps-for-wordpress'); ?></div>
			<div class='mapp-view-map' data-mapp-action='view-map'><?php _e('Show Map', 'mappress-google-maps-for-wordpress'); ?></div>
		</div>
	<# } #>
</script>
