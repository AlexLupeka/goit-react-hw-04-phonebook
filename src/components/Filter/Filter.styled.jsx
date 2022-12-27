import style from '@emotion/styled';

export const FilterLabel = style.ul`
display: block;
padding: 0;
margin: 5px 0 30px 0px;
  color: black;
  font-weight: 600;
  font-size: 25px;
  text-align: center;`;
export const FilterInput = style.input`
display: block;
  margin: 5px 0 30px 0px;
  padding: 10px;
  width: 400px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 15px;
  cursor: pointer;
  font-size: 15px;
  &:focus {
  outline-color: orange;
}`;
