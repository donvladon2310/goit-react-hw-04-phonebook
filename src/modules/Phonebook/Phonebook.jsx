import { useState } from "react";
import { nanoid } from 'nanoid';
import styles from './phonebook.modules.css';
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";

const Phonebook = () => {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState("");

    const isDublicate = (name) => {
        const normName = name.toLowerCase();
        const duble = contacts.find(({ name }) => {
            return (name.toLowerCase() === normName)
        })
        return Boolean(duble)
    }

    const addContact = ({ name, number }) => {
        setContacts(prevContacts => {
            if (isDublicate(name)) {
                return alert(`${name} is alredy in contacts`)
            }
            const newContact = {
                id: nanoid(),
                name,
                number,
            }
            return [newContact, ...prevContacts]
        })
    }

    const removeContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
    }

    const handelFilter = ({ target }) => setFilter(target.value);

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts
        }
        const normFilter = filter.toLowerCase()
        const result = contacts.filter(({ name, number }) => {
            return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
        })
        return result;
    }

    const filteredContacts = getFilteredContacts();

    return (
        <div>
            <h3>Phonebook</h3>
            <div>
                <div className={styles.wrapper}>
                    <h4>Name</h4>
                    <ContactForm onSubmit={addContact} />
                </div>
                <div>
                    <h4>Contacts</h4>
                    <Filter handelChange={handelFilter} />
                    <ContactList removeContact={removeContact} contacts={filteredContacts} />
                </div>
            </div>
        </div>
    )

}

export default Phonebook;



