const AdminBro = require('admin-bro')
const { Member } = require('./member.model')

const {
  after: uploadAfterHook,
  before: uploadBeforeHook
} = require('../../actions/upload-file.hook')

/**@type {AdminBro.ResourceOptions} */
const options = {
  parent: {
    name: 'Member',
  },
  properties: {
    _id: {
      isVisible: false
    },
    birthday: {
      components: {
        edit: AdminBro.bundle('../../components/datepicker.edit.jsx')
      },
      isVisible: {
        show: false,
        edit: true,
        filter: false,
        list: true
      },
      custom: {
        text: 'Для создания участника без даты рождения оставить пустую строку'
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
      },
      custom: {
        title: 'Фото участника',
        text: 'Поддерживаемые форматы: PNG, JPG/JPEG. Максимальный размер файла - 10mb',
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
  resource: Member
}
