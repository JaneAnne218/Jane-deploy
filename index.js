/*将下面的转化为commonjs模块

import Koa from "koa";
import KoaStatic from "koa-static";
import KoaRouter from "koa-router";
import path from "path";

*/
const Koa = require("koa");
const KoaStatic = require("koa-static");
const KoaRouter = require("koa-router");
const path = require("path");


const app = new Koa();
console.log(app)
const router = new KoaRouter();

router.post("/user", (ctx) => {
  ctx.body = {
    a: 1,
  };
});

app.use(new KoaStatic(path.resolve() + "/frontend"));

app.use(router.routes()).use(router.allowedMethods());

app.listen("7777", () => console.log("服务监听 7777 端口"));