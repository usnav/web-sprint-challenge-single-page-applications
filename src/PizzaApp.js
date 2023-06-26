

import Pizza from './Pizza';
import PizzaForm from './PizzaForm';





const initialPizzas = [];
const initialDisabled = true;

export default function PizzaApp() {

    const navigate = useNavigate()
    const onPizzaClick = ()=> {
        navigate('/pizza')
    }

    const [friends, setFriends] = useState(initialPizzas);
    
    

   

    const postNewFriend = newFriend => {
    axios.post("https://reqres.in/api/orders", newFriend)
        .then(res => {
            setFriends([...friends, res.data]);
            setFormValues(initialFormValues);
        })
        .catch(err => {
            console.log(err)
            // debugger
        })
       
    }







const checkboxChange = (name, isChecked) => {
    setFormValues({
        ...formValues, 
        toppings: {
            ...formValues.toppings, 
            [name]: isChecked
        }
    });
};

const formSubmit = () => {
    const newFriend = {
        name: formValues.name.trim(), 
        size: formValues.size.trim(), 
        sauce: formValues.sauce.trim(), 
        toppings: Object.keys(formValues.toppings).filter(
            hob => formValues.toppings[hob]
        ), 
        special: formValues.special.trim()
    };
    postNewFriend(newFriend);
};

useEffect(() => {
    getFriends()
}, [])



return (
    <div className="App">
        <div className="container">
            <header>
                <h1> Pizza !!</h1>
            </header>

            <PizzaForm
                values = {formValues}
                change = {handleChange} 
                checkboxChange = {checkboxChange}
                submit = {handleSubmit}
                disabled = {disabled}
                errors = {formErrors}
                
                />

                 {friends.map(friend => {
                    return (
                    <Pizza key={friend.id} details={friend} /> )
                })} 
        </div>

    </div>
);
            
}
