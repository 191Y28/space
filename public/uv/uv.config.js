// This file overwrites the stock UV config.js
self.__uv$config = {
    prefix: "/uv/service/",
    bare: "https://mysevrer.onrender.com/", // Your hidden Render path
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    client: "/uv/uv.client.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",
};
