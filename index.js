const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log("Running at localhost:3000");


const fetch = require("node-fetch")
const fs = require("fs")
const beautify = require('beautify');

fetch('https://api.wazirx.com/api/v2/tickers')
  .then(res => res.json())
  .then(data => {
  // fs.writeFileSync("./public/db.json", beautify(data, {format: "json"}))
  // console.log(data)

  var html = []
  html.push(`<table width="90%"><tr class="nobg" style="backgroud-color: #191d28;"><th>#</th><th>Name</th><th>Last</th><th>Buy / Sell price</th><th>Volume</th><th>Base Unit</th></tr>`)

  let tableData1 = "<td>"
  let tableData2 = "</td>"
  let number = 1

  let temp = ""
  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.btcinr.name}${tableData2}${tableData1}${data.btcinr.last}${tableData2}${tableData1}${data.btcinr.buy}/${data.btcinr.sell}${tableData2}${tableData1}${data.btcinr.volume}${tableData2}${tableData1}${data.btcinr.base_unit}${tableData2}</tr>`

  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.xrpinr.name}${tableData2}${tableData1}${data.xrpinr.last}${tableData2}${tableData1}${data.xrpinr.buy}/${data.xrpinr.sell}${tableData2}${tableData1}${data.xrpinr.volume}${tableData2}${tableData1}${data.xrpinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.ethinr.name}${tableData2}${tableData1}${data.ethinr.last}${tableData2}${tableData1}${data.ethinr.buy}/${data.ethinr.sell}${tableData2}${tableData1}${data.ethinr.volume}${tableData2}${tableData1}${data.ethinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.trxinr.name}${tableData2}${tableData1}${data.trxinr.last}${tableData2}${tableData1}${data.trxinr.buy}/${data.trxinr.sell}${tableData2}${tableData1}${data.trxinr.volume}${tableData2}${tableData1}${data.trxinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.eosinr.name}${tableData2}${tableData1}${data.eosinr.last}${tableData2}${tableData1}${data.eosinr.buy}/${data.eosinr.sell}${tableData2}${tableData1}${data.eosinr.volume}${tableData2}${tableData1}${data.eosinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.zilinr.name}${tableData2}${tableData1}${data.zilinr.last}${tableData2}${tableData1}${data.zilinr.buy}/${data.zilinr.sell}${tableData2}${tableData1}${data.zilinr.volume}${tableData2}${tableData1}${data.zilinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.batinr.name}${tableData2}${tableData1}${data.batinr.last}${tableData2}${tableData1}${data.batinr.buy}/${data.batinr.sell}${tableData2}${tableData1}${data.batinr.volume}${tableData2}${tableData1}${data.batinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.zrxinr.name}${tableData2}${tableData1}${data.zrxinr.last}${tableData2}${tableData1}${data.zrxinr.buy}/${data.zrxinr.sell}${tableData2}${tableData1}${data.zrxinr.volume}${tableData2}${tableData1}${data.zrxinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.omginr.name}${tableData2}${tableData1}${data.omginr.last}${tableData2}${tableData1}${data.omginr.buy}/${data.omginr.sell}${tableData2}${tableData1}${data.omginr.volume}${tableData2}${tableData1}${data.omginr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  temp = `<tr>${tableData1}${number}${tableData2}${tableData1}${data.polyinr.name}${tableData2}${tableData1}${data.polyinr.last}${tableData2}${tableData1}${data.polyinr.buy}/${data.polyinr.sell}${tableData2}${tableData1}${data.polyinr.volume}${tableData2}${tableData1}${data.polyinr.base_unit}${tableData2}</tr>`
  
  number++
  html.push(temp)

  html = beautify(html.join(""), {format: "html"})

  fs.writeFileSync('./public/tData.html', `${html}`);

});

