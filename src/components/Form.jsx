import React, { useRef, useState } from 'react'
import Wrapper from '../layout/Wrapper'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/firebase'
import axios from 'axios'

function Form() {
	const [headings] = useCollection(collection(getFirestore(app), 'headings'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	})

    const telRef = useRef(null)
    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const familyRef = useRef(null)

	const fourthHeadings = headings?.docs[3]

    const [name, setName] = useState()
    const [family, setFamily] = useState()
    const [email, setEmail] = useState()
    const [tel, setTel] = useState()
    const [company, setCompany] = useState()
    const [inn, setInn] = useState()
    const [address, setAddress] = useState()
    const [info, setInfo] = useState()

    const onSend = async () => {
        if(name && family && email.includes("@") && tel.length == 11) {
            const TOKEN = '6971302911:AAGsb1ueM78OT6re3HGLdxHTkao7hixwrFE'
            const CHAT_ID = '-1002024894156'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'
    
            let msg = `<b>---------------------------</b>\n`
            msg += `<b>Имя: ${name}</b>\n`
            msg += `<b>Фамилия: ${family}</b>\n`
            msg += `<b>Email: ${email}</b>\n`
            msg += `<b>Номер телефона: ${tel}</b>\n`
            msg += `<b>Название компании: ${company}</b>\n`
            msg += `<b>ИНН: ${inn}</b>\n`
            msg += `<b>Адрес: ${address}</b>\n`
            msg += `<b>Ещё: ${info}</b>\n`
            msg += `<b>---------------------------</b>`
            
            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }, setName(''), setFamily(""), setEmail(""), setTel("", setCompany("", setInn(""), setAddress("", setInfo(""))))).then(() => {
                alert("Спасибо за заявку, вскоре мы свяжемся с Вами!")
            })
        } else {
            if (!name) {
                nameRef.current.style.border = "1px solid red"
            }
            if (!family) {
                familyRef.current.style.border = "1px solid red"
            }
            if (!tel) {
                telRef.current.style.border = "1px solid red"
            }
        }
    }

	return (
		<>
			<Wrapper>
				<div
					id='contacts'
					className='flex flex-col justify-center items-center'
				>
					<div
						className='flex flex-col items-start px-[20px] md:px-0'
						data-aos='zoom-in-up'
					>
						{fourthHeadings && (
							<h1
								className='text-[#4C67EA] text-center w-full font-semibold text-[40px] mt-[110px] mb-[20px] font-Poppins'
								data-aos='fade-right'
							>
								{fourthHeadings.data().title}
							</h1>
						)}

						<div>
							<div className='flex justify-center items-center flex-col gap-4'>
								<div className='flex flex-col md:flex-row items-center gap-4 w-full'>
									<div className='flex justify-center items-center flex-col gap-4'>
										<div className='flex flex-col md:flex-row items-center gap-4 w-full'>
											<input
                                                value={name}
                                                onChange={e => setName(e.target.value)}
												type='text'
                                                onFocus={() => nameRef.current.style.border = "0"}
												ref={nameRef}
												placeholder='*Имя'
												className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
											/>
											<input
                                                value={family}
                                                onChange={e => setFamily(e.target.value)}
												type='text'
                                                onFocus={() => familyRef.current.style.border = "0"}
												ref={familyRef}
												placeholder='*Фамилия'
												className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
											/>
										</div>
										<div className='flex items-center gap-4 flex-col md:flex-row w-full'>
											<input
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
												type='email'
                                                onFocus={() => emailRef.current.style.border = "0"}
												ref={emailRef}
												placeholder='*Email'
												className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
											/>
											<input
                                                value={tel}
                                                onChange={e => {
                                                    if (e.target.value.length != 12) {
                                                        setTel(e.target.value)
                                                    }
                                                }}
                                                onFocus={() => telRef.current.style.border = "0"}
												ref={telRef}
												type='number'
												placeholder='*Номер телефона'
												className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
											/>
										</div>
										<div className='flex items-center gap-4 flex-col md:flex-row w-full'>
											<input
                                                value={company}
                                                onChange={e => setCompany(e.target.value)}
												type='text'
												
												placeholder='Название компании'
												className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
											/>
											<input
                                                value={inn}
                                                onChange={e => setInn(e.target.value)}
												type='number'
												
												placeholder='ИНН'
												className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
											/>
										</div>

										<input
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
											type='text'
											
											placeholder='Адрес'
											className='input w-full bg-[#70869d12] rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
										/>

										<textarea
                                            value={info}
                                            onChange={e => setInfo(e.target.value)}
											name='message'
											cols='30'
											rows='10'
											placeholder='Информация'
											className='w-full bg-[#70869d12] textarea rounded-[5px] text-[#4C67EA] font-Poppins px-[30px] py-[15px] text-[17px]'
										></textarea>
									</div>
								</div>
								<button onClick={onSend} className='bg-[#4C67EA] text-white px-[55px] py-[15px] rounded-[500px] transition duration-75 ease-in hover:scale-90 mt-[10px] font-Poppins'>
									Отправить
								</button>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			<div className='flex justify-center fixed bottom-10 right-8 gap-4 items-center my-5'>
				<a href='https://t.me/glavzoo' target='_blank'>
					<img
						className='w-12'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'
						alt='telegram'
					/>
				</a>
				<a href='https://wa.me/79001202080' target='_blank'>
					<img
						className='w-12'
						src='https://static-00.iconduck.com/assets.00/whatsapp-icon-2048x2048-dumosfvo.png'
						alt='telegram'
					/>
				</a>
			</div>
		</>
	)
}

export default Form
