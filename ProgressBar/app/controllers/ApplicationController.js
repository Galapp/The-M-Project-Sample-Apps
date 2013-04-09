// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: ProgressBar
// Controller: ApplicationController
// ==========================================================================

ProgressBar.ApplicationController = M.Controller.extend({

    speed: null,

    initApplication: function(isFirstLoad) {
        var that = this;

        if(isFirstLoad) {
            window.setTimeout(function() {
                $(document).trigger('resize');

                resize();

                $(document).bind('orientationchange', function() {
                    resize();
                });

                $(window).bind('resize', function() {
                    resize();
                });

                M.DialogView.confirm({
                    title: 'Welcome',
                    message: 'Do you want to start the download of a 10MB dummy file now?',
                    callbacks: {
                        confirm: {
                            action: function() {
                                var lastTime = null;
                                $.ajax({
                                    url: '10MB',
                                    type: 'GET',
                                    dataType: 'json',
                                    complete: function() {
                                        $('.speed').hide();
                                        M.DialogView.alert({
                                            title: 'Job\'s done',
                                            message: 'The 10MB dummy file was successfully downloaded...'
                                        });
                                    },
                                    progress: function( evt ) {
                                        var thisTime = {
                                            time: +new Date(),
                                            data: evt.loaded
                                        };
                                        if(lastTime) {
                                            var timeDiff = thisTime.time - lastTime.time;
                                            var dataDiff = thisTime.data - lastTime.data;

                                            var bytesPerSecond = dataDiff / (timeDiff / 1000);
                                            var kiloBytesPerSecond = bytesPerSecond / 1024;

                                            bytesPerSecond = Math.round(bytesPerSecond * 100) / 100;
                                            kiloBytesPerSecond = Math.round(kiloBytesPerSecond * 100) / 100;

                                            var speedToDisplay = '';
                                            if(bytesPerSecond >= 1000) {
                                                speedToDisplay = kiloBytesPerSecond + ' KB/s';
                                            } else {
                                                speedToDisplay = bytesPerSecond + ' B/s';
                                            }

                                            that.set('speed', speedToDisplay);
                                        }
                                        lastTime = thisTime;

                                        if( evt.lengthComputable ) {
                                            $('.miranda:not(.grayscale)').css('top', 100 - (evt.loaded / evt.total * 100) + '%');
                                            $('.number').text(Math.floor(evt.loaded / evt.total * 100) + '%');
                                        } else {
                                            console.log('Length not computable.');
                                        }
                                    }
                                });
                            }
                        },
                        cancel: {
                            action: function() {

                            }
                        }
                    }
                })
            }, 100);
        }
    }

});

var resize = function() {
    var originalWidth = 1159;
    var originalHeight = 1600;

    var availableWidth = M.Environment.getWidth();
    var availableHeight = M.Environment.getHeight();

    if( availableWidth / availableHeight < originalWidth / originalHeight ) {
        var cropX = availableWidth * (availableWidth / availableHeight - originalWidth / originalHeight);
        var calcWidth = availableHeight / originalHeight * originalWidth;
        $('.miranda').css('background-size', calcWidth + 'px ' + availableHeight + 'px');
        $('.miranda').css('background-position', '-' + originalWidth + ' center');
    } else {
        var cropY = availableHeight * (availableHeight / availableWidth - originalHeight / originalWidth);
        var calcHeight = availableWidth / originalWidth * originalHeight;
        $('.miranda').css('background-size', availableWidth + 'px ' + calcHeight + 'px');
        $('.miranda').css('background-position', 'center -' + cropY / 2 + 'px');
    }

    $('.ui-page').css('opacity', 1);
};

(function addXhrProgressEvent( $ ) {
    var originalXhr = $.ajaxSettings.xhr;
    $.ajaxSetup({
        progress: function() {

        },
        xhr: function() {
            var req = originalXhr(), that = this;
            if( req ) {
                if( typeof req.addEventListener == 'function' ) {
                    req.addEventListener('progress', function( evt ) {
                        that.progress(evt);
                    }, false);
                }
            }
            return req;
        }
    });
})(jQuery);