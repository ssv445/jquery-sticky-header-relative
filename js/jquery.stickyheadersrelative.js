(function ($) {
    $.fn.stickyHeadersRelative = function (stickySelector, options) {
        const defaults = {
            stickyClass: 'sticky-element',
            backgroundColor: 'white',
            zIndex: 1000,
            additionalStyles: {}
        };

        const settings = $.extend({}, defaults, options);

        return this.each(function () {
            const $parentContainer = $(this);
            const $stickyElement = $parentContainer.find(stickySelector);

            if ($stickyElement.length === 0) {
                console.warn('Sticky element not found. Check your selector.');
                return;
            }

            $stickyElement.addClass(settings.stickyClass);
            const originalTop = $parentContainer.offset().top;
            const stickyTop = $stickyElement.position().top;


            const applyStyles = (isSticky) => {
                const styles = isSticky
                    ? {
                        position: 'relative',
                        backgroundColor: settings.backgroundColor,
                        zIndex: settings.zIndex,
                        ...settings.additionalStyles
                    }
                    : {
                        position: '',
                        top: '',
                        backgroundColor: 'transparent',
                        zIndex: ''
                    };

                $stickyElement.css(styles);
            };

            $(window).on('scroll', function () {
                const scrollTop = $(window).scrollTop();
                const containerHeight = $parentContainer.height();
                const stickyHeight = $stickyElement.outerHeight();


                if (scrollTop > originalTop + stickyTop) {
                    // Element should be sticky
                    const maxTop = containerHeight - stickyHeight;
                    const newTop = Math.min(scrollTop - originalTop - stickyTop, maxTop);
                    applyStyles(true);
                    $stickyElement.css('top', newTop + 'px');
                } else {
                    // Element should return to its original position
                    applyStyles(false);
                }
            });
        });
    };
}($));

// Usage example:
// $(document).ready(function () {
//     $('table.sticky-header-table').stickyHeadersRelative('thead', {
//         backgroundColor: '#f0f0f0',
//         zIndex: 100,
//         additionalStyles: {
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }
//     });
// });