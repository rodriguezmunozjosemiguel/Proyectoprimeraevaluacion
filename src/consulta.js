/*Hace unos años se descubrieron planetas nuevos ,pero no se consideraron planetas por su tamaño enano ,
además de eso se supo que sus velocidades de escape eran  mayor o igual a 1 km/s ,
 pero algunos de ellos se declararon como peligroso dado que en su composición atmosférica está constituida por N2 y CH4 ,
 y esos gases en conjunto puede detonar en una gran explosión.
Dado a esta situación me gustaría saber,cuáles son esos planetas para en futuro saber si esa onda de explosión podría llegar alcanzar nuestro planeta.*/

db.planetas.find({$and:[{tamaño:{$ne:"normal"}}, {velocidaddeescape:{$gte:1}}, {atmósfera:{$eq:["N2","CH4" ]}}]}).pretty()

/*Un astronauta dijo que los únicos planetas que fueron visitados por más de un modelo satélite y varias veces,
estaban  cercanos al sol y no eran de tamaño gigante sino de tamaño similar al de la Tierra .
Quiero averiguar cuales son  los planetas,que han sido visitado por más de un satélite,que estén cerca del sol y que tengan un tamaño similar al de la Tierra.*/

db.planetas.find({$and:[{"estudio.satélites":{$regex:/[0-9$]/}},{cercadelsol:{$exists: true}},{tamaño:{$not:{$eq:"gigante"}}}]}).pretty()


/*Mi tío que nació el 2 de enero de 1975 ,
me contó que antes de nacer,
solo se tenía documentación con exactitud de 4 planetas,y por lo tanto los astrónomos de aquel tiempo,
supusieron que el resto de documentaciones obtenidas de los demás planetas eran falsas,dado que no tuvieron la misma tecnología punta para poder estudiarlos,
además un tiempo después,declararon  que todos los estudios  hechos fueron llevados a cabo por estadounidenses,
aunque en la actualidad se descubrió que realmente todo lo contado era un bulo dicho  por los americanos,
puesto que China realizó también algunos estudios,pero fueron archivados como información privada .
Y me gustaría saber cuales son esos planetas estudiados por China ,con una fecha menor a la del nacimiento de mi tío.*/

db.planetas.find({$and:[{date:{$lte:new Date("1975-01-01")} },{$nor:[ {acercamiento:"Estados Unidos"}, {acercamiento:"Italia"}]}]}).pretty()

/*En las noticias anunciaron de que unos científicos con un solo satélite,habían dado con un planeta lejano,
el cual no tenía una atmósfera contaminante respecto a los otros descubiertos,puesto que este contenía agua y oxígeno en su atmósfera,
pero dijeron que no tenía ninguna luna en su órbita,
y que no podía ser helado ni fluido.El problema fue que pasaron a los anuncios,y no pude saber de qué planeta lejano se trataba.*/

db.planetas.find({$and:[{ "estudio.satélites": { $size: 1 } } ,{$nor:[{atmósfera:["N2","CH4"]},{tiposdeplanetas:["fluido","helado"]}]},{lunas:{$eq:0}}]}).pretty()

/*En el canal National geographic,salieron documentales de astronomía,y en unos de ellos concretamente hablaron sobre  los cinturones de asteroides , 
los cuales solo se encuentran alrededor de los planetas Marte y Júpiter,pero en este documental aportaron ,que los satélites de Marte que están a menos de 30000km  de dicho planeta,
también se encuentran en cinturón de asteroides.Y me gustaría cuáles son esos satélites de Marte ,
que están alrededor del cinturón de asteroides .*/

db.planetas.find ( { órbita: {$all:[{ "$elemMatch":{cercadelcinturóndeasteroides: "Si", distancia: { $lt: 30000 } } }] }})

/*Documentándome por internet leí que los planetas enanos no solían tener muchas lunas 
y que normalmente lo máximo que solían tener eran dos lunas orbitando por su tamaño 
 y me gustaría saber si hay algún planeta  enano que tuviera más de dos lunas.*/

 db.planetas.find({$or:[{lunas:{$gt:2}}],tamaño:{$eq:"enano"}}).pretty()

 /*Para realizar un problema de química ,en el cual tengo que utilizar la Ley Henry,
  necesito averiguar cual es el gas principal del que se compone la atmósfera de cada planeta de nuestro sistema solar,
  para poder obtener la solubilidad de cada uno de ellos.*/

  db.planetas.find({},{_id:0,"atmósfera":{$slice:1}}).pretty()

  /*Ayer leí en una la enciclopedia,que normalmente en nuestro sistema planetario hay planetas con satélites naturales en sus órbitas ,
  pero hay planetas que tienen excepciones ,ya que no contienen satélites naturales,pero no recuerdo cuales son.*/
  
  db.planetas.find({$nor:[{$jsonSchema:{required:["órbita"], properties:{satélitesnaturales:{bsonType:"string"},distancia:{bsonType:"double"},cercadelcinturódenasteroides:{bsonType:"bool"}}}}]}).pretty()
  
  /*Mi profesor me ha pedido buscar información sobre cuál ha sido el planeta descubierto en la actualidad ,y que haya sido documentado por España.*/

  db.planetas.find({descubrimiento:{$not:{$regex:/^P./i} },acercamiento:{$eq:["España"]}}).pretty()

  /*Quiero ver en internet cuales son los desarrolladores europeos y japoneses de satélites,pero no recuerdo bien cómo se escribían sus agencias ,si ESA,JAXA o EXA,JASA*/

   db.planetas.find( { "estudio.desarrolladores": { $in:[ /^E.A$/,/^JA.A$/] } } )

  /* El otro día vi un documental donde aparecía que los satélites que obtuvieron la  mayor información en toda  la historia fueron los del planeta Mercurio,
   pero en cambio del planeta Sedna se decía que tenían poca información al no saber si había algún satélite estudiando dicho planetas.
   Quiero saber cuáles son los satélites de Mercurio y si hay algún satélite que haya estudiado el planeta Sedna.*/

   db.planetas.aggregate([{$sort:{satélites:1}},{$group:{_id:"idAux", primero:{$first:'$estudio.satélites'},ultimo:{$last:'$estudio.satélites'}}}])



