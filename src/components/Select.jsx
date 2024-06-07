import React, { useState } from 'react';
import {
  Control,
  Controller,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';
import Select from 'react-select';

const customStyles = {
  valueLabel: (styles) => ({
    ...styles,
    text: 'white',
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '2px solid #323232' : '1px solid #888888',
    boxShadow: state.isFocused ? '0 0 0 2px #ddd' : null,
    '&:hover': {
      border: state.isFocused ? '2px solid #323232' : '1px solid #888888',
    },
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'black' : 'white',
    marginBottom: '2px',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

function CustomSelect({
  placeholder,
  name,
  value,
  options,
  onChange,
  ...props
}) {
  return (
    <Select
      value={value}
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      styles={customStyles}
      defaultValue={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      isSearchable
      isLoading={false}
      {...props}
    />
  );
}

export default function SingleSelect({
  label,
  options,
  hidden,
  customClass,
  defaultValue,
  placeholder = 'Select...',
  register,
  noRegister,
  ...props
}) {
  let onChange;
  let name;
  let control = [];
  let rules;

  noRegister && ({ onChange } = noRegister);
  register && ({ control, name, rules } = register);

  return register ? (
    <div className={`flex flex-col ${customClass} ${hidden ? ' hidden' : ''}`}>
      <h1 className=" font-nunito font-normal text-black mb-1">{label}</h1>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <CustomSelect
            placeholder={placeholder}
            options={options}
            value={value}
            onChange={onChange}
            {...props}
          />
        )}
      />
    </div>
  ) : (
    <div className={`flex flex-col ${customClass} ${hidden ? ' hidden' : ''}`}>
      <h1 className="font-nunito font-normal text-black mb-1">{label}</h1>
      <CustomSelect
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        options={options}
        {...props}
      />
    </div>
  );
}
