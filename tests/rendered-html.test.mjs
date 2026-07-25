import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Creator Growth funnel", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Creator Growth Program \| 19Keys x High Lvl/i);
  assert.match(html, /Creator/);
  assert.match(html, /Partnerships begin at \$19,000/);
  assert.match(html, /LA Filmed Discovery/);
  assert.match(html, /Private Discovery/);
  assert.match(html, /Application for placement/);
  assert.match(html, /Nearly 1M/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
