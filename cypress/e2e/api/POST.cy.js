// POST de file.xlsx

/// function

// function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
//   const byteCharacters = atob(b64Data);
//   const byteArrays = [];

//   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//     const slice = byteCharacters.slice(offset, offset + sliceSize);
//     const byteNumbers = new Array(slice.length);

//     for (let i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }

//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }

//   return new Blob(byteArrays, { type: contentType });
// }

///// testCase


// describe('Envio de arquivo .xlsx', () => {
//   it('Deve enviar o arquivo .xlsx com sucesso', () => {
//     const fileName = 'planilha.xlsx';
//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
//     const headers = {
//       'x-api-key': '123',
//       'accept-encoding': 'gzip, deflate, br',
//       'content-type': 'multipart/form-data'
//     };

//     cy.fixture(fileName, 'base64').then((excelBin) => {
//       const formData = new FormData()
//       const fileBlob = b64toBlob(excelBin, fileType)
//       formData.set('file', fileBlob, fileName)

//       cy.request({
//         method: 'POST',
//         url: "xpto",
//         headers,
//         body: formData,
//         failOnStatusCode: false
//       }).then((response) => {

//         expect(response.status).to.eq(201);
//        // demais asserts

//       });
//     });
//   });
// });