import { useState } from "react"
import PropTyper from "prop-types";


const ContactForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        name: "",
        number: "",
    });

    const handelChange = ({ target }) => {
        const { name, value } = target;
        setState(prevState => {
            return { ...prevState, [name]: value }
        })
    }



    const handelSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        setState({ name: "", number: "", })
    }

    const { name, number } = state;

    return (
        <form onSubmit={handelSubmit}>
            <div>
                <input
                    onChange={handelChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </div>
            <h4>Number</h4>
            <div>
                <input
                    onChange={handelChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>
            <button type='submit'>Add Contact</button>
        </form>
    )
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTyper.func.isRequired,
}
