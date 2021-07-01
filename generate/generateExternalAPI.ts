import axios from "axios";
import fs from "fs"
export const generateExternalAPI = async () => {
	const apiAddresses = new Map([
		['usdc', '0xA6Ec2Fe4F6040b188A926048f44c9A59Fca189d4'],
	]);
	const currency = 'usdc';
	await axios.get(`https://api.bscscan.com/api?module=contract&action=getabi&address=${apiAddresses.get(currency)}`).then(t => {
		console.log("wrighting to: \n"+t.data.result)
		fs.writeFile("./test/abi/"+currency+".json",t.data.result,(err)=>{
			if(err)throw err
		})
	})

}

generateExternalAPI();
