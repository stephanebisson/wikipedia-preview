export const getWikipediaAttrFromUrl = url => {
		const regexList = [
		// https://en.wikipedia.org/wiki/Charles_Darwin
			/^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/wiki\/(\w+)/,
			// https://en.wikipedia.org/w/index.php?title=Cat
			/^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/w\/index.php\?title=(\w+)/
		]

		for ( let i = 0; i < regexList.length; i++ ) {
			const matches = regexList[ i ].exec( url )
			if ( matches ) {
				return { lang: matches[ 1 ], mobile: !!matches[ 2 ], title: matches[ 3 ] }
			}
		}

		return null
	},

	isTouch = 'ontouchstart' in window || ( navigator.maxTouchPoints > 0 ) ||
		( navigator.msMaxTouchPoints > 0 ),

	getDir = lang => {
		const rtl = [ 'ar', 'arc', 'arz', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi', 'pnb', 'ckb', 'mzn', 'glk', 'ug', 'sd', 'azb', 'lrc' ]
		return rtl.indexOf( lang ) === -1 ? 'ltr' : 'rtl'
	}
