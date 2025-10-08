"use client"

import CustomModal from "@/components/common/modal/modal"
import RegistractionForm from "@/forms/RegistrationForm/registraction.form"

interface IProps {
    isOpen: boolean,
    onClose: () => void
}

const RegistractionModal = ({ isOpen, onClose} : IProps) => {
    return(
        <CustomModal isOpen={isOpen} onClose={onClose} title="Регистрация">
            <RegistractionForm onClose={onClose}/>
        </CustomModal>
    )
}

export default RegistractionModal