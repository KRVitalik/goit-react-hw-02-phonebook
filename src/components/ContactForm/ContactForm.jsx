import React from "react";
import { Button, FormContainer, Label } from "./ContactForm.styled";

const ContactForm = ({handleInputChange, handleSubmit}) => {
    return ( 
              <div>
              <FormContainer onSubmit={handleSubmit}>
        <Label>Name
            <input
  type="text"
  placeholder="Name"
              name="name"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleInputChange}
          />
          </Label>
          <Label>Number
            <input
  type="tel"
  name="number"
  placeholder="123-45-67"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleInputChange}
/>
          </Label>
        <Button type="submit">Add contact</Button>
        </FormContainer>
</div>
     );
}
 

export default ContactForm;