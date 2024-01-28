import { z } from "zod";
import { formSchema } from "./components/ModalAdd";
import { IModal } from "@/shared/types";

export type FormFields = z.infer<typeof formSchema>;

export interface IModalAddProps {
  modal: IModal;
  setModal: React.Dispatch<React.SetStateAction<IModal>>;
}

