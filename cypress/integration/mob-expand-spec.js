import { Preview } from '../page-objects/preview'
import { goOffline, goOnline, changeOnline } from '../plugins/network'

const preview = new Preview()

describe( 'Check the onShow, onHide and onExpand functiom', () => {

	beforeEach( 'Open the English Page', () => {
		cy.navigateToMobileHomePage( '/articles/test.html' )
        cy.viewport(550, 750)
	} )

    it( 'Check the Wikipedia Preview in Expanded Layout by Swiping', () => {
        // Opens Mobile Preview
        preview.getPreviewSpan().eq( 0 ).click()

        // Swipe Up to generate Expanded Mode
        preview.getBody().swipe('bottom','top')
        // Checks the preview
        check.mobilePreview()
        check.previewExpanded()
        // Closes the Mobile Preview
        preview.getHeaderClosebtn().click()

    } )
    
    it( 'Check the Wikipedia Preview in Expanded Layout by Click on Continue Reading', () => {
        // Opens Mobile Preview
        preview.getPreviewSpan().eq( 0 ).click()

        // Click on Continue Reading Up to generate Expanded Mode
        preview.getFooterContiReading().click()        
        // Checks the preview
        check.mobilePreview()
        check.previewExpanded()
        // Closes the Mobile Preview
        preview.getHeaderClosebtn().click()

    } )
  

} )
