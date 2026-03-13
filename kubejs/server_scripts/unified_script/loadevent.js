// priority: 90
//依旧Deepseek
// 这个事件在每次服务器加载完成（包括第一次进入世界）时触发
let IOType = Java.loadClass('es.degrassi.mmreborn.common.machine.IOType');
let _SEED = 0;
ServerEvents.loaded((event) => {
    //种子
    let server = event.server;
    // 尝试获取种子
    let seed = server.worldData.worldGenOptions().seed;
    if (seed !== undefined) {
        console.log(`[Load] 成功获取世界种子: ${_SEED}`);

        _SEED = seed;
    } else {
        console.log('[Load] 首次加载，即将执行重载以获取种子...');
        // 关键步骤：执行重载，确保后续能拿到种子
        server.runCommandSilent('reload');
    }
});

//从 PersistentData 往全局变量里加载
// 要挂全局持久变量在这里修改
// wheel 但是疑似不可用
/*
let _pss_test = 1;
ServerEvents.loaded(e => {
    let data = e.server.getLevel().persistentData;
    
    _pss_test = data.get("_pss_test")
})
*/
/*
ServerEvents.unloaded(e => {
    let data = e.server.getLevel().persistentData;

    function save(string, newData) {
        data.remove(string);
        data.putInt(string,newData);
    }

    save("_pss_test",_pss_test);
})
*/