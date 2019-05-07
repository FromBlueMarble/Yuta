var myOS = require('os');
var myFS = require('fs');

class OSEnvironment
        {
        constructor()
                {
                this.arch = myOS.arch();
                this.EOL = myOS.EOL;
                this.CONSTANTS = myOS.constants;
                this.cpu = myOS.cpus();
                this.endianness = myOS.endianness();
                this.freeMem = myOS.freemem()
//              this.somePID =  myOS.getPriority([25472])
                this.myHome = myOS.homedir()
                this.loadAVG = myOS.loadavg();
                this.fakeBoot();
                }
        fakeBoot()
                {
                console.log("Starting Program: ");
                console.log("This computer has " + this.cpu.length + " cpu's")
                for (var c = 0; c < this.cpu.lengthl; c++)
                {
                console.log("CPU ; " + c + " is " + this.cpu[c])
        }
    }
}

        class FileSystem
        {

        }

        var env = new OSEnvironment();

        //console.log(env);
        //console.log(typeof env);