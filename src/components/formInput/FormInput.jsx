import { Input, Group, FormInputLabel } from './FormInput.styles';

function FormInput({ label, name, value, type, inputChange, autoComplete }) {
  return (
    <Group className="group">
      <Input
        className="form-input"
        type={type}
        name={name}
        value={value}
        autoComplete={autoComplete}
        required
        onChange={inputChange}
      />
      {label && <FormInputLabel shrink={value.length}>{label}</FormInputLabel>}
    </Group>
  );
}

export default FormInput;
