import { renderPreview, renderLoading, renderError, renderDisambiguation, renderOffline } from '../preview'

export default {
	title: 'Wikipedia Preview',
	argTypes: {
		touch: {
			name: 'Mobile',
			control: 'boolean'
		},
		lang: {
			name: 'Language',
			control: 'select',
			options: [ 'en', 'ar', 'atj', 'bn', 'ca', 'cs', 'cy', 'et', 'fa', 'fr', 'he', 'hi', 'ja', 'la', 'ps', 'ru', 'sd', 'sr', 'szl', 'tr', 'ur', 'uz', 'zh' ]
		},
		dir: {
			name: 'Direction',
			control: 'inline-radio',
			options: [ 'LTR', 'RTL' ]
		},
		title: {
			name: 'Article Title',
			control: 'text'
		},
		pageUrl: {
			name: 'Article URL',
			control: 'text'
		},
		extractHtml: {
			name: 'Preview HTML',
			control: 'text'
		},
		imgUrl: {
			name: 'Thumbnail URL',
			control: 'text'
		},
		prefersColorScheme: {
			name: 'Color Scheme',
			control: 'inline-radio',
			options: [ 'light', 'dark', 'detect' ]
		}
	},
	args: {
		touch: false,
		lang: 'en',
		dir: 'LTR',
		title: 'Cat',
		pageUrl: 'https://en.wikipedia.org/wiki/Cat',
		extractHtml: '<p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Moons_of_solar_system-he.svg/langhe-320px-Moons_of_solar_system-he.svg.png',
		prefersColorScheme: 'light'
	}
}

export const StandardWithImage = ( { lang, title, extractHtml, dir, pageUrl, imgUrl, touch, prefersColorScheme } ) => {
	return renderPreview( lang, { title, extractHtml, dir, pageUrl, imgUrl }, touch, prefersColorScheme )
}

export const Standard = ( { lang, title, extractHtml, dir, pageUrl, touch, prefersColorScheme } ) => {
	return renderPreview( lang, { title, extractHtml, dir, pageUrl }, touch, prefersColorScheme )
}

export const Loading = ( { touch, lang, dir, prefersColorScheme } ) => {
	return renderLoading( touch, lang, dir, prefersColorScheme )
}

export const Error = ( { touch, lang, title, dir, prefersColorScheme } ) => {
	return renderError( touch, lang, title, dir, prefersColorScheme )
}

export const Disambiguation = ( { lang, title, extractHtml, dir, pageUrl, touch, prefersColorScheme } ) => {
	return renderPreview( lang, { title, extractHtml, dir, pageUrl }, touch, prefersColorScheme )
}

export const DisambiguationWithNoExtract = ( { touch, lang, title, dir, prefersColorScheme } ) => {
	return renderDisambiguation( touch, lang, title, dir, prefersColorScheme )
}

export const Offline = ( { touch, lang, dir, prefersColorScheme } ) => {
	return renderOffline( touch, lang, dir, prefersColorScheme )
}
