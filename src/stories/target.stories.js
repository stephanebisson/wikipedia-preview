import { buildWikipediaUrl } from '../utils'
import { init } from '../index'

export default {
	title: 'Target Cases',
	argTypes: {
		lang: {
			name: 'Language',
			defaultValue: 'en',
			control: {
				type: 'select',
				options: [ 'en', 'fr', 'hi', 'ks', 'he' ]
			}
		},
		title: {
			name: 'Article Title',
			defaultValue: 'Cat',
			control: 'text'
		}
	}
}

export const Hyperlink = ( { lang, title } ) => {
	const container = document.createElement( 'div' )
	const template = `<a href="${buildWikipediaUrl( lang, title, true, false )}">${title} (${lang})</a>`
	container.innerHTML = template
	container.onmouseover = () => {
		init( { root: document.getElementById( 'root' ), detectLinks: true } )
	}
	return container
}

export const Image = ( { lang, title } ) => {
	const container = document.createElement( 'div' )
	const template = `<a href="${buildWikipediaUrl( lang, title, true, false )}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`
	container.innerHTML = template
	container.onmouseover = () => {
		init( { root: document.getElementById( 'root' ), detectLinks: true } )
	}
	return container
}

export const Text = ( { lang, title } ) => {
	const container = document.createElement( 'div' )
	const template = `<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${title}">${title} (${lang})</span>`
	container.innerHTML = template
	container.onmouseover = () => {
		init( { root: document.getElementById( 'root' ), lang } )
	}
	return container
}
