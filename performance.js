var askPerfApi = {
    getNetworkMetrics: function () {
        if(navigator.connection) {
            return navigator.connection
        }
    },

    /**
     * This method shall be called only on window onload , otherwise it will return 'undefined'
     * @returns {{loadTime: number, responseTime: number, renderTime: number}}
     */
    getPagePerfMetrics:  function () {
        if( document.readyState === 'complete' && window.performance) {
            var perfData = window.performance.timing;
            return {
                loadTime: (perfData.loadEventEnd - perfData.navigationStart),
                responseTime: (perfData.responseEnd - perfData.requestStart),
                renderTime: (perfData.domComplete - perfData.domLoading)
            }
        }
    }
}
