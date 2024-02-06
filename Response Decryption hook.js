setImmediate(function(){
	Java.perform(function(){
		var Response decryption = Java.use("com.financial.company.ExampleSolution");
		exit_bypass.ExampleDec.implementation = function(a,b){
			
			var retval = this.ExampleDec(a,b);
			
			var dec = decodeURIComponent(retval);
			
			console.log("\n\x1b[31mretval:\x1b[0m \x1b[34m" + dec + "\x1b[0m");

			return dec;

		}
	})
})
