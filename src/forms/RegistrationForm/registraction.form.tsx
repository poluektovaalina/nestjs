import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import styles from "./registraction.form.module.css"

interface IProps {
    onClose: () => void
}

const RegistractionForm = ({ onClose }: IProps) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Форма отправлена:", formData)
    }

    return (
        <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
            <Input
                isRequired
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Введите свою почту"
                type="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                validate={value => {
                    if (!value) return "Почта обязательна"
                    if (!validateEmail(value)) return "Ввежите корректную почту"
                    return null
                }}
            />
            <Button type="submit" variant="bordered">
                Submit
            </Button>
            <div className="text-small text-default-500">
                You submitted: <code></code>
            </div>
            <Input
                isRequired
                name="password"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({
                    ...formData, password: e.target.value
                })}
                validate={value => {
                    if (!value) return "Пароль обязателен"
                    if (value.length < 8) return "Пароль должен содержать не менее 8 символов"
                }}
            />
            <Input
                isRequired
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({
                    ...formData, confirmPassword: e.target.value
                })}
                validate={value => {
                    if (!value) return "Пароль для подтверждения обязателен"
                    if (value !== formData.password) return "упс попробуй еще раз, не совпадает"
                }}
            />
            <div className={styles.groupBtn}>
                <Button onPress={onClose}>
                    Отмена
                </Button>
                <Button color="primary"  type="submit">
                    Зарегистрироваться
                </Button>
            </div>

        </Form>
    );
}

export default RegistractionForm