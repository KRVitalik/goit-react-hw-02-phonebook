import { Label } from "components/ContactForm/ContactForm.styled";
import React from "react";

const Filter = ({handleInputChange}) => {
    return ( 
        <Label>Find contact by name
            <input
  onChange={handleInputChange}
  type="text"
  name="filter"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
        </Label>
     );
}
 
export default Filter