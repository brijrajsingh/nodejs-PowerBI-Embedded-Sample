# nodejs-PowerBI-Embedded-Sample
A Sample nodejs application to show usage of PowerBiClient SDK and PowerBI SDK for NodeJS

The application is a basic NodeJS application (Express based), it uses Power BI client for nodeJS (https://microsoft.github.io/PowerBI-JavaScript/) 
and Power BI NPM Package at server side (https://github.com/Microsoft/PowerBI-Node )

In app.js
A JWT token is generated with the help of PowerBI SDK for NodeJS

`var token = powerbi.PowerBIToken.createReportEmbedToken('WorkspaceCollection', 'workspaceId', 'reportId');`

`var jwtoken = token.generate('accessKey');`

This JWT token is passed to the html page in a variable

`res.render('index.html', {
            title: 'PowerBI Report',jwt:jwtoken
      });`


In index.html

`<script src="powerbi.min.js"></script>`

Include the PowerBI client sdk min file (you can also include this file directly from bower distribution folder).


`<div id="myReport"
	powerbi-type="report"
    powerbi-embed-url="https://embedded.powerbi.com/appTokenReportEmbed?reportId=REPORTID" 
    powerbi-access-token=<%- JSON.stringify(jwt) %> style="height: 600px;"
</div>`

set the powerbi-embed-url attribute with ReportId, also set the powerbi-access-token returned from the server side in jwt variable.

in the doinit function call, call the powerbi.embed function with myReport element.

`<script type="text/javascript">
		function doinit(){
			var element = document.getElementById('myReport');
			var report = powerbi.embed(element);
			console.log("initDOne")
		}
	</script>`

