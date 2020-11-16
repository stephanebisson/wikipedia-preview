import { showFullscreenGallery } from '../gallery'

export default {
	title: 'Gallery',
	argTypes: {
		touch: {
			name: 'Mobile',
			defaultValue: false,
			control: 'boolean'
		},
		lang: {
			name: 'Language',
			defaultValue: 'en',
			control: {
				type: 'select',
				options: [ 'en', 'fr', 'hi', 'ks', 'he' ]
			}
		},
		dir: {
			name: 'Direction',
			defaultValue: 'ltr',
			control: {
				type: 'inline-radio',
				options: [ 'ltr', 'rtl' ]
			}
		}
	}
}

export const Fullscreen = ( { lang, dir } ) => {
	const container = document.createElement( 'div' )
	const mediaItems = [
		{
			caption: 'Wikipedia logo',
			thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/225px-Wikipedia-logo-v2.svg.png',
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/225px-Wikipedia-logo-v2.svg.png',
			title: 'File:Wikipedia-logo-v2.png'
		},
		{
			caption: 'Wikipedia Homepage',
			thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wikipedia_Main_Page.png/960px-Wikipedia_Main_Page.png',
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wikipedia_Main_Page.png/960px-Wikipedia_Main_Page.png',
			title: 'File:Wikipedia_Main_Page.png'
		},
		{
			caption: 'Wikipedia originally developed from another encyclopedia project called Nupedia',
			thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nupedia_logo_and_wordmark.png/480px-Nupedia_logo_and_wordmark.png',
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nupedia_logo_and_wordmark.png/480px-Nupedia_logo_and_wordmark.png',
			title: 'File:Nupedia_logo_and_wordmark.png'
		},
		{
			caption: 'The Wikipedia Page on December 17, 2001',
			thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/English_Wikipedia_main_page_20011217.jpg/480px-English_Wikipedia_main_page_20011217.jpg',
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/English_Wikipedia_main_page_20011217.jpg/480px-English_Wikipedia_main_page_20011217.jpg',
			title: 'File:English_Wikipedia_main_page_20011217.jpg'
		}
	]

	showFullscreenGallery( mediaItems, '', lang, dir, container )

	return container
}

export const Error = ( { lang, dir } ) => {
	const container = document.createElement( 'div' )
	const mediaItems = [
		{
			title: 'error.jpg'
		},
		{
			title: 'error.jpg'
		}
	]

	showFullscreenGallery( mediaItems, '', lang, dir, container )

	return container
}
