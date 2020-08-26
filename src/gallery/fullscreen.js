import { msg } from '../i18n'

let gallery = [],
	current = 0

const renderFullScreenGallery = ( lang, dir ) => {
		return `
			<div class="wp-gallery-fullscreen" lang="${lang}" dir="${dir}">
				<div class="wp-gallery-fullscreen-top">
					<div class="wp-gallery-fullscreen-button close"></div>
				</div>
				<div class="wp-gallery-fullscreen-main">
					<div class="wp-gallery-fullscreen-button previous"></div>
					<div class="wp-gallery-fullscreen-image">
						<img src="">
						<div class="wp-gallery-fullscreen-loading">
							<div class="wp-gallery-fullscreen-loading-icons">
								<div class="wp-gallery-fullscreen-loading-spinner">
									<div class="wp-gallery-fullscreen-loading-spinner-animation">
										<div class="wp-gallery-fullscreen-loading-spinner-animation-bounce"></div>
									</div>
								</div>
								<div class="wp-gallery-fullscreen-loading-error"></div>
							</div>
							<div class="wp-gallery-fullscreen-loading-text"></div>
							<div class="wp-gallery-fullscreen-loading-error-refresh"></div>
						</div>
					</div>
					<div class="wp-gallery-fullscreen-button next"></div>
				</div>
				<div class="wp-gallery-fullscreen-bottom">
					<div class="wp-gallery-fullscreen-caption"></div>
				</div>
			</div>
		`.trim()
	},

	toggleLoading = ( loading, image, lang ) => {
		const text = loading.querySelector( '.wp-gallery-fullscreen-loading-text' ),
			error = loading.querySelector( '.wp-gallery-fullscreen-loading-error' ),
			refresh = loading.querySelector( '.wp-gallery-fullscreen-loading-error-refresh' ),
			spinner = loading.querySelector( '.wp-gallery-fullscreen-loading-spinner' ),

			timeoutId = setTimeout( () => {
				text.innerText = msg( lang, 'gallery-loading-still' )
				text.style.visibility = 'visible'
			}, 5000 ),

			onLoad = () => {
				clearTimeout( timeoutId )
				spinner.style.visibility = 'hidden'
				text.style.visibility = 'hidden'
				image.style.visibility = 'visible'
				image.removeEventListener( 'load', onLoad )
			},

			onRefresh = () => {
				toggleLoading( loading, image, lang )
				image.src = gallery[ current ].src
				refresh.removeEventListener( 'click', onRefresh )
			},

			onError = () => {
				clearTimeout( timeoutId )
				error.style.visibility = 'visible'
				spinner.style.visibility = 'hidden'
				text.innerText = msg( lang, 'gallery-loading-error' )
				text.style[ 'font-size' ] = '16px'
				text.style.visibility = 'visible'
				refresh.innerText = msg( lang, 'gallery-loading-error-refresh' )
				refresh.style.visibility = 'visible'
				refresh.addEventListener( 'click', onRefresh )
				image.removeEventListener( 'error', onError )
			}

		spinner.style.visibility = 'visible'
		image.style.visibility = 'hidden'
		text.style.visibility = 'hidden'
		error.style.visibility = 'hidden'
		refresh.style.visibility = 'hidden'

		image.addEventListener( 'load', onLoad )
		image.addEventListener( 'error', onError )
	},

	hideFullscreenGallery = container => {
		const fullscreenGallery = container.querySelector( '.wp-gallery-fullscreen' )
		container.removeChild( fullscreenGallery )
		current = 0
	},

	renderNext = ( galleryContainer, lang, offset = 1 ) => {
		const image = galleryContainer.querySelector( 'img' ),
			caption = galleryContainer.querySelector( '.wp-gallery-fullscreen-caption' ),
			nextButton = galleryContainer.querySelector( '.next' ),
			previousButton = galleryContainer.querySelector( '.previous' ),
			next = current + offset,
			loading = galleryContainer.querySelector( '.wp-gallery-fullscreen-loading' )

		if ( gallery[ next ] ) {
			toggleLoading( loading, image, lang )
			image.src = gallery[ next ].src
			caption.innerText = gallery[ next ].caption ? gallery[ next ].caption : ''
			current += offset
			nextButton.style.opacity = current === gallery.length - 1 ? '0.5' : '1'
			previousButton.style.opacity = current === 0 ? '0.5' : '1'
		}
	},

	renderPrevious = ( galleryContainer, lang ) => {
		renderNext( galleryContainer, lang, -1 )
	},

	showFullscreenGallery = ( mediaItems, selectedThumb, lang, dir, container = document.body ) => {

		container.insertAdjacentHTML( 'beforeend', renderFullScreenGallery( lang, dir ) )

		const galleryContainer = container.querySelector( '.wp-gallery-fullscreen' ),
			nextButton = galleryContainer.querySelector( '.next' ),
			previousButton = galleryContainer.querySelector( '.previous' ),
			closeButton = galleryContainer.querySelector( '.close' )

		let selectedThumbIndex = 0
		gallery = mediaItems
		gallery.some( ( image, index ) => {
			if ( image.thumb === selectedThumb ) {
				selectedThumbIndex = index
				return true
			}
			return false
		} )

		renderNext( galleryContainer, lang, selectedThumbIndex )

		closeButton.addEventListener( 'click', () => {
			hideFullscreenGallery( container )
		} )

		if ( gallery.length === 1 ) {
			previousButton.style.visibility = 'hidden'
			nextButton.style.visibility = 'hidden'
		} else {
			nextButton.addEventListener( 'click', () => {
				renderNext( galleryContainer, lang )
			} )

			previousButton.addEventListener( 'click', () => {
				renderPrevious( galleryContainer, lang )
			} )
		}
	}

export { showFullscreenGallery }
