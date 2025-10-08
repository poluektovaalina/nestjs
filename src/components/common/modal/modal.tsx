"use client"

import { ReactNode } from "react"
import styles from "./modal.module.css"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/react";

interface IProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    children: ReactNode
}

const CustomModal = ({
    isOpen,
    onClose,
    title,
    children
}: IProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xs">
            <ModalContent>
                <ModalHeader className={styles.modalHeader}>
                    <h3 className={styles.title}>{title}</h3>
                </ModalHeader>
                <ModalBody className={styles.modalBody}>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal