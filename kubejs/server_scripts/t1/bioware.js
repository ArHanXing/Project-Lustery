ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    const ec = e.recipes.create;

    ec.pressing('kubejs:petri_dish','minecraft:glass');
})