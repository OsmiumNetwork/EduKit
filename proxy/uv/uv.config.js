self.__uv$config = {
    prefix: '/~/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/proxy/static/uv/uv.handler.js',
    bundle: '/proxy/static/uv/uv.bundle.js',
    config: '/proxy/static/uv/uv.config.js',
    sw: '/proxy/static/uv/uv.sw.js',
};
