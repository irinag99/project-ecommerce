const fs = require("fs")
const path = require("path")

function jsonModel(name){
 return  {
     archivo: path.join(__dirname,"..","data",name +".json"),
     getAll: function(){
         const data = fs.readFileSync(this.archivo,"utf-8");

         if (data.length>0){
             return JSON.parse(data)
         }
         return []
     },
     save: function(newData){
        const data = this.getAll()

        const dataAEscribir =[...data,newData]

        fs.writeFileSync(this.archivo,JSON.stringify(dataAEscribir ,null, ' '))
     },
     nextID : function(){
         const data = this.getAll()

         if(data.length==0){
             return 1
         }
         const ultimo = data[data.length-1]

         const ultimoid = ultimo.id + 1
         return ultimoid
     },
     find: function(cb){
         const data = this.getAll()

         const encontrado = data.find(cb)

         return encontrado
     }

 }
}
module.exports = jsonModel;