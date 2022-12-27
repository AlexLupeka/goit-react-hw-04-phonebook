import style from '@emotion/styled';

export const ContactForm = style.form`
margin: 0 0 20px 0;`;

export const ContactLabel = style.label`
 display: block;
  margin-bottom: 20px;
  color: black;
  font-weight: 500;
  font-size: 20px;`;

export const ContactInput = style.input`
display: block;
  margin-top: 10px;
  padding: 10px;
  width: 400px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 15px;
  cursor: pointer;
  font-size: 15px;
  &:focus {
  outline-color: #ff6b08;
}`;

export const ContactButton = style.button`
position: relative;
left: 50%;
transform: translate(-50%, 0);
padding: 10px 20px;
  background-color: #ff6b08;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  border-radius: 15px;
  outline: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
  background-color: rgb(144, 238, 144);
  color: black;
}`;
