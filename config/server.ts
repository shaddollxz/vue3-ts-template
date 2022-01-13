import type { ServerOptions } from "vite";
import os from "os";

export default function getServer(Env: ImportMetaEnv, isBuild: boolean): ServerOptions {
    let proxySetting: { target: string; rewrite: string };

    let host = "localhost";
    //todo 根据环境变量配置代理和本地服务器地址
    if (Env.VITE_LOCAL) {
        proxySetting = { target: "", rewrite: "" };
    } else {
        proxySetting = { target: "", rewrite: "" };

        try {
            const ifaces = os.networkInterfaces()!;
            for (let dev in ifaces) {
                ifaces[dev]!.forEach((details, alias) => {
                    // 寻找IPv4协议族，并且地址不是本地地址或者回环地址的地址即可。
                    if (details.family === "IPv4" && details.address !== "127.0.0.1" && !details.internal) {
                        host = details.address;
                    }
                });
            }
        } catch {
            host = "localhost";
        }
    }

    return {
        open: false, // dev时是否自动打开浏览器
        host,
        port: 8000, // 开发服务器的端口
        proxy: {
            "/api": {
                target: proxySetting.target,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, proxySetting.rewrite),
            },
        },
    };
}
