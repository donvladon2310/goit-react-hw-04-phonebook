/* eslint-disable react/no-typos */
import PropTypes from 'prop-types'


const ContactList = ({ removeContact, contacts }) => {
    const contact = contacts.map(({ id, name, number }) => <li key={id}>{name}: {number}
        <button onClick={() => removeContact(id)} type="button">delete</button></li>)

    return (
        <ul>
            {contact}
        </ul>
    )
}


export default ContactList;


ContactList.defaultProps = {
    contacts: []
}

ContactList.PropTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequireds,
        name: PropTypes.string.isRequireds,
        number: PropTypes.string.isRequireds,
    }))
}

