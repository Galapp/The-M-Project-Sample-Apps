m_require('app/views/tabs.js');
m_require('app/views/utilities_page_list_item_template.js');

KitchenSink.PageUtilities = M.PageView.design({

    events: {
        pageshow:{
            target: KitchenSink.UtilitiesController,
            action: 'init'
        }},

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({

        value: 'Utilities',

        anchorLocation: M.TOP

    }),

    content: M.ScrollView.design({

        childViews: 'utilList',

        utilList: M.ListView.design({
            listItemTemplateView: KitchenSink.UtilitiesPageListItemTemplate,
            contentBinding: {
                target: KitchenSink.UtilitiesController,
                property: 'utilitiesList'
            }
        })

    }),

    tabBar: KitchenSink.TabBar

});