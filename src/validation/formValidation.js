import * as Yup from 'yup'

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.number().required('Required'),
  address: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  code: Yup.string().required('Required'),
  marketingOfficer: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  products: Yup.array().of(
    Yup.object().shape({
      color: Yup.string().required('Required'),
      quantity: Yup.string().required('Required'),
      tileSize: Yup.string().required('Required'),
      rate: Yup.number().required('Required'),
    })
  ),
})

export default FORM_VALIDATION
