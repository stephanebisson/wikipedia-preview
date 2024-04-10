import { msg } from './../i18n'
import { buildWikipediaUrl, getDir, classesToString, isOnline } from './../utils'
import { galleryrow } from './galleryrow'
import '../../style/preview.less'

const header = ( state ) => {
	const { lang } = state
	const imageUrl = state.data && state.data.imgUrl
	return `
		<div class="wikipediapreview-header">
			${ imageUrl ? `<div class="wikipediapreview-header-image" style="${ `background-image:url('${ imageUrl }');background-size:cover;` }"></div>` : '' }
			<div class="wikipediapreview-header-wordmark${ imageUrl ? ' wikipediapreview-header-wordmark-with-image' : '' } wikipediapreview-header-wordmark-${ lang }"></div>
			<div class="wikipediapreview-header-closebtn" onclick="close"></div>
		</div>
	`.trim()
}

const getPreviewBody = ( type, message, cta ) => {
	return `
		<div class="wikipediapreview-body wikipediapreview-body-${ type }">
			<div class="wikipediapreview-body-message">
				<div class="wikipediapreview-body-icon"></div>
					${ message }
			</div>
			<div class="wikipediapreview-body-action">
				${ cta }
			</div>
		</div>
`.trim()
}

const getReadOnWikiCta = ( lang, title, isTouch ) => {
	return `<a href="${ buildWikipediaUrl( lang, title, isTouch ) }" target="_blank" class="wikipediapreview-cta-readonwiki">${ msg( lang, 'read-on-wiki' ) }</a>`
}

const render = ( lang, isTouch, dir, headerContent, bodyContent, prefersColorScheme ) => {
	const classes = {
		wikipediapreview: true,
		mobile: isTouch,
		'wikipediapreview-dark-theme': prefersColorScheme === 'dark',
		'wikipediapreview-light-theme': prefersColorScheme === 'light'
	}
	return `
		<div class="${ classesToString( classes ) }" lang="${ lang }" dir="${ dir }" onmouseleave="close">
			${ headerContent }
			${ bodyContent }
		</div>
	`.trim()
}

const renderPreview = ( lang, data, media, expanded, isTouch, prefersColorScheme ) => {
	const imageUrl = data.imgUrl,
		gallery = galleryrow( media, lang ),
		footerContent = expanded ?
			`<a href="${ buildWikipediaUrl( lang, data.title, isTouch ) }" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank">${ msg( lang, 'read-more' ) }</a>` :
			`<span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore" onclick="expand">${ msg( lang, 'continue-reading' ) }</span>`,
		bodyContent = `
			<div class="wikipediapreview-body">
				${ data.extractHtml }
				${ gallery }
			</div>
			<div class="wikipediapreview-footer">
				${ footerContent }
			</div>
		`.trim()

	return render(
		lang,
		isTouch,
		data.dir,
		header( lang, imageUrl ),
		bodyContent,
		prefersColorScheme
	)
}

const renderLoading = ( isTouch, lang, dir, prefersColorScheme ) => {
	const bodyContent = `
		<div class="wikipediapreview-body wikipediapreview-body-loading">
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line smaller"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line smaller"></div>
		</div>
		<div class="wikipediapreview-footer-loading"></div>
	`.trim()

	return render( lang, isTouch, dir, header( lang ), bodyContent, prefersColorScheme )
}

const renderError = ( isTouch, lang, title, dir, prefersColorScheme ) => {
	const message = `<span>${ msg( lang, 'preview-error-message' ) }</span>`
	const cta = getReadOnWikiCta( lang, title, isTouch )

	return render( lang, isTouch, dir, header( lang ), getPreviewBody( 'error', message, cta ), prefersColorScheme )
}

const renderDisambiguation = ( isTouch, lang, title, dir, prefersColorScheme ) => {
	const message = `<span>${ msg( lang, 'preview-disambiguation-message', title ) }</span>`
	const cta = getReadOnWikiCta( lang, title, isTouch )

	return render( lang, isTouch, dir, header( lang ), getPreviewBody( 'disambiguation', message, cta ), prefersColorScheme )
}

