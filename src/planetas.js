db.planetas.deleteMany({})
db.planetas.insertMany([
    {
        planeta:"Mercurio",
        lunas:0,
        estudio:{
            satélites:["Mariner 10", "BepiColombo  ","MESSENGER","MPO"],
            desarrolladores:[" ESA", " NASA", "JAXA", ]
        },
       
        tamaño:"normal",
      atmósfera:["He","Na+","P+"],
        acercamiento:["Estados Unidos"],
        velocidaddeescape: 4.25 ,
        descubrimiento:["Prehistoria"],
        tiposdeplanetas:["terrestre","cálido"],
        date: new Date("1974-03-09") ,
        cercadelsol: true
},
   
    {planeta:"Venus", lunas:0, estudio:{satélites:["Cosmos 21","Sputnik 20","Zond 1","Cosmos 482","Venera 9","Pioneer Venus","Cassini-Huygens"], desarrolladores:["  ASR", "NASA","ASI"]}, tamaño:"normal", atmósfera:[" CO2", " N2 "," H2O  "], acercamiento:["China"], velocidaddeescape: 10.36, descubrimiento:["Prehistoria"],  tiposdeplanetas:["terrestre","cálido"],date: new Date( "1961-05-12"), cercadelsol: true},
   
    {planeta:"Tierra", lunas:1,probalidaddeimpacto:[{ objetoastronómico: "asteroideNEA", km:32,  cercadelatierra:true },{ objetoastronómico: "asteroideAsclepio", km:0.3, cercadelatierra:true },{ objetoastronómico: "asteroideApolo", km:12,  cercadelatierra:true },{ objetoastronómico: "cometaHalley", km:5.5, cercadelatierra:true },{ objetoastronómico: "cometaLexell", km:17.7,  cercadelatierra:true },{ objetoastronómico: "cometaIkeyaSek", km:3.9,  cercadelatierra:false }],órbita:[{satélitesnaturales:"Luna",distancia:384399,cercadelcinturóndeasteroides:"No"}], estudio:{satélites:["Cohete V2","Sputnik 1","Ohsumi","Salyut 1","Prospero X-3","Rohini"], desarrolladores:["Wehrmacht", "ASIN", "NASA", "ASR"]}, tamaño:"normal", atmósfera:["N2"," O2", " Ar"], acercamiento:["desconocido"], velocidaddeescape: 11.18,  tiposdeplanetas:["terrestre","cálido"], cercadelsol: true},
   
    {planeta:"Marte", lunas:2,órbita:[{satélitesnaturales:"Fobos",distancia:9377 ,cercadelcinturóndeasteroides:"Si"},{satélitesnaturales:"Deimos",distancia:23460,cercadelcinturóndeasteroides:"Si" }], estudio:{satélites:["Mars 1962A","Mariner 8","Viking 1 ","Fobos 2","Deep Space 2","Stardust","Mars Express"], desarrolladores:["ESA","NASA","JAXA","ASI"]}, tamaño:"normal", atmósfera:["CO2 ", "N2", "Ar"], acercamiento:["China"], velocidaddeescape: 5.02, descubrimiento:["Prehistoria"],  tiposdeplanetas:["terrestre","cálido"],date: new Date("1963-06-19"), cercadelsol: true},
   
    {planeta:"Júpiter", lunas:67, órbita:[{satélitesnaturales:"Europa",distancia:670900,cercadelcinturóndeasteroides:"Si" },{satélitesnaturales:"Ío",distancia:421600,cercadelcinturóndeasteroides:"No"}],estudio:{satélites:["Voyager 1","Sonda Galileo","Cassini-Huygens","New Horizons"], desarrolladores:["NASA","ESA","ASI","ASAL"]}, tamaño:"gigante", atmósfera:[" H2 "," He", " CH4"], acercamiento:["Estados Unidos"], velocidaddeescape: 59.54, descubrimiento:["Prehistoria"],  tiposdeplanetas:["fluido","gaseoso"],date: new Date("1973-12-03"), cercadelsol:false},
   
    {planeta:"Saturno", lunas:62,órbita:[{satélitesnaturales:"Mimas",distancia:185520,cercadelcinturóndeasteroides:"No" },{satélitesnaturales:"Encelado",distancia:237948,cercadelcinturóndeasteroides:"No"}], estudio:{satélites:["Pioneer 11","Voyager 2","Voyager 1"], desarrolladores:["NASA", "ASI", "ESA", "Geraldine Chaplin"]}, tamaño:"gigante", atmósfera:["H2 "," He ", "CH4"], acercamiento:["Estados Unidos"], velocidaddeescape: 35.49, descubrimiento:["Prehistoria"], tiposdeplanetas:["fluido","gaseoso"], date: new Date( "1979-09-1"), cercadelsol:false},
   
    {planeta:"Urano", lunas:27,órbita:[{satélitesnaturales:"Miranda",distancia:129390,cercadelcinturóndeasteroides:"No" },{satélitesnaturales:"Ariel",distancia:190900,cercadelcinturóndeasteroides:"No"}], estudio:{satélites:["Voyager 2","Voyager 1"], desarrolladores:["NASA"]}, tamaño:"gigante", atmósfera:[" H2" ," He" ," CH4"], acercamiento:["Estados Unidos"], velocidaddeescape: 21.29, descubrimiento:["Siglo XVIII"], tiposdeplanetas:["fluido","helado"], date: new Date ("1986-01-24"), cercadelsol: false},
   
    {planeta:"Neptuno", lunas:14, órbita:[{satélitesnaturales:"Tritón",distancia:354759,cercadelcinturóndeasteroides:"No" }],estudio:{satélites:["Voyager 2","Voyager 1"], desarrolladores:["NASA"]}, tamaño:"gigante", atmósfera:[" H2", " He", "CH4"], acercamiento:["Estados Unidos"], velocidaddeescape: 23.71, descubrimiento:["Siglo XIX"],  tiposdeplanetas:["fluido","helado"],date: new Date("1989-08-25"), cercadelsol: false},
    
    {planeta:"Ceres", lunas:0, estudio:{satélites:["Dawn"], desarrolladores:["NASA"]}, tamaño:"enano", atmósfera:["H2O", "O2"], acercamiento:["Italia"], velocidaddeescape: 0.51, descubrimiento:["Siglo XIX"],  tiposdeplanetas:["desconocido"],date: new Date("1801-01-1"), cercadelsol: false},
   
    {planeta:"Plutón", lunas:5,órbita:[{satélitesnaturales:"Caronte",distancia:17536,cercadelcinturóndeasteroides:"No"}], estudio:{satélites:["New Horizons"], desarrolladores:["NASA"]}, tamaño:"enano", atmósfera:["N2", "CH4"], acercamiento:["Estados Unidos"], velocidaddeescape: 1.23,descubrimiento:["Siglo XX"], tiposdeplanetas:["desconocido"], date: new Date( "1930-02-18"), cercadelsol:false},
   
    {planeta:"Haumea", lunas:2,órbita:[{satélitesnaturales:"inespecificado",distancia:"inespecificada",cercadelcinturóndeasteroides:"No" }] ,estudio:{satélites:["inespecificado"], desarrolladores:["MPC"]}, tamaño:"enano", atmósfera:["desconocida"], acercamiento:["Estados Unidos"], velocidaddeescape: 0.84,descubrimiento:["Siglo XXI"], tiposdeplanetas:["desconocido"], date: new Date( "2003-03-07"), cercadelsol: false},
   
    {planeta:"Makemake", lunas:1,órbita:[{satélitesnaturales:"inespecificado",distancia:"inespecificada",cercadelcinturóndeasteroides:"No" }] ,estudio:{satélites:["inespecificado"], desarrolladores:["Hubble "]}, tamaño:"enano", atmósfera:["N2","CH4"], acercamiento:["Alemania"], velocidaddeescape: 0.80, descubrimiento:["Siglo XXI"], tiposdeplanetas:["desconocido"],date: new Date( "2005-07-29"), cercadelsol: false},
 
    {planeta:"Eris", lunas:1,órbita:[{satélitesnaturales:"Gabrielle",distancia:"inespecificada",cercadelcinturóndeasteroides:"No" }], estudio:{ satélites:["inespecificado"],desarrolladores:[" observatorio Palomar"]}, tamaño:"enano", atmósfera:["N2","CH4"], acercamiento:["Estados Unidos"], velocidaddeescape: 1.37,descubrimiento:["Siglo XXI"], tiposdeplanetas:["desconocido"], date: new Date( "2005-01-05"), cercadelsol: false},
   
    {planeta:"Sedna", lunas:1,órbita:[{satélitesnaturales:"inespecificado",distancia:"inespecificada",cercadelcinturóndeasteroides:"No" }],estudio:{satélites:["inespecificado"],desarrolladores:[" observatorio Palomar"]}, tamaño:"enano", atmósfera:["desconocida"], acercamiento:["España"], velocidaddeescape: 0.90,descubrimiento:["Siglo XXI"], tiposdeplanetas:["desconocido"], date: new Date( "2003-11-14"), cercadelsol: false},
 
   
    ])
