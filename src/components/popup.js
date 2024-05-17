import '../../style/popup.less'

import { classesToString } from '../utils'

const computePopupPosition = (
	targetRect,
	popupWidth, popupHeight,
	innerWidth, innerHeight
) => {
	const targetCenterX = targetRect.left + targetRect.width / 2
	const targetCenterY = targetRect.top + targetRect.height / 2
	const alignLeft = targetCenterX <= innerWidth / 2
	const popupBelowTarget = targetCenterY <= innerHeight / 2

	const left = alignLeft ?
		targetRect.left :
		targetRect.left + targetRect.width - popupWidth

	const top = popupBelowTarget ?
		targetRect.top + targetRect.height :
		''

	const bottom = popupBelowTarget ?
		'' :
		innerHeight - targetRect.top

	return { left, top, bottom }
}

// Strangely, mouseenter often fires with the pointer slightly
// outside any element rect. Making the rects bigger by a few pixel
// ensures the pointer will be inside one of them.
const expandRect = ( rect ) => {
	const delta = 3
	return {
		left: rect.left - delta,
		right: rect.right + delta,
		top: rect.top - delta,
		bottom: rect.bottom + delta
	}
}

const getTargetRect = ( element, { x, y } ) => {
	const rects = element.getClientRects()
	for ( let i = 0; i < rects.length; i++ ) {
		const rect = expandRect( rects[ i ] )
		if ( x >= rect.left && x <= rect.right &&
			y >= rect.top && y <= rect.bottom ) {
			return rects[ i ]
		}
	}
	// fallback for unit tests
	return rects[ 0 ] || element.getBoundingClientRect()
}

const popup = ( { target, pointerPosition, content, expanded } ) => {
	let style = ''
	if ( target ) {
		const position = computePopupPosition(
			getTargetRect( target, pointerPosition ),
			350,
			370,
			window.innerWidth,
			window.innerHeight
		)
		style = `left: ${ position.left }px; top: ${ position.top }px; bottom: ${ position.bottom }px;`
	} else {
		style = 'visibility: hidden;'
	}
	const classes = {
		'wp-popup': true,
		expanded: expanded
	}
	return `
		<div class="${ classesToString( classes ) }" style="${ style }" onmouseleave="close">
			${ content }
		</div>
	`
}

export { popup, computePopupPosition }
