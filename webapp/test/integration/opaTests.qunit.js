sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'br/com/panvel/nfreport/nfreport/test/integration/FirstJourney',
		'br/com/panvel/nfreport/nfreport/test/integration/pages/nfReportList',
		'br/com/panvel/nfreport/nfreport/test/integration/pages/nfReportObjectPage',
		'br/com/panvel/nfreport/nfreport/test/integration/pages/nfReportItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, nfReportList, nfReportObjectPage, nfReportItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('br/com/panvel/nfreport/nfreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThenfReportList: nfReportList,
					onThenfReportObjectPage: nfReportObjectPage,
					onThenfReportItemsObjectPage: nfReportItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);