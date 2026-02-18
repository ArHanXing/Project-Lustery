// priority: 80
ServerEvents.recipes(e =>{
    const mmc = e.recipes.custommachinery
    const mme = e.recipes.modular_machinery_reborn;
    const ec = e.recipes.create;
    //极化器
    e.remove({type: 'tfmg:polarizing'})

    let polarizerRecipe = [
        ['minecraft:iron_ingot','kubejs:magnetize_iron_ingot'],
        ['createaddition:iron_rod','kubejs:magnetize_iron_rod'],
        ['create:iron_sheet','kubejs:magnetize_iron_sheet'],
        ['tfmg:magnetic_alloy_ingot','tfmg:magnet']
    ]
    polarizerRecipe.forEach(cur =>{
        mmc.custom_machine("custommachinery:polarizer",20)
            .requireItem(cur[0],"input")
            .produceItem(cur[1],"output")
            .requireEnergy(512)
    })
});