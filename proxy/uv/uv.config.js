self.__uv$config = {
    prefix: '/EduKit/proxy/static/~/',
    bare: 'https://edukitbackend.up.railway.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/EduKit/proxy/uv/uv.handler.js',
    bundle: '/EduKit//proxy/uv/uv.bundle.js',
    config: '/EduKit/proxy/uv/uv.config.js',
    sw: '/EduKit/proxy/uv/uv.sw.js',
};
