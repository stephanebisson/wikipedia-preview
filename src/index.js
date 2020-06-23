import { requestPagePreview } from './api'
import { createPopup } from './popup'
import { renderPreview } from './preview'
import '../style/popup.less'

function init({root, selector, lang, popupContainer}={}) {
	const globalLang = lang || 'en'
	root = root || document
	selector = selector || '[data-wikipedia-preview]'
	popupContainer = popupContainer || document.body

	const popup = createPopup(popupContainer)

	const mouseEnter = ({ target }) => {
		const title = target.getAttribute('data-wp-title') || target.textContent
		const lang = target.getAttribute('data-wp-lang') || globalLang
		requestPagePreview(lang, title, data => {
			if (data) {
				popup.show(renderPreview(lang, data), target)
			}
		})
	}

	Array.prototype.forEach.call(
		root.querySelectorAll(selector),
		function (node) {
			node.addEventListener('mouseenter', mouseEnter)
		}
	)

	// debug purpose :
	// I use the following line to open the popup
	// on the first link during testing
	// mouseEnter({target: popupContainer.querySelector(selector)})
}

export { init }
