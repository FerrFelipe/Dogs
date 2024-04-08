import { func } from 'prop-types';
import React from 'react';

const types = {
  email: {
    regex:
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido',
  },
  password: {
    // eslint-disable-next-line no-useless-escape
    regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
    message:
      'A senha deve conter no mínimo uma letra minúscula, uma letra maiúscula, um dígito e um caractere especial.',
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize numeros apenas"
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor!');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
