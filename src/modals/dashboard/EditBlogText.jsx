import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/modal/Modal';
import TextArea from '../../components/TextArea';

const EditBlogText = ({ show, setShow }) => {
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
        Style={'w-1/3 h-fit flex m-auto'}
      >
        <Modal.Body>
          <div className="flex flex-col ">
            <h1 className=" text-2xl text-center text-black font-bold mb-4 mr-8">
              Edit Blog
            </h1>
            <TextArea
              labelText={'Blog text'}
              labelFor={'blogText'}
              name={'blogText'}
              type={'text'}
              isRequired={true}
              placeholder={'enter blog text'}
              customClass="w-full mb-2"
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
                className="bg-black text-white h-[40px] mt-2 ml-0 rounded-lg px-4 font-bold"
              >
                Cancel
              </button>

              <button
                type="submit"
                onClick={() => {
                  setShow();
                }}
                className="bg-black text-white h-[40px] mt-2 ml-0 rounded-lg px-4 font-bold"
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

export default EditBlogText;
