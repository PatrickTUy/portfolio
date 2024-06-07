import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/modal/Modal';
import TextArea from '../../components/TextArea';


const EditAbout = ({ show, setShow }) => {
 
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
              Edit About Page
            </h1>
            <TextArea
              labelText={'First paragraph'}
              labelFor={'fparagraph'}
              name={'fparagraph'}
              type={'text'}
              isRequired={true}
              placeholder={'enter first paragraph content...'}
              customClass="w-full mb-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />

            <TextArea
              labelText={'Last Paragraph'}
              labelFor={'lparagraph'}
              name={'lparagraph'}
              type={'text'}
              isRequired={true}
              placeholder={'enter last paragraph content...'}
              customClass="w-full mb-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />

            <div className="flex flex-col my-4">
              <label >
                Upload picture
              </label>
              <input  type="file" accept=".jpg, .jpeg, .png" />
            </div>

            <div className="flex justify-between">
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

export default EditAbout;
