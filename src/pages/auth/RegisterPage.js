import { Container, Heading, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterButtonGroup from "../../components/formItems/buttonGroup/RegisterButtonGroup";
import CommonField from "../../components/formItems/field";
import AuthLayout from "../../components/layouts/auth";
import { hitApi } from "../../helpers/hitApi";
import { validateConfirmPassword, validateEmail, validateName, validatePassword } from "../../helpers/utils";
import { REGISTER_URL } from "../../variables/urls";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    function register(params) {
        setIsLoading(true)
        hitApi.post(REGISTER_URL,{
            email: params.email,
            name: params.name,
            password: params.password
        })
            .then((result)=>{
                toast({
                    title: "Success",
                    description: `${result.data}, We will redirect you to login page.`,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "success"
                })
                setIsLoading(false);
                setTimeout(()=>{
                    navigate('/login')
                },5000)
            }).catch((error)=>{
                toast({
                    title: "Error",
                    description: error.response.data,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "error"
                })
                setIsLoading(false);
            })
    }
    return (
        <AuthLayout>
            <Container>
                <Heading>
                    Register
                </Heading>
                <Formik
                    initialValues={{ email: '', password: '', name: '', confirmPassword: '' }}
                    onSubmit={(values, actions) => {
                        register(values)
                    }}>
                    {(props) => (
                        <Form>
                            <CommonField
                                label={"Name"}
                                placeholder={"Please input your Name here"}
                                fieldName={"name"}
                                type={"text"}
                                validation={validateName}
                            />
                            <CommonField
                                label={"E-mail"}
                                placeholder={"Please input your E-mail here"}
                                fieldName={"email"}
                                type={"text"}
                                validation={validateEmail}
                            />
                            <CommonField
                                label={"Password"}
                                placeholder={"Please input your Password here"}
                                fieldName={"password"}
                                type={"password"}
                                validation={validatePassword}
                            />
                            <CommonField
                                label={"Confirm password"}
                                placeholder={"Please input your Password again here"}
                                fieldName={"confirmPassword"}
                                type={"password"}
                                validation={(value) => validateConfirmPassword(props.values.password, value)}
                            />
                            <RegisterButtonGroup onCancel={() => navigate("/login")} isLoading={isLoading} />
                        </Form>
                    )}
                </Formik>
            </Container>
        </AuthLayout>
    )
}

export default memo(RegisterPage);