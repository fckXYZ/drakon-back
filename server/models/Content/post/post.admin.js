const AdminBro = require('admin-bro')
const { Post } = require('./post.model')

const {
  after: uploadAfterHook,
  before: uploadBeforeHook
} = require('../../actions/upload-file.hook')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Content',
  },
  properties: {
    _id: {
      isVisible: false
    },
    text: {
      type: 'richtext',
      isVisible: {
        show: true,
        edit: true,
        filter: false,
        list: false
      }
    },
    preview: {
      type: 'richtext',
      isVisible: {
        show: true,
        edit: true,
        filter: false,
        list: false
      }
    },
    uploadFile: {
      components: {
        edit: AdminBro.bundle('../../components/upload-file.edit.tsx'),
        list: AdminBro.bundle('../../components/upload-file.list.tsx'),
      },
      isVisible: {
        show: true,
        edit: true,
        filter: false,
        list: true
      }
    },
    file: {
      isVisible: false
    }
  },
  actions: {
    new: {
      after: uploadAfterHook,
      before: uploadBeforeHook,
    },
    edit: {
      after: uploadAfterHook,
      before: uploadBeforeHook,
    },
    show: {
      isVisible: false,
    },
  }
}

module.exports = {
  options,
  resource: Post
}
