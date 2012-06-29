KitchenSink.ControlsButtonGroupViewPageListItemTemplate = M.ListItemView.design({

    childViews: 'name',

    events: {
        tap: {
            target:KitchenSink.ControlsButtonGroupViewController,
            action:'controlSelected'
        }
    },

    name: M.LabelView.design({

        valuePattern: '<%= name %>'

    })

});