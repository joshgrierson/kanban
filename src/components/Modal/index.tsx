import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, PropsWithChildren, useState } from "react";

type Props = PropsWithChildren & {
  open?: boolean;
};

export const Modal: FC<Props> = ({ children, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const onCloseClick = () => setIsOpen(false);

  return (
    <div
      className={`fixed left-0 top-0 w-full h-full bg-modal-overlay-bg/30 ${isOpen ? "block" : "hidden"}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-[400px] p-modal rounded-modal bg-modal-bg">
        <div className="absolute right-2 top-2">
          <FontAwesomeIcon
            role="button"
            icon={faClose}
            onClick={onCloseClick}
            className="w-[20px] h-[20px] p-1 rounded-full bg-modal-close-btn-bg"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
