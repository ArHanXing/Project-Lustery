ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    //你真的是 T1 机器吗？


    //随机模式
    mme.machine_recipe("mmr:t1.dimrift_mining_station",100)
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
        .id("t1.mmr.psc.dms.gorandom") //是的 这里有16个LootTable

    let oreTypes = [
        'minecraft:iron_ore',
        'minecraft:coal_ore',
        'minecraft:copper_ore',
        'mekanism:tin_ore',
        'tfmg:nickel_ore',
        'mekanism:lead_ore',
        'minecraft:gold_ore',
        'minecraft:emerald_ore',
        'mekanism:osmium_ore',
        'mekanism:uranium_ore',
        'minecraft:diamond_ore',
        'minecraft:nether_quartz_ore',
        'create:zinc_ore',
        'tfmg:lithium_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'eidolon_repraised:silver_ore',
        'mekanism:fluorite_ore',
        'sgjourney:naquadah_ore'
    ];

    oreTypes.forEach(cur =>{
        //TODO
    })
});