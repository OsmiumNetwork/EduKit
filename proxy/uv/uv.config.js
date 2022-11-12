self.__uv$config = {
    prefix: '/EduKit/proxy/static/~/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/proxy/uv/uv.handler.js',
    bundle: '/proxy/uv/uv.bundle.js',
    config: '/proxy/uv/uv.config.js',
    sw: '/proxy/uv/uv.sw.js',
};
