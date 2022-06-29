import React, {FC, useState, useContext} from "react";

export const ModalContext = React.createContext<any>({
    index:  -1,
    operation: ''
});

 const ModalProvider: FC = ({children}) => {
    const [modal, setModal] = useState();

    return <ModalContext.Provider value={{modal, setModal}}> {children} </ModalContext.Provider>
}


 const useModalContext = () => {
    const modalData = useContext(ModalContext);

    const {modal, setModal} = modalData;

    const openAddModal = (index: number) => setModal({index, operation: 'add'});
    const openEditModal = (index: number) => setModal({index, operation: 'edit'});
    const openDeleteModal = (index: number) => setModal({index, operation: 'delete'});
    const closeModal = () => setModal(undefined);

    return {
        ...modal,
        closeModal,
        openAddModal,
        openDeleteModal,
        openEditModal
    }
}
export {ModalProvider, useModalContext}