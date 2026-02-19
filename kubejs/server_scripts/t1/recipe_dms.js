ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    //你真的是 T1 机器吗？


    //随机模式
    mme.machine_recipe("mmr:t1.dimrift_mining_station",40)
        .width(150)
        .height(180)
        .requireEnergyPerTick(256)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .id("t1.mmr.psc.dms.gorandom") //是的 这里有32个LootTable

    //TODO：聚焦模式
});