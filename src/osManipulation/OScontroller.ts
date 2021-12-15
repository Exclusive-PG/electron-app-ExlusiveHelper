
const osUtils 	= require('os-utils');
const os 	= require('os');
const si = require('systeminformation');

interface UserInfo{
    username:string
    homedir :string
}

export interface IitemArrayInfo{
    data:any
    isNotEmpty:boolean
    Label : string
    data_key : string
}

export default class OSController{
    
    //private __cpuData:Array<any> [];
    private __cpuUsagePer:number;
    private __ramUsagePer:number;

    ///data
    public  cpuData             :any 
            graphicsData        :any
            memLayoutData       :any
            networkInterfaces   :any
            wifiConnections     :any
            //generalSettings     :any
            systemInfo          :any
            OS                  :any
            FS                  :any
            USB                 :any
            printer             :any
            audio               :any
            bluetooth           :any
            battery             :any

            ArrayAll            :Array<IitemArrayInfo>

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

    //cpu  = object 
    //graphics = object
    //memory = array
    //network = array
    //wifi = array
    async  getData() {
   

        try {
            this.cpuData = await si.cpu();
         //   console.log(this.cpuData);

            this.graphicsData = await si.graphics();
           // console.log(this.graphicsData);

            this.memLayoutData = await si.memLayout();
          //  console.log(this.memLayoutData);

            this.networkInterfaces = await si.networkInterfaces()
          //  console.log(this.networkInterfaces);

            this.wifiConnections = await si.wifiConnections()
          //  console.log(this.wifiConnections);
             


            this.systemInfo = await si.system();
           // console.log(this.systemInfo)

            this.OS = await si.osInfo();
           // console.log(this.OS)

            this.FS = await si.diskLayout();
          //  console.log(this.FS)

            this.USB = await si.usb();
          //  console.log(this.USB)

            this.printer = await si.printer();
          //  console.log(this.printer)

            this.audio = await si.audio();
           // console.log(this.audio)

            this.bluetooth = await si.bluetoothDevices();
          //  console.log(this.bluetooth)

          this.battery = await si.battery();

        } catch (e) {
            console.log(e)
        }

        this.ArrayAll = [
            
            {data:this.cpuData,isNotEmpty:this.cpuData !== null ? true : false,Label:"CPU",data_key:"CPU"},

            {data:this.graphicsData,isNotEmpty:this.graphicsData !== null ? true : false,Label:"Graphics",data_key:"Graphics"},

            {data:this.memLayoutData,isNotEmpty:this.memLayoutData.length !== 0 ? true : false,Label:"Memory/RAM",data_key:"Memory/RAM"},

            {data:this.networkInterfaces,isNotEmpty:this.networkInterfaces.length !== 0 ? true : false,Label:"Network",data_key:"Network"},

            {data:this.wifiConnections,isNotEmpty:this.wifiConnections.length !== 0 ? true : false,Label:"Wifi",data_key:"Wifi"},
                     
            {data:this.systemInfo,isNotEmpty:this.systemInfo !== null ? true : false,Label:"System",data_key:"System"},         

            {data:this.OS,isNotEmpty:this.OS !== null ? true : false,Label:"OS",data_key:"OS"},         

            {data:this.FS,isNotEmpty:this.FS.length  !== 0 ? true : false,Label:"FS",data_key:"FS"},             
                      
            {data:this.USB,isNotEmpty:this.USB.length  !== 0 ? true : false,Label:"USB",data_key:"USB"},   
            
            {data:this.printer,isNotEmpty:this.printer.length  !== 0 ? true : false,Label:"Printer",data_key:"Printer"},   
                   
            {data:this.audio,isNotEmpty:this.audio.length  !== 0 ? true : false,Label:"Audio",data_key:"Audio"},   

            {data:this.bluetooth,isNotEmpty:this.bluetooth.length  !== 0 ? true : false,Label:"Bluetooth",data_key:"Bluetooth"},  

            {data:this.battery,isNotEmpty:this.battery.hasBattery,Label:"Battery",data_key:"Battery"}     
                       

                    ]

                    console.log(this.ArrayAll);
    }

}