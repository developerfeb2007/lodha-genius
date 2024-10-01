module.exports = {
    async uploadDocuments(ctx) {
      // Check if the request is multipart/form-data
      if (!ctx.is('multipart')) {
          return ctx.badRequest('Only multipart/form-data is supported.');
        }
    
        const { files } = ctx.request;
  
        // Set the size limits
        const photoSizeLimit = 2 * 1024 * 1024; // 2 MB
        const documentSizeLimit = 10 * 1024 * 1024; // 10 MB
  
        // Define allowed MIME types
        const allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const allowedDocumentTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];

        if(files.Photograph){
            const photoType = files.Photograph.type;
              if (files.Photograph.size > photoSizeLimit) {
                  return ctx.badRequest('Photograph size should not exceed 2 MB.');
              }
              if (!allowedImageTypes.includes(photoType)) {
                  return ctx.badRequest('Photograph type must be jpg, jpeg, or png.');
              }
        }
        if(files.Marksheet){
            const marksheetType = files.Marksheet.type;
            if (files.Marksheet.size > documentSizeLimit) {
                return ctx.badRequest('Marksheet size should not exceed 10 MB.');
            }
            if (!allowedDocumentTypes.includes(marksheetType)) {
                return ctx.badRequest('Marksheet type must be pdf, jpg, jpeg, or png.');
            }
        }
        if(files.ConsentLetter){
            const consentLetterType = files.ConsentLetter.type;
            if (files.ConsentLetter.size > documentSizeLimit) {
                return ctx.badRequest('Consent letter size should not exceed 10 MB.');
            }
            if (!allowedDocumentTypes.includes(consentLetterType)) {
                return ctx.badRequest('Consent letter type must be pdf, jpg, jpeg, or png.');
            }
        }
    
        try {
            const parentFolderId = await getFolderId('Documents');

            const data = {
              message: 'File uploaded successfully!',
            };
  
            if(files.Photograph){
              
              const photographFolderId = await getFolderId('Photographs', parentFolderId);
              const uploadedPhotograph = await strapi.plugins['upload'].services.upload.upload({
                  files: files.Photograph,
                  data: {fileInfo: {folder: photographFolderId}},
                });
  
                data.photograph = {
                  id: uploadedPhotograph[0].id,
                  url: uploadedPhotograph[0].url,
                };
            }
  
            if(files.Marksheet){
              
              const marksheetFolderId = await getFolderId('MarkSheets', parentFolderId);
              const uploadedMarksheet = await strapi.plugins['upload'].services.upload.upload({
                  files: files.Marksheet,
                  data: {fileInfo: {folder: marksheetFolderId}},
                });
  
                data.marksheet = {
                  id: uploadedMarksheet[0].id,
                  url: uploadedMarksheet[0].url,
                };
            }
  
            if(files.ConsentLetter){
              
              const consentFolderId = await getFolderId('ConsentLetters', parentFolderId);
              const uploadedConsentLetter = await strapi.plugins['upload'].services.upload.upload({
                  files: files.ConsentLetter,
                  data: {fileInfo: {folder: consentFolderId}},
                });
  
                data.consentLetter = {
                  id: uploadedConsentLetter[0].id,
                  url: uploadedConsentLetter[0].url,
                };
            }
          
          return ctx.send({data});
        } catch (err) {
          return ctx.badRequest('File upload failed', { error: err });
        }
    },
  };


  async function getFolderId(folderName, parentFolderId = null) {
      const folder = await strapi.query('plugin::upload.folder').findOne({
        where: { name: folderName, parent: parentFolderId }
      });
      
      if (folder) {
        return folder.id;
      } else {
        // Create the folder if it doesn't exist
        const newFolder = await strapi.plugins['upload'].services.folder.create({
          name: folderName,
          parent: parentFolderId
        });
        return newFolder.id;
      }  
  }
  