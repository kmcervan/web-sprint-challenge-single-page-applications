import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('name required')
    .min(2, '2 characters required'),
    size: yup.string().oneOf(["small", "medium", "large", "xlarge"], 'role is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    pepper: yup.boolean(),
    bacon: yup.boolean(),
    special: yup.string(),
})