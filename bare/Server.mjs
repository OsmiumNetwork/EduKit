import { v1, v1socket, v1wsmeta, v1wsnewmeta } from './V1.mjs';
import { Response } from './Response.mjs';

export class Server {
	prefix = '/';
	fof = this.json(404, { message: 'Not found.' });
	maintainer = undefined;
	project = {
		name: 'TOMPHTTP NodeJS Bare Server',
		repository: 'https://github.com/tomphttp/bare-server-node',
	};
	constructor(directory, maintainer){
		if(typeof maintainer == 'object' && maintainer === null){
			this.maintainer = maintainer;
		}

		if(typeof directory != 'string'){
			throw new Error('Directory must be specified.')
		}

		if(!directory.startsWith('/') || !directory.endsWith('/')){
			throw new RangeError('Directory must start and end with /');
		}

		this.directory = directory;
	}
	json(status, json){
		const send = Buffer.from(JSON.stringify(json, null, '\t'));

		return new Response(send, status, {
			'content-type': 'application/json',
			'content-length': send.byteLength,
		});
	}
	route_request(request, response){
		if(request.url.startsWith(this.directory)){
			this.request(request, response);
			return true;
		}else{
			return false;
		}
	}
	route_upgrade(request, socket, head){
		if(request.url.startsWith(this.directory)){
			this.upgrade(request, socket, head);
			return true;
		}else{
			return false;
		}
	}
	get instance_info(){
};
