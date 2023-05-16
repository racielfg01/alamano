'use client';
import axios from 'axios';
import { AiFillGithub,AiFillFacebook } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

import useRegiterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';

import ToasterProvider from '@/app/providers/ToasterProvider';

const RegisterModal = () => {
    const registerModal = useRegiterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
     

        axios.post('/api/register', data)
            .then(() => { 
                toast.success('Registered !');
                loginModal.onOpen();
                registerModal.onClose(); 
            })
            .catch(error => { toast.error('Algo ha salido mal') })
            .finally(() => {
                setIsLoading(false);
            })
            
    }

 

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome to Airbnb'
                subtitle='Create an account!'
                center
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Password"
                type='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                type="button"
                outline
                label='Continue with Facebook'
                icon={AiFillFacebook}
                iconColor='blue'
                onClick={() => signIn('github')}
            />
       
       <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div className='text-neutral-800 cursor-pointer hover:underline'
                        onClick={()=>{registerModal.onClose(); loginModal.onOpen()}}
                    >
                     Login
                    </div>

                </div>
            </div>


        </div>

    )

    return (
    
            <Modal
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                title="Register"
                actionLabel='Continue'
                onClose={registerModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />
    
    )
}

export default RegisterModal