import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    transform: "translate(0, 0)",
  },
};

interface CreateProps {
  open: boolean;
  handleClose: () => void;
}

const TestimonialModal: React.FC<CreateProps> = ({ open, handleClose,  }) => {

    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <div className="flex items-start justify-center flex-col mt-12 pt-10"> 
            <div className="mt-1 flex flex-col gap-3  w-full">
              
             <p>
             I'm absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!
             </p>
            </div>
            <div className="flex gap-4  mt-10">
              <button
                onClick={handleClose}
                className="text-sm text-bluePrimary border border-green py-2 px-10 rounded-lg"
              >
                close
              </button>
              
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TestimonialModal;
