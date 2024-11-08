import { ChangeEvent, useState } from 'react';
import Typography from '../typography/typography';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
  register: UseFormRegister<FieldValues>;
  onChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
  list: { value: string; tag: string; label: string }[];
  name: string;
}
export default function RadioGroup({ register, onChange, list, name }: Props) {
  const [selectedValue, setSelectedValue] = useState('');

  const selectedValueStyle = 'bg-red-300 text-black';

  const handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange(event, name);
  };

  return (
    <div className='flex flex-col space-y-2'>
      {list.map((item) => {
        return (
          <label
            className={`border-1 items-left flex flex-col gap-1 rounded-md border border-white px-4 py-4 ${selectedValue === item.value ? selectedValueStyle : ''}`}
            key={item.value}
          >
            <input
              type='radio'
              value={item.value}
              checked={selectedValue === item.value}
              className={`form-radio hidden focus:ring-blue-500`}
              {...register(name, { required: true })}
              onChange={handleRadio}
            />
            {/* className='whitespace-pre-line rounded-md bg-red-400 px-2 py-1 text-white' */}
            <Typography size='xs-b'>{item.tag}</Typography>
            <Typography>{item.label}</Typography>
          </label>
        );
      })}
    </div>
  );
}
