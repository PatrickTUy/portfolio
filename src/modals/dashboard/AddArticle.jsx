import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/modal/Modal';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';
import { AiFillMinusCircle } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';

const AddArticle = ({ show, setShow }) => {
  const [paragraphs, setParagraphs] = useState([{ paragraph: '' }]);

  const addParagraph = () => {
    setParagraphs((prevParagraphs) => [...prevParagraphs, { paragraph: '' }]);
  };

  const removeParagraph = (index) => {
    setParagraphs((prevParagraphs) => {
      prevParagraphs.splice(index, 1);
      return [...prevParagraphs];
    });
  };
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
        Style={'w-1/2  h-[80%] flex m-auto '}
      >
        <Modal.Body>
          <div className="flex flex-col p-4">
            <h1 className=" text-2xl text-center text-black font-bold mb-4 mr-8">
              Add Article
            </h1>
            <Input
              labelText={'Title'}
              labelFor={'title'}
              name={'title'}
              type={'text'}
              isRequired={true}
              placeholder={'enter title'}
              customClass="w-full mb-2"
              handleChange={(e) => {
                console.log('ha', e.target.value);
              }}
              register={register}
              errors={errors}
            />
            <div className="flex flex-col my-4">
              <label>Upload picture</label>
              <input type="file" accept=".jpg, .jpeg, .png" />
            </div>
            {paragraphs.map((paragraph, index) => {
              return (
                <div className="flex relative">
                  <TextArea
                    labelText={'Paragraph'}
                    labelFor={'paragraph'}
                    name={'paragraph'}
                    type={'text'}
                    isRequired={true}
                    placeholder={'enter paragraph'}
                    customClass="w-full mb-2"
                    handleChange={(e) => {
                      console.log('ha', e.target.value);
                    }}
                    register={register}
                    errors={errors}
                  />

                  <AiFillMinusCircle
                    color="#BDBDBD"
                    size={25}
                    className={`cursor-pointer ${
                      index === 0 ? 'hidden' : 'visible'
                    }`}
                    onClick={() => removeParagraph(index)}
                  />
                  <button
                    className={`absolute left-[0] bottom-[-30px] bg-black p-2 rounded-lg w-fit h-fit ${
                      paragraphs.length - 1 === index ? 'visible' : 'hidden'
                    }`}
                    onClick={() => addParagraph()}
                  >
                    <div className="flex flex-row items-center text-black ">
                      <HiPlus className="m-auto" color="white" />
                    </div>
                  </button>
                </div>
              );
            })}
            <div className="flex justify-between mt-12">
              <button
                type="submit"
                onClick={() => {
                  setShow();
                }}
                className="bg-black text-white h-[40px] mt-2 ml-0 rounded-lg px-4"
              >
                Cancel
              </button>

              <button
                type="submit"
                onClick={() => {
                  setShow();
                }}
                className="bg-black text-white h-[40px] mt-2 ml-0 rounded-lg px-4"
              >
                Yes
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddArticle;
