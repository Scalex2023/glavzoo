import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { db, app } from '../firebase/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import {
	getFirestore,
	collection,
	doc,
	setDoc,
	deleteDoc,
} from 'firebase/firestore'

const Adminpanel = () => {
	const [tab, setTab] = useState(1)
	const [isLogged, setLogged] = useState(false)
	const [postOrPut, setPostOrPut] = useState(Date.now())

	const [categories] = useCollection(collection(getFirestore(app), 'news'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	})

	const [animals] = useCollection(collection(getFirestore(app), 'products'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	})

	const [headings] = useCollection(collection(getFirestore(app), 'headings'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	})

	useEffect(() => {
		setPostOrPut(Date.now())
	}, [])

	const deleteAnimal = async id => {
		try {
			console.log('Deleting animal with ID:', id)
			await deleteDoc(doc(db, 'products', id)) // Change 'news' to 'products'
			console.log('Animal deleted successfully')
		} catch (error) {
			console.error('Error deleting animal:', error)
		}
	}

	const [animalInp, setAnimalInp] = useState({})

	const addAnimal = async () => {
		if (animalInp.title && animalInp.desc && animalInp.image) {
			const itemRef = doc(db, 'news', postOrPut.toString())
			await setDoc(itemRef, animalInp)
			setAnimalInp({
				name: '',
				desc: '',
				image: '',
			})

			document.getElementById('animalModal').close()

			setPostOrPut(new Date().getTime())
		}
	}

	const deleteCategory = async id => {
		try {
			console.log('Deleting category with ID:', id)
			await deleteDoc(doc(db, 'news', id))
			console.log('Category deleted successfully')
		} catch (error) {
			console.error('Error deleting category:', error)
		}
	}

	const [categoryInp, setCategoryInp] = useState({})

	const addCategory = async () => {
		if (categoryInp.name && categoryInp.desc && categoryInp.image) {
			const categoryRef = doc(db, 'products', postOrPut.toString())
			await setDoc(categoryRef, categoryInp)
			setCategoryInp({
				name: '',
				desc: '',
				image: '',
			})

			document.getElementById('categoryModal').close()

			setPostOrPut(Date.now())
		}
	}

	const deleteHeading = async id => {
		try {
			console.log('Deleting heading with ID:', id)
			await deleteDoc(doc(db, 'headings', id))
			console.log('Heading deleted successfully')
		} catch (error) {
			console.error('Error deleting heading:', error)
		}
	}

	const [headingInp, setHeadingInp] = useState({})

	const addHeading = async () => {
		if (headingInp.title && headingInp.desc) {
			const headingRef = doc(db, 'headings', postOrPut.toString())
			await setDoc(headingRef, headingInp)
			setHeadingInp({
				title: '',
				desc: '',
			})
			document.getElementById('headingModal').close()
			setPostOrPut(Date.now())
		}
	}

	return (
		<>
			{isLogged ? (
				<div className='flex justify-start flex-col md:flex-row items-start'>
					<div className='w-full md:w-[360px] bg-[#FFFFFF] md:h-screen flex flex-col items-center md:pb-0 pb-[20px] pt-5 shadow-admin'>
						<Link to={'/'}>
							<img src={logo} alt='logo' className='w-10' />
						</Link>
						<div className='mt-[35px] flex flex-col items-start gap-3 w-full px-6'>
							<p
								onClick={() => setTab(1)}
								className={`${
									tab == 1
										? 'bg-[#458FF6] text-[#fff] font-medium '
										: 'bg-[#ececec50] text-[#7a7c80] '
								} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}
							>
								Продукты
							</p>
							<p
								onClick={() => setTab(2)}
								className={`${
									tab == 2
										? 'bg-[#458FF6] text-[#fff] font-medium '
										: 'bg-[#ececec50] text-[#7a7c80] '
								} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}
							>
								Новости
							</p>
							<p
								onClick={() => setTab(3)}
								className={`${
									tab == 3
										? 'bg-[#458FF6] text-[#fff] font-medium '
										: 'bg-[#ececec50] text-[#7a7c80] '
								} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}
							>
								Заголовки
							</p>
						</div>
					</div>
					<div className='p-5 bg-[#FAFBFF] w-full md:w-11/12'>
						{tab == 1 && (
							<div className='overflow-x-auto h-screen'>
								<div className='flex justify-between items-center my-3'>
									<h1 className='text-2xl font-[800] text-[#5c5c5c]'>
										Продукты
									</h1>
									<button
										onClick={() =>
											document.getElementById('categoryModal').showModal()
										}
										className='btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]'
									>
										Добавить продукт
									</button>
								</div>
								<table className='shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto'>
									<thead className='2xl:table hidden w-full'>
										<tr className='flex justify-between py-2.5'>
											<th className='w-[50px] text-center'>№</th>
											<th className='w-full md:w-4/12'>Название</th>
											<th className='w-full md:w-4/12'>Описание</th>
											<th className='w-full md:w-3/12'>Картинка</th>
											<th className='w-1/12'>Изменить</th>
											<th className='w-1/12 text-center'>Удалить</th>
										</tr>
									</thead>
									<tbody className='w-full rounded-[30px]'>
										{animals?.docs.map((item, index) => (
											<tr
												className='flex justify-between py-[10px] bg-[#FFFFFF] hover:bg-[#f1f1f16c]'
												key={item.id}
											>
												<th className='w-[50px] text-center'>{index + 1}</th>
												<td className='w-full md:w-4/12'>
													{item.data().name}
												</td>
												<td className='w-full md:w-4/12'>{item.data().desc}</td>
												<td className='w-full md:w-3/12'>
													{item.data().image.toString().slice(0, 36)}...
												</td>
												<td
													onClick={() => {
														document.getElementById('animalModal').showModal()
														setPostOrPut(item.id)
														setAnimalInp({
															title: item.data().title,
															desc: item.data().desc,
															image: item.data().image,
														})
													}}
													className='w-1/12 font-semibold text-yellow-400 cursor-pointer'
												>
													изменить
												</td>
												<td
													onClick={() => deleteAnimal(item.id)}
													className='w-1/12 cursor-pointer text-red-500 text-center'
												>
													x
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
						{tab == 2 && (
							<div className='overflow-x-auto h-screen'>
								<div className='flex justify-between items-center my-3'>
									<h1 className='text-2xl font-[800] text-[#5c5c5c]'>
										Новости
									</h1>
									<button
										onClick={() =>
											document.getElementById('animalModal').showModal()
										}
										className='btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]'
									>
										Добавить новость
									</button>
								</div>
								<table className='shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto'>
									<thead className='w-full hidden 2xl:table'>
										<tr className='flex justify-between py-2.5'>
											<th className='w-[65px] text-center'>№</th>
											<th className='w-full md:w-4/12'>Название</th>
											<th className='w-full md:w-4/12'>Описание</th>
											<th className='w-full md:w-3/12'>Картинка</th>
											<th className='w-1/12'>Изменить</th>
											<th className='w-1/12'>Удалить</th>
										</tr>
									</thead>
									<tbody className='w-full rounded-[30px]'>
										{categories?.docs.map((item, index) => (
											<tr
												className='flex justify-between py-[10px] bg-[#FFFFFF] hover:bg-[#f1f1f16c]'
												key={item.id}
											>
												<th className='w-[65px] text-center'>{index + 1}</th>
												<td className='w-full md:w-4/12'>
													{item.data().title}
												</td>
												<td className='w-full md:w-4/12'>{item.data().desc}</td>
												<td className='w-full md:w-3/12'>
													{item.data().image.toString().slice(0, 36)}...
												</td>
												<td
													onClick={() => {
														document.getElementById('animalModal').showModal()
														setPostOrPut(item.id)
														setAnimalInp({
															title: item.data().title,
															desc: item.data().desc,
															image: item.data().image,
														})
													}}
													className='w-1/12 font-semibold text-yellow-400 cursor-pointer'
												>
													изменить
												</td>
												<td
													onClick={() => deleteCategory(item.id)}
													className='w-1/12 cursor-pointer text-red-500 text-center'
												>
													x
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
						{tab == 3 && (
							<div className='overflow-x-auto h-screen'>
								<div className='flex justify-between items-center my-3'>
									<h1 className='text-2xl font-[800] text-[#5c5c5c]'>
										Заголовки
									</h1>
								</div>
								<table className='shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto'>
									<thead className='w-full hidden 2xl:table'>
										<tr className='flex justify-between py-2.5'>
											<th className='w-[65px] text-center'>№</th>
											<th className='w-full md:w-4/12'>Название</th>
											<th className='w-full md:w-4/12'>Описание</th>
											<th className='w-1/12'>Изменить</th>
											<th className='w-1/12'>Удалить</th>
										</tr>
									</thead>
									<tbody className='w-full rounded-[30px]'>
										{headings?.docs.map((item, index) => (
											<tr
												className='flex justify-between py-[10px] bg-[#FFFFFF] hover:bg-[#f1f1f16c]'
												key={item.id}
											>
												<th className='w-[65px] text-center'>{index + 1}</th>
												<td className='w-full md:w-4/12'>
													{item.data().title}
												</td>
												<td className='w-full md:w-4/12'>{item.data().desc}</td>
												<td
													onClick={() => {
														document.getElementById('headingModal').showModal()
														setPostOrPut(item.id)
														setHeadingInp({
															title: item.data().title,
															desc: item.data().desc,
														})
													}}
													className='w-1/12 font-semibold text-yellow-400 cursor-pointer'
												>
													изменить
												</td>
												<td
													onClick={() => deleteHeading(item.id)}
													className='w-1/12 cursor-pointer text-red-500 text-center'
												>
													x
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				</div>
			) : (
				<>
					<div className='flex h-screen w-full justify-center items-center'>
						<input
							type='text'
							className='input input-bordered'
							placeholder='Пароль'
							onChange={e => {
								if (e.target.value == 'admin123') {
									setLogged(true)
								}
							}}
						/>
					</div>
				</>
			)}
			{/*-----------------------------------------------------------------------*/}
			{/*-------------------------Modal-For-Add-Product-------------------------*/}
			{/*-----------------------------------------------------------------------*/}
			<dialog id='categoryModal' className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Добавить продукт.</h3>
					<div className='w-full flex flex-col gap-2 mt-[15px]'>
						<input
							onChange={e =>
								setCategoryInp(prev => ({ ...prev, name: e.target.value }))
							}
							value={categoryInp.name || ''}
							type='text'
							placeholder='Имя'
							className='input input-bordered'
						/>
						<input
							onChange={e =>
								setCategoryInp(prev => ({ ...prev, desc: e.target.value }))
							}
							value={categoryInp.desc || ''}
							type='text'
							placeholder='Описание'
							className='input input-bordered'
						/>
						<input
							onChange={e =>
								setCategoryInp(prev => ({ ...prev, image: e.target.value }))
							}
							value={categoryInp.image || ''}
							type='text'
							placeholder='Картинка URL'
							className='input input-bordered'
						/>

						<button
							onClick={addCategory}
							className='mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]'
						>
							Добавить
						</button>
					</div>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
			{/*-----------------------------------------------------------------------*/}
			{/*--------------------------Modal-For-Add-News---------------------------*/}
			{/*-----------------------------------------------------------------------*/}
			<dialog id='animalModal' className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Добавить новость.</h3>
					<div className='w-full flex flex-col gap-2 mt-[15px]'>
						<input
							onChange={e =>
								setAnimalInp(prev => ({ ...prev, title: e.target.value }))
							}
							value={animalInp.title || ''}
							type='text'
							placeholder='Название'
							className='input input-bordered'
						/>
						<input
							onChange={e =>
								setAnimalInp(prev => ({ ...prev, desc: e.target.value }))
							}
							value={animalInp.desc || ''}
							type='text'
							placeholder='Описание'
							className='input input-bordered'
						/>
						<input
							onChange={e =>
								setAnimalInp(prev => ({ ...prev, image: e.target.value }))
							}
							value={animalInp.image || ''}
							type='text'
							placeholder='Картинка URL'
							className='input input-bordered'
						/>

						<button
							onClick={addAnimal}
							className='mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]'
						>
							Добавить
						</button>
					</div>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
			{/*-----------------------------------------------------------------------*/}
			{/*-----------------------Modal-For-Add-Heading--------------------------*/}
			{/*-----------------------------------------------------------------------*/}
			<dialog id='headingModal' className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Добавить Заголовоки.</h3>
					<div className='w-full flex flex-col gap-2 mt-[15px]'>
						<input
							onChange={e =>
								setHeadingInp(prev => ({ ...prev, title: e.target.value }))
							}
							value={headingInp.title || ''}
							type='text'
							placeholder='Название'
							className='input input-bordered'
						/>
						<input
							onChange={e =>
								setHeadingInp(prev => ({ ...prev, desc: e.target.value }))
							}
							value={headingInp.desc || ''}
							type='text'
							placeholder='Описание'
							className='input input-bordered'
						/>

						<button
							onClick={addHeading}
							className='mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]'
						>
							Добавить
						</button>
					</div>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}

export default Adminpanel
