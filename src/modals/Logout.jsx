import React from 'react';
import Modal from '../components/modal/Modal';
import Button from '../components/Button';

const Logout = ({ logoutModal, setLogoutModal }) => {
 

  return (
    <div className="font-nunito bg-secondary">
      <Modal
        isOpen={logoutModal}
        onClose={() => setLogoutModal()}
        Style={'w-fit m-4 flex m-auto'}
      >
        <Modal.Body>
          <div className="flex flex-col ">
            <h1 className="font-nunito text-2xl text-start text-black font-bold mb-4 mr-8">
              Logout from konvey?
            </h1>
            <div className="flex justify-between">
              <Button
                type="submit"
                content="Cancel"
                loading={false}
                btnColor="primary"
                onClick={() => {
                  setLogoutModal()
                }}
                Style={"text-white h-[40px] mt-2 ml-0"}
              />

              <Button
                type="submit"
                content="Yes"
                loading={false}
                btnColor="secondary"
                onClick={() => {
                  setLogoutModal()
                }}
                Style={"text-fontcolor h-[40px] mt-2 ml-0 border"}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Logout;
