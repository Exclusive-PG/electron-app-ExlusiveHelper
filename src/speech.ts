/* @ts-ignore */
const speech:any = new Artyom();

      const Name = "Dmitriy"
      speech.initialize({
            lang:"ru-RU",// A lot of languages are supported. Read the docs !
            continuous:true,// Artyom will listen forever
            listen:true, // Start recognizing
            debug:false, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
          
          setTimeout(() => {
            speech.say(`Привет ${Name}`);

          }, 1000);
        });
