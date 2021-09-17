const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');


/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  try {
    const { record, uploadFile } = context;
    if (record.isValid() && uploadFile) {
      const filePath = path.join('uploads', uploadFile.name)
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true })

      let readStream=fs.createReadStream(uploadFile.path)
      let writeStream=fs.createWriteStream(filePath)

      readStream.pipe(writeStream);
      readStream.on('end',() => {
        fs.unlinkSync(uploadFile.path);
      })

      await record.update({ file: `/${filePath}` })
    }

    return response;

  } catch (error) {
    console.log(error)
  }
};

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  try {
    if (request.method === 'post') {
      const { uploadFile, ...otherParams } = request.payload;

      // eslint-disable-next-line no-param-reassign
      context.uploadFile = uploadFile;

      return {
        ...request,
        payload: otherParams,
      };
    }

    return request;

  } catch (error) {
    console.log(error)
  }
};

module.exports = { after, before };
