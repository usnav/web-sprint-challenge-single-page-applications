import * as yup from 'yup';


const formSchema = yup.object().shape({

    name: yup
        .string()
        .required('Username is Required')
        .trim()
        .min(2, "name must be at least 2 characters")
        .required(),
    special: yup.object(), 
    pineapple: yup.object(),
    cheddar: yup.object(),
    bacon: yup.object(),
    olives: yup.object(),
    ham: yup.object(),
    pepperoni: yup.object(),
    sauce: yup.object(),
    size: yup.object(),
    


})

export default formSchema;