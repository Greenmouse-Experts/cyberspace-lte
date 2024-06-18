// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function LogoutModal({ open, handleOpen , onClick}) {
  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <DialogBody className=" dark:bg-darkMood w-full h-full flex flex-col items-center justify-center gap-4">
          <p>
            Are you sure you want to{" "}
            <span className="font-semibold text-bluePrimary">logout</span>
          </p>
        </DialogBody>
        <DialogFooter className=" dark:bg-darkMood w-full justify-between">
          <Button color="red" onClick={() => handleOpen(null)} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            className=" bg-bluePrimary text-white disabled:!cursor-not-allowed"
            type="button"
            onClick={onClick}
          >
            <span>Logout</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
