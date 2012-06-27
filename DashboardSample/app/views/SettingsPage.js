// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: DashboardSample
// View: SettingsPage
// ==========================================================================

DashboardSample.SettingsPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: DashboardSample.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'SettingsPage',

    childViews: 'header content footer',

    header: M.ToolbarView.design({
        value: 'HEADER',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'label',
        label: M.LabelView.design({
            value: 'SettingsPage'
        })
    }),

    footer: M.ToolbarView.design({
        value: 'FOOTER',
        anchorLocation: M.BOTTOM
    })

});

