var _ = require('lodash');

var Nav = function ( options ) {

	var defaults = {
		navigationName: 'nav'
	};

	var settings = _.merge(defaults, options);

	return function ( files, metalsmith, done ) {
		setImmediate(done);

		var nav = _.cloneDeep(files);

		Object.keys(nav).forEach(function ( file, index ) {
			if ( file.substr(0, 1) === '.' ) {
				delete nav[file];
			} else {
				delete nav[file].contents;
				delete nav[file].stats;
				nav[file].filename = file;
			}
		});

		metalsmith._metadata[settings.navigationName] = nav;
	};

};

module.exports = Nav;
