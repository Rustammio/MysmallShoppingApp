import * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const  valSchema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z]+$/,"Name must contain ony letters").required('Name is Required'),
    lastName: yup.string().matches(/^[a-zA-Z]+$/,"Last name must contain ony letters").required('Last name is Required'),
    age: yup.number().required('Age is Required').positive().integer(),
    address: yup.string().matches(/^[a-zA-Z]+$/,"Address must contain ony letters").required('Address is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required')

});