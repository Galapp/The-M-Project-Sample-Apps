// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: SplitViewSample
// View: MenuPage
// ==========================================================================

SplitViewSample.MenuPage = M.PageView.design({

    cssClass: 'MenuPage',

    childViews: 'content',

    content: M.ScrollView.design({
        childViews: 'nextPage',
        nextPage: M.ButtonView.design({
            value: 'MenuPage',
            events: {
                tap: {
                    action: function(){
                        M.Controller.switchToPage('splitView');
                    }
                }
            }
        })
    })

});

