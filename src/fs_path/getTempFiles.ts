
const fs = require("fs");
const os = require("os");

export const GB:string = "GB";
export const MB:string = "MB";
export const KB:string = "KB";
export const BYTES:string = "bytes";

            



let _getInfoTempFiles = new Promise((resolve:any,reject:any)=>{
    let sumSize:number = 0;

    let filenames = fs.readdirSync(`${os.homedir()}/AppData/Local/Temp`);
    filenames.forEach((item:any) => {
        
                sumSize+=fs.statSync(`${os.homedir()}/AppData/Local/Temp/${item}`).size;
              
        });

    
   
  return  setTimeout(() => {
        resolve(sumSize)
    }, 1000); 
        
})

export async function getInfoTempFiles(sizeShow:string = "bytes"){
    let res:number = 0;
   
    await _getInfoTempFiles.then((data:number)=>{
        res = data;
       console.log(res);
   
   });
  
 


   switch(sizeShow){
    case GB:
        return (res/1024/1024/1024).toFixed(2);

       case MB:
        return (res/1024/1024).toFixed(0);
       
       case KB:
           return (res/1024).toFixed(0);
       case BYTES:
           return (res).toFixed(0);
   }
}


           // fs.stat(`${os.homedir()}/AppData/Local/Temp/`+ item, (err:any, fileStats:any) => {
            //     if (err) {
            //       //console.log(err)
            //     } else {
            //       console.log(fileStats.size)
            //       sumSize += parseInt(fileStats.size);
            //     }
            //   })