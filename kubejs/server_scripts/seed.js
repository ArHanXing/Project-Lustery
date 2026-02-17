// priority: 900
//依旧Deepseek
// 这个事件在每次服务器加载完成（包括第一次进入世界）时触发
ServerEvents.loaded((event) => {
    let server = event.server;
    // 尝试获取种子
    let seed = server.worldData.worldGenOptions().seed();
    if (seed !== undefined) {
        console.log(`成功获取世界种子: ${global.WORLD_SEED}`);
    } else {
        console.log('首次加载，即将执行重载以获取种子...');
        // 关键步骤：执行重载，确保后续能拿到种子
        server.runCommandSilent('reload');
    }
});