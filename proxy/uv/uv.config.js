self.__uv$config = {
    prefix: '/~/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/proxy/uv/uv.handler.js',
    bundle: '/proxy/uv/uv.bundle.js',
    config: '/proxy/uv/uv.config.js',
    sw: 'uv.sw.js',
};
