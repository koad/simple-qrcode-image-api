// Even tho this is a serverside route,  we keep it where the client can see it, else the client will assume it should error when browsing to this route.

import { Meteor } from 'meteor/meteor';

const regex = /(.*)\.([^.]+$)/; // Regex to dissect the filename from the URL
var acceptableFileTypes = ["pdf", "svg", "png", "eps"];

Router.route('/image/:_content', function () {
	const qr = require('qr-image');
	const filename = this.params._content;
	const contentArray = regex.exec(this.params._content);

	if (!contentArray || !contentArray[0] ) return this.response.end('invalid file format');
	
	const content=contentArray[1];
	const fileType = contentArray[2].toLowerCase();
	const isAcceptable = (acceptableFileTypes.indexOf(fileType) >-1);

	if(!isAcceptable) return this.response.end('file format not supported');

  var qrData = qr.imageSync(content,{ type: fileType, margin: 2})

	// Set the headers
	this.response.writeHead(200, {
		'Content-Type': `image/${fileType}`,
	});

	// Pipe the file contents to the response
	this.response.end(qrData);
	
}, { where: 'server' });
