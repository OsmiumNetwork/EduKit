self.__uv$config = {
    prefix: '/proxy/static/~/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/EduKit/proxy/uv/uv.handler.js',
    bundle: '/EduKit//proxy/uv/uv.bundle.js',
    config: '/EduKit/proxy/uv/uv.config.js',
    sw: '/EduKit/proxy/uv/uv.sw.js',
};
