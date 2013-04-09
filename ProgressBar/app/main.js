// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: ProgressBar
// ==========================================================================

var ProgressBar = ProgressBar || {};

ProgressBar.app = M.Application.design({

    entryPage: 'page1',

    page1: M.PageView.design({

        events: {
            pageshow: {
                target: ProgressBar.ApplicationController,
                action: 'initApplication'
            }
        },

        childViews: 'imgGrayscale imgColored number speed',

        imgGrayscale: M.ContainerView.design({
            cssClass: 'miranda grayscale'
        }),

        imgColored: M.ContainerView.design({
            cssClass: 'miranda'
        }),

        number: M.LabelView.design({
            value: '',
            cssClass: 'number'
        }),

        speed: M.LabelView.design({
            computedValue: {
                contentBinding: {
                    target: ProgressBar.ApplicationController,
                    property: 'speed'
                },
                operation: function(v) {
                    v = v || '-';
                    return v;
                }
            },
            cssClass: 'speed'
        })

    })

});
