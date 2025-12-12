// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup script)')
//KubeJS Startup Script


/*
t1 defective_lust_crystal
t2 normal_lust_crystal
t3 exquisite_lust_crystal
*/
StartupEvents.registry("item",e=>{
    e.create("kubejs:defective_lust_crystal")
    e.create("kubejs:normal_lust_crystal")
    e.create("kubejs:exquisite_lust_crystal")
})