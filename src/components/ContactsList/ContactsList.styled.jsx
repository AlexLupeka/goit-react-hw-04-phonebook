import style from '@emotion/styled';

export const ContactList = style.ul`
padding: 0;
  color: black;
  font-weight: 500;
  font-size: 18px;`;

export const ContactItem = style.li`
  width: 420px;
  display: flex;
  justify-content: space-between;
  `;
export const ContactName = style.p`
font-size: 20px;`;

export const ContactNumber = style.span`
font-size: 20px;
  font-weight: 800;`;
export const ContactButton = style.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  display: inline-block;
  margin: auto 0 auto 0;
  background-color: #ff6b08;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  color: white;
  outline: none;
  transition: all 250ms ease-in-ou;
  &:hover {
  background-color: #FF0000;
}`;
