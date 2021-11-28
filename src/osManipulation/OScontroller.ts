
const osUtils 	= require('os-utils');
const os 	= require('os');

interface UserInfo{
    username:string
    homedir :string
}

export default class OSController{
    
    //private __cpuData:Array<any> [];
    private __cpuUsagePer:number;
    private __ramUsagePer:number;



    public getCPUPercent(){
        osUtils.cpuUsage((v:number)=>{
            this.__cpuUsagePer = v*100;
                return v*100;
        });
        return this.__cpuUsagePer;
    }



    public getRamPercent(){
        return osUtils.freememPercentage()*100;
    }
    
    public getUserInfo():UserInfo{

        return os.userInfo();
    }
}