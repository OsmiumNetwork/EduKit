import http from 'node:http';
import https from 'node:https';
import { MapHeaderNamesFromArray, RawHeaderNames } from './HeaderUtil.mjs';
import { decode_protocol } from './EncodeProtocol.mjs';
import { Response } from './Response.mjs';
import { randomBytes } from 'node:crypto';
import { promisify } from 'node:util';

const randomBytesAsync = promisify(randomBytes);

// max of 4 concurrent sockets, rest is queued while busy? set max to 75
// const http_agent = http.Agent();
// const https_agent = https.Agent();

async function Fetch(server_request, request_headers, url){
	const options = {
		host: url.host,
		port: url.port,
		path: url.path,
		method: server_request.method,
		headers: request_headers,
	};
	
	let outgoing;

	if(url.protocol === 'https:'){
		outgoing = https.request(options);
	}else if(url.protocol === 'http:'){
		outgoing = http.request(options);
	}else{
		throw new RangeError(`Unsupported protocol: '${url.protocol}'`);
	}
	
	server_request.pipe(outgoing);
	
	return await new Promise((resolve, reject) => {
		outgoing.on('response', resolve);
		outgoing.on('error', reject);	
	});
}

function load_forwarded_headers(request, forward, target){
	const raw = RawHeaderNames(request.rawHeaders);

	for(let header of forward){
		for(let cap of raw){
			if(cap.toLowerCase() == header){
				// header exists and real capitalization was found
				target[cap] = request.headers[header];
			}
}
