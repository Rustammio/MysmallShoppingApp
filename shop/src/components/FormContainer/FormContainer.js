import style from './FormContainer.module.scss'
import {useFormik} from "formik";
import {valSchema} from "../../schemas/schema";
import {useDispatch} from "react-redux";
import {resetCart} from "../../store/cart/actons";
import {fetchCards} from "../../store/cards/actions";



const FormContainer = ({current}) => {
    const dispatch = useDispatch();

    const onSubmit = (values, actions) => {
        console.group();
        console.log('Name -' ,values.name, values.lastName);
        console.log("Age -",values.age);
        console.log('Address -', values.address);
        console.log('Phone -', values.phone);
        current.forEach(e=>{
            console.group();
            console.log(`Product winery :`,e.winery);
            console.log(`Product wine :`,  e.wine);
            console.groupEnd()
        });
        console.groupEnd();
        actions.resetForm();
        dispatch(resetCart());
        dispatch(fetchCards())
    };
    const formik = useFormik({
        initialValues: {
            name: '', lastName: '', age: '', address: '', phone: ''
        }, onSubmit,
        validationSchema: valSchema
    });


    return (<div className={style.formContainer}>
        <h2>Place an order</h2>
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <label  className={style.label}>Name</label>
            <input className={formik.errors.name && formik.touched.name ? style.inputErr: style.input} value={formik.values.name} type="text" placeholder='Enter your name' name='name' onChange={formik.handleChange}
                   onBlur={formik.handleBlur}/>
            {formik.errors.name&& formik.touched.name ? <p className={style.error}> {formik.errors.name}</p>: <br/> }
            <label>Lastname</label>
            <input className={formik.errors.lastName && formik.touched.lastName ? style.inputErr: style.input}  value={formik.values.lastName} type="text" placeholder='Enter your Last Name' name='lastName' onChange={formik.handleChange}
                   onBlur={formik.handleBlur}/>
            {formik.errors.lastName&& formik.touched.lastName ? <p className={style.error}> {formik.errors.lastName}</p>: <br/>}
            <label>Age</label>
            <input className={formik.errors.age && formik.touched.age ? style.inputErr: style.input} value={formik.values.age} type="text" placeholder='Enter your age' name='age' onChange={formik.handleChange}
                   onBlur={formik.handleBlur}/>
            {formik.errors.age && formik.touched.age  ? <p className={style.error}> {formik.errors.age }</p>: <br/>}
            <label>Address</label>
            <input className={formik.errors.address && formik.touched.address ? style.inputErr: style.input}  value={formik.values.address} type="text" placeholder='Enter your address' name='address' onChange={formik.handleChange}
                   onBlur={formik.handleBlur}/>
            {formik.errors.address&& formik.touched.address ? <p className={style.error}> {formik.errors.address}</p>: <br/>}
            <label>Phone</label>
            <input className={formik.errors.phone && formik.touched.phone ? style.inputErr: style.input} value={formik.values.phone} type="text" placeholder='Enter your phone' name='phone' onChange={formik.handleChange}
                   onBlur={formik.handleBlur}/>
            {formik.errors.phone&& formik.touched.phone ? <p className={style.error}> {formik.errors.phone}</p>: <br/>}
            <button className={style.sub} type='submit'>Checkout</button>
        </form>
    </div>)
};
export default FormContainer