const renderOffline = ( isTouch, lang, dir, prefersColorScheme ) => {
	const message = `<span>${ msg( lang, 'preview-offline-message' ) }</span>`
	const cta = `<a>${ msg( lang, 'preview-offline-cta' ) }</a>`

	return render( lang, isTouch, dir, header( lang ), getPreviewBody( 'offline', message, cta ), prefersColorScheme )
}

const bodyLoading = () => {
	return `
		<div class="wikipediapreview-body-loading-line larger"></div>
		<div class="wikipediapreview-body-loading-line medium"></div>
		<div class="wikipediapreview-body-loading-line larger"></div>
		<div class="wikipediapreview-body-loading-line medium"></div>
		<div class="wikipediapreview-body-loading-line smaller"></div>
		<div class="wikipediapreview-body-loading-line larger"></div>
		<div class="wikipediapreview-body-loading-line medium"></div>
		<div class="wikipediapreview-body-loading-line larger"></div>
		<div class="wikipediapreview-body-loading-line medium"></div>
		<div class="wikipediapreview-body-loading-line smaller"></div>
	`
}

const bodyStandard = ( state ) => {
	return state.data.extractHtml +
		( state.expanded ? galleryrow( state ) : '' )
}

const bodyWithIssue = ( message, cta ) => {
	return `
		<div class="wikipediapreview-body-message">
			<div class="wikipediapreview-body-icon"></div>
			${ message }
		</div>
		<div class="wikipediapreview-body-action">
			${ cta }
		</div>
	`
}

const bodyDisambiguation = () => {
	return bodyWithIssue( 'msg', 'cta' )
}

const bodyError = () => {
	return bodyWithIssue( 'msg', 'cta' )
}

const bodyOffline = () => {
	return bodyWithIssue( 'msg', 'cta' )
}

const getBodyFunction = ( type ) => {
	return {
		loading: bodyLoading,
		standard: bodyStandard,
		disambiguation: bodyDisambiguation,
		error: bodyError,
		offline: bodyOffline
	}[ type ]
}

const getPreviewType = ( state ) => {
	if ( !state.data ) {
		return 'loading'
	}

	if ( state.data.type === 'standard' ) {
		return 'standard'
	} else if ( state.data.type === 'disambiguation' ) {
		if ( state.data.extractHtml ) {
			return 'standard'
		} else {
			return 'disambiguation'
		}
	} else {
		if ( isOnline() ) {
			return 'error'
		} else {
			return 'offline'
		}
	}
}

const body = ( state, type ) => {
	const bodyFunction = getBodyFunction( type )
	return `
		<div class="wikipediapreview-body wikipediapreview-body-${ type }">
			${ bodyFunction( state ) }
		</div>
	`
}

const footer = ( { lang, expanded, title, isTouch, data }, type ) => {
	if ( data && data.extractHtml === null ) {
		return ''
	}

	const isLoading = type === 'loading'
	let footerContent = ''
	if ( !isLoading ) {
		footerContent = expanded ?
			`<a href="${ buildWikipediaUrl( lang, title, isTouch ) }" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank">${ msg( lang, 'read-more' ) }</a>` :
			`<span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore" onclick="expand">${ msg( lang, 'continue-reading' ) }</span>`
	}

	const classes = {
		'wikipediapreview-footer': true,
		'wikipediapreview-footer-loading': isLoading
	}
	return `
		<div class="${ classesToString( classes ) }">
			${ footerContent }
		</div>
	`
}

// todo: consider having the 'mobile' class
// set at the popup level and not propagated here
const preview = ( state ) => {
	const type = getPreviewType( state )
	const classes = {
		wikipediapreview: true,
		mobile: state.isTouch,
		'wikipediapreview-dark-theme': state.colorScheme === 'dark',
		'wikipediapreview-light-theme': state.colorScheme === 'light'
	}
	return `
		<div class="${ classesToString( classes ) }" lang="${ state.lang }" dir="${ getDir( state.lang ) }" onmouseleave="close">
			${ header( state ) }
			${ body( state, type ) }
			${ footer( state, type ) }
		</div>
	`.trim()
}

export { preview, renderPreview, renderLoading, renderError, renderDisambiguation, renderOffline }