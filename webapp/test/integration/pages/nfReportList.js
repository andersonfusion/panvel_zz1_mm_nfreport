sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.panvel.nfreport.nfreport',
            componentId: 'nfReportList',
            contextPath: '/nfReport'
        },
        CustomPageDefinitions
    );
});