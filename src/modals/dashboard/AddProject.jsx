import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/modal/Modal';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';
import Select from '../../components/Select';


const exploreOptions = [
  { value: 1, label: 'Github' },
  { value: 2, label: 'Figma' },
  { value: 3, label: 'Option 3' },
];



const AddProject = ({ show, setShow }) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();
  return (
    <div className="bg-white">
      <Modal
        isOpen={show}
        onClose={() => setShow()}
        Style={'min w-1/3 h-fit flex m-auto'}
      >
        <Modal.Body>
          <div className="flex flex-col p-4 ">
            <h1 className=" text-2xl text-center text-black font-bold mb-4 mr-8">
              Add Project
            </h1>
            <Input
              labelText={'Name'}
              labelFor={'name'}
              name={'name'}
              type={'text'}
              isRequired={true}
              placeholder={'enter project name'}
              customClass="w-full mb-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />

            <TextArea
              labelText={'Description'}
              labelFor={'description'}
              name={'description'}
              type={'text'}
              isRequired={true}
              placeholder={'enter project description'}
              customClass="w-full mb-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />

            <Input
              labelText={'Technologies'}
              labelFor={'technologies'}
              name={'technologies'}
              type={'text'}
              isRequired={true}
              placeholder={'comma separated'}
              customClass="w-full mb-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />

            <Select
              label="Explore options"
              className="w-full "
              isLoading={false}
              placeholder={'Select option'}
              defaultValue={exploreOptions}
              onChange={(e) => {
              }}
              options={exploreOptions}
            />
            <Input
              labelText={'Explore link '}
              labelFor={'link'}
              name={'link'}
              type={'text'}
              isRequired={true}
              placeholder={'enter explore link ...'}
              customClass="w-full my-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />


            <div className="flex justify-between mt-6">
              <button
                type="submit"
                onClick={() => {
                  setShow();
                }}
                className="border border-black text-black font-bold h-[40px] mt-2 ml-0 rounded-lg px-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                onClick={() => {
                  setShow();
                }}
                className="bg-black text-white font-bold h-[40px] mt-2 ml-0 rounded-lg px-4"
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddProject;
