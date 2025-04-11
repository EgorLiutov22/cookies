import ConvertApi from 'convertapi-js'
async function uploadFiles(file, filename) {
let convertApi = ConvertApi.auth('token_vR27gJaw')
  const url = 'https://v2.convertapi.com/convert/pdf/to/jpg?secret=token_vR27gJaw';
  
	let params = convertApi.createParams()
params.add('File', file);
let result = await convertApi.convert('html', 'jpg', params)
}

function printFiles(e) {  
    const files = e.target.files;   // получаем все выбранные файлы  
    let output = "";
    for (let i = 0; i < files.length; i++) {        // Перебираем все выбранные файлы   
        const file = files[i];      // Получаем файл 
        console.log(file);
        output += "<li><p><strong>" + file.name + "</strong></p>";
        output += "<p>Type: " + file.type || "n/a</p>";
        output += "<p>Size: " + file.size + " bytes</p>";   
        output += "<p>Changed on: " +  file.lastModifiedDate.toLocaleDateString() + "</p></li>";
		file.text().then((txt)=>uploadFiles(txt, file.name))
		
		
    } 
    document.getElementById("list").innerHTML = "<ul>" + output + "</ul>";
}
document.getElementById("files").addEventListener("change", printFiles);