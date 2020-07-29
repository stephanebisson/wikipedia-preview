import { requestPagePreview } from './api'
import { customEvents } from './event'
import { createPopup } from './popup'
import { createTouchPopup } from './touchPopup'
import { renderPreview } from './preview'
import { getWikipediaAttrFromUrl, isTouch } from './utils'
import { renderLoading } from './loading'

function init( {
	root = document,
	selector = '[data-wikipedia-preview]',
	lang = 'en',
	detectLinks = false,
	popupContainer = document.body } ) {
	const globalLang = lang,
		popup = isTouch ?
			createTouchPopup( popupContainer ) :
			createPopup( popupContainer ),
		events = customEvents( popup ),
		showPopup = ( { target } ) => {
			if ( popup.element.style.visibility === 'visible' ) {
				popup.hide()
			}

			popup.loading = true
			popup.show( renderLoading( isTouch ), target )

			const title = target.getAttribute( 'data-wp-title' ) || target.textContent,
				lang = target.getAttribute( 'data-wp-lang' ) || globalLang

			requestPagePreview( lang, title, isTouch, data => {
				if ( data && popup.loading ) {
					popup.show( renderPreview( lang, data, isTouch ), target )
				}

				popup.lang = lang
				popup.title = title
				const expanded = root.querySelector( '.wikipediapreview.expanded.mobile' )

				if ( expanded && popup.expand ) {
					popup.expand()
				}
			} )
		}

	popup.subscribe( events )

	Array.prototype.forEach.call(
		root.querySelectorAll( selector ),
		node => {
			if ( isTouch ) {
				node.addEventListener( 'touchend', showPopup )
			} else {
				node.addEventListener( 'mouseenter', showPopup )
			}
		}
	)

	if ( detectLinks ) {
		Array.prototype.forEach.call(
			root.querySelectorAll( 'a' ),
			node => {
				const matches = getWikipediaAttrFromUrl( node.getAttribute( 'href' ) )
				if ( matches ) {
					node.setAttribute( 'data-wp-title', matches.title )
					node.setAttribute( 'data-wp-lang', matches.lang )
					if ( isTouch ) {
						// eslint-disable-next-line no-script-url
						node.setAttribute( 'href', 'javascript:;' )
						node.addEventListener( 'touchend', showPopup )
					} else {
						node.addEventListener( 'mouseenter', showPopup )
					}
				}
			}
		)
	}
}

export { init }
