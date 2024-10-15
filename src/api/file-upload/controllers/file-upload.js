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
        if(files.CourseCertificate){
          const courseCertificateType = files.CourseCertificate.type;
            if (files.CourseCertificate.size > documentSizeLimit) {
                return ctx.badRequest('Course certificate size should not exceed 10 MB.');
            }
            if (!allowedDocumentTypes.includes(courseCertificateType)) {
                return ctx.badRequest('Course certificate type must be pdf, jpg, jpeg, or png.');
            }
        }
        if(files.ProjectCertificate){
          const projectCertificateType = files.ProjectCertificate.type;
            if (files.ProjectCertificate.size > documentSizeLimit) {
                return ctx.badRequest('Project certificate size should not exceed 10 MB.');
            }
            if (!allowedDocumentTypes.includes(projectCertificateType)) {
                return ctx.badRequest('Project certificate type must be pdf, jpg, jpeg, or png.');
            }
        }
        if(files.ResearchCertificate){
          const researchCertificateType = files.ResearchCertificate.type;
            if (files.ResearchCertificate.size > documentSizeLimit) {
                return ctx.badRequest('Research certificate size should not exceed 10 MB.');
            }
            if (!allowedDocumentTypes.includes(researchCertificateType)) {
                return ctx.badRequest('Research certificate type must be pdf, jpg, jpeg, or png.');
            }
        }
        if(files.InternshipCertificate){
          const internshipCertificateType = files.InternshipCertificate.type;
            if (files.InternshipCertificate.size > documentSizeLimit) {
                return ctx.badRequest('Internship certificate size should not exceed 10 MB.');
            }
            if (!allowedDocumentTypes.includes(internshipCertificateType)) {
                return ctx.badRequest('Internship certificate type must be pdf, jpg, jpeg, or png.');
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

            if(files.CourseCertificate){
              
              const courseFolderId = await getFolderId('CourseCertificates', parentFolderId);
              const uploadedCourseCertificate = await strapi.plugins['upload'].services.upload.upload({
                  files: files.CourseCertificate,
                  data: {fileInfo: {folder: courseFolderId}},
                });
  
                data.course = {
                  id: uploadedCourseCertificate[0].id,
                  url: uploadedCourseCertificate[0].url,
                  name: uploadedCourseCertificate[0].name,
                };
            }

            if(files.ProjectCertificate){
              
              const projectFolderId = await getFolderId('ProjectCertificates', parentFolderId);
              const uploadedProjectCertificate = await strapi.plugins['upload'].services.upload.upload({
                  files: files.ProjectCertificate,
                  data: {fileInfo: {folder: projectFolderId}},
                });
  
                data.project = {
                  id: uploadedProjectCertificate[0].id,
                  url: uploadedProjectCertificate[0].url,
                  name: uploadedProjectCertificate[0].name
                };
            }

            if(files.ResearchCertificate){
              
              const researchFolderId = await getFolderId('ResearchCertificates', parentFolderId);
              const uploadedResearchCertificate = await strapi.plugins['upload'].services.upload.upload({
                  files: files.ResearchCertificate,
                  data: {fileInfo: {folder: researchFolderId}},
                });
  
                data.research = {
                  id: uploadedResearchCertificate[0].id,
                  url: uploadedResearchCertificate[0].url,
                  name: uploadedResearchCertificate[0].name,
                };
            }

            if(files.InternshipCertificate){
              
              const internshipFolderId = await getFolderId('InternshipCertificates', parentFolderId);
              const uploadedInternshipCertificate = await strapi.plugins['upload'].services.upload.upload({
                  files: files.InternshipCertificate,
                  data: {fileInfo: {folder: internshipFolderId}},
                });
  
                data.internship = {
                  id: uploadedInternshipCertificate[0].id,
                  url: uploadedInternshipCertificate[0].url,
                  name: uploadedInternshipCertificate[0].name,
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
  