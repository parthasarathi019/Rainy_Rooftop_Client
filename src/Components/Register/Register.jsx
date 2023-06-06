//eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/others/authentication.png';
import Authimg from '../../assets/others/authentication removebg.png';
import { Link, useNavigate } from 'react-router-dom';
import fb from '../../local_img/facebook.png';
import gogl from '../../local_img/google.png';
import gthb from '../../local_img/github.png';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    //npm i react-simple-captcha

    const [isScaled, setIsScaled] = useState(false);
    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")
    const { Create_User} = useContext(AuthContext)
const navigate = useNavigate()
    const handleClick = () => {
        setIsScaled(true);
        setTimeout(() => {
            setIsScaled(false);
        }, 300); // Change the duration as needed
    };


    const Handle_Submit = (event) => {
        event.preventDefault();
        set_success("")
        const Full_Form = event.target
        const name = Full_Form.name.value
        const email = Full_Form.email.value
        const password = Full_Form.password.value
     
    // const img_url = img_data.data.display_url
        // console.log(name, email, password);
        set_error_Message("")

        //VALIDATION
        if (!/(?=.*[A-Z])/.test(password)) {
            set_error_Message("Please at least set one uppercase later of your password")
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            set_error_Message("Please at least set one numerical number of your password")
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            set_error_Message("Please at least set one special case letter [?,=,*,!,@,#,$,&,] of your password")
            return;
        } else if (!/.{8}/.test(password)) {
            set_error_Message("Please Ensure the length of your password is 8.")
            return;
        }
           //image upload start-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
           const image = Full_Form.image.files[0]
           const Form_Data = new FormData()
           Form_Data.append('image', image)
           const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
           fetch(url, {
               method: 'POST',
               body: Form_Data,
           })
               .then(res => res.json())
               .then(img_data => {
                   console.log(img_data.data.display_url)
                   const img_url = img_data.data.display_url
           //image upload end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

                   Create_User(email, password)
                   .then((userCredential) => {
                       // Signed In
                       const user = userCredential.user;
                       console.log(user);
                       set_error_Message("")
                       // event.target.reset()
                       set_success("User has been created successfully")
                       updateProfile(user, {
                           displayName: name,
                           photoURL: img_url
                         })
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                       .then(() => {
                           const user_secret_info = {name , email , password}
                            fetch("http://localhost:11000/user_data",
                            {
                                method: "POST",//-----------------------------------
                                headers: { //---------------------------------------
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(user_secret_info),
                            }
                        )
                            .then(res => res.json())
                            .then(user_secret_info => {
                                console.log(user_secret_info);
                                if (user_secret_info.insertedId) {
                                    Swal.fire({
                                        title: 'success',
                                        text: 'User has been created successfully!',
                                        icon: 'success',
                                        confirmButtonText: '🥰K',
                                      })
                                      navigate('/')
                                }
                            })
                        })
       
                    })
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾) || 𝐀𝐝𝐦𝐢𝐧 𝐏𝐚𝐧𝐧𝐞𝐥 & 𝐔𝐬𝐞𝐫 𝐑𝐞𝐥𝐚𝐭𝐞𝐝 𝐀𝐏𝐈.. (𝑵𝑬𝑾)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
                          
                   
                   .catch((error) => {
                       //eslint-disable-next-line
                       const errorCode = error.code;
                       const errorMessage = error.message;
                       set_error_Message(errorMessage)
                       // ..
                   });
               })
               .catch(err => console.log(err.message))
           //Friebase code end-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


        Full_Form.reset();
    }


    return (
        <div
            className=" bg-cover w-full   bg-no-repeat bg-center " style={{ backgroundImage: `url(${img})` }}
        >

            <div className='py-9'>
                <section className='flex flex-col md:flex-row justify-between items-center  border-0 border-t-2 border-slate-200  w-[70%] mx-auto md:pl-8 shadow-2xl'>
                    <div className='md:w-[35%] w-[80%] bg-transparent'>
                        <form action='' onSubmit={Handle_Submit} className=''>
                            <p className='text-center text-[#403f3f] font-[1000] text-[.911em]  md:text-[2em]'>Sign Up</p>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Name </p>
                                <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Type here' className=" rounded-md bg-[#fff] border border-[#D0D0D0] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Profile </p>
                                <p className='pt-1 md:pt-2'><input name='image' id="image" type='file' accept='image/*' className=" rounded-md bg-[#fff] border border-[#D0D0D0] w-full py-2 md:py-[12px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Email </p>
                                <p className='pt-1 md:pt-2'><input name='email' id="email" type='email' required="required" defaultValue={"@gmail.com"} className=" rounded-md bg-[#fff] border border-[#D0D0D0] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>
                            <div className=' mx-auto pt-3'>
                                <p className='md:text-[.94em] text-[.85em] font-semibold'>Password</p>
                                <p className='pt-1 md:pt-2'><input name='password' id="password" type='text' placeholder='Enter your Password' className=" rounded-md bg-[#fff] border border-[#D0D0D0] w-full py-2 md:py-[14px] pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                            </div>


                            <div className=' mx-auto pt-3 md:pb-2 pb-1'>
                                <p onClick={handleClick} className='pt-1 md:pt-2'><input type="submit" value="Sign In" className={`${isScaled ? 'scale-105' : ''} bg-[#D1A054]  duration-300  rounded-md cursor-grab w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em] `} /></p>
                                <Link to="/login"><div className='text-center '> <button className='text-[#D1A054]  md:text-[.85em] hover:text-blue-500 pt-1 text-[.55em] link'>Already registered? <span className='font-bold'> Go to log in</span></button></div></Link>
                            </div>


                            <div>
                                <p className='text-[1.08em] font-bold text-center'>Or sign up with</p>
                                <div className='flex my-3 w-[44%] md:w-[32%] mx-auto justify-between '>
                                    <img className='w-[20px] md:w-[28px]' src={fb} alt="" />
                                    <img className='w-[20px] md:w-[28px]' src={gogl} alt="" />
                                    <img className='w-[20px] md:w-[28px]' src={gthb} alt="" />
                                </div>
                            </div>
                            <p className='text-center font-bold text-[1.5em] text-red-500'>{error_Message}</p>
                            <p className='text-center font-bold text-[1.5em] text-green-400'>{success}</p>
                        </form>
                    </div>
                    <img className='w-[36%]' src={Authimg} alt="" />
                </section>
            </div>
        </div>
    );
};

export default Register;