import { useEffect, useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { db, app } from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, doc, setDoc, deleteDoc } from "firebase/firestore"; 

const Adminpanel = () => {

    const [tab, setTab] = useState(1)

    const [isLoged, setLoged] = useState(false)

    const [categories] = useCollection(
        collection(getFirestore(app), 'news'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [animals] = useCollection(
        collection(getFirestore(app), 'products'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const deleteAnimal = async (id) => {
        await deleteDoc(doc(db, "news", id))
    }

    const [animalInp, setAnimalsInp] = useState({})

    const addAnimal = async () => {
        if (animalInp.title && animalInp.desc && animalInp.image) {

            const animalsRef = doc(db, 'news', animalInp.title);
            setAnimalsInp({
                title: "",
                desc: "",
                image: ""
            })

            document.getElementById('animalModal').close()

            await setDoc(animalsRef, {
                title: animalInp.title,
                desc: animalInp.desc,
                image: animalInp.image
            }, { merge: true });

        }
    }

    const deleteCategory = async (id) => {
        await deleteDoc(doc(db, "products", id))
    }

    const [categoryInp, setCategoryInp] = useState({})

    const addCategory = async () => {
        if (categoryInp.name && categoryInp.image) {

            const categoryRef = doc(db, 'products', categoryInp.name);
            setCategoryInp({
                name: "",
                image: ""
            })

            document.getElementById('categoryModal').close()

            await setDoc(categoryRef, {
                name: categoryInp.name,
                image: categoryInp.image
            }, { merge: true });

        }
    }

    return (
        <>
        {
            isLoged
            ?
            <div className="flex justify-start flex-col md:flex-row items-start">
                <div className="w-full md:w-[360px] bg-[#FFFFFF] md:h-screen flex flex-col items-center md:pb-0 pb-[20px] pt-5 shadow-admin">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="w-10" />
                    </Link>
                    <div className="mt-[35px] flex flex-col items-start gap-3 w-full px-6">
                        <p onClick={() => setTab(1)} className={`${tab == 1 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}>Продукты</p>
                        <p onClick={() => setTab(2)} className={`${tab == 2 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}>Новости</p>
                    </div>
                </div>
                <div className="p-5 bg-[#FAFBFF] w-full md:w-11/12">
                    {
                        tab == 1 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]">Продукты</h1>
                                <button onClick={() => document.getElementById('categoryModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Добавить продукт</button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="2xl:table hidden w-full">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[50px] text-center">№</th>
                                        <th className="w-full md:w-8/12">Название</th>
                                        <th className="w-full md:w-3/12">Картинка</th>
                                        <th className="w-1/12 text-center">Удалить</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        animals?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex-col items-start xl:flex-row flex justify-between w-full py-[10px]">
                                                <th className="w-[50px] hidden xl:block text-center">{index + 1}</th>
                                                <td className="w-full md:w-8/12">{item.data().name}</td>
                                                <td className="w-full md:w-3/12">{item.data().image.toString().slice(0, 36)}...</td>
                                                <td onClick={() => deleteCategory(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">x</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        tab == 2 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]">Новости</h1>
                                <button onClick={() => document.getElementById('animalModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Добавить новость</button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full hidden 2xl:table">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-full md:w-4/12">Имя</th>
                                        <th className="w-full md:w-4/12">Описание</th>
                                        <th className="w-full md:w-3/12">Картинка</th>
                                        <th className="w-1/12">Удалить</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        categories?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex-col items-start 2xl:flex-row flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] hidden xl:block text-center">{index + 1}</th>
                                                <td className="w-full md:w-4/12">{item.data().title}</td>
                                                <td className="w-full md:w-4/12">{item.data().desc}</td>
                                                <td className="w-full md:w-3/12">{item.data().image.toString().slice(0, 36)}...</td>
                                                <td onClick={() => deleteAnimal(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">x</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        tab == 3 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]">Пользователи</h1>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full hidden 2xl:table">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-4/12">Email</th>
                                        <th className="w-3/12">Пароль</th>
                                        <th className="w-5/12">Континент</th>
                                        <th className="w-3/12">Страна</th>
                                        <th className="w-1/12">Удалить</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        users?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex-col items-start 2xl:flex-row flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] hidden xl:block text-center">{index + 1}</th>
                                                <td className="w-4/12">{item.data().email}</td>
                                                <td className="w-3/12">{item.data().password}</td>
                                                <td className="w-5/12">{item.data().continent}</td>
                                                <td className="w-3/12">{item.data().country}</td>
                                                <td onClick={() => deleteUser(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center">x</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
            :
            <div className="flex h-screen w-full justify-center items-center">
                <input type="text" className="input input-bordered" placeholder="Пароль" onChange={e => {
                    if (e.target.value == "admin123") {
                        setLoged(true)
                    }
                }} />
            </div>
            }

            <dialog id="categoryModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Добавить продукт.</h3>
                    <div className="w-full flex flex-col gap-2 mt-[15px]">
                        <input onChange={e => setCategoryInp(prev => ({ ...prev, name: e.target.value }))} value={categoryInp.name} type="text" placeholder="Имя" className="input input-bordered" />
                        <input onChange={e => setCategoryInp(prev => ({...prev, image: e.target.value}))} value={categoryInp.image} type="text" placeholder="Картинка URL" className="input input-bordered" />

                        <button onClick={addCategory} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Добавить</button>

                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="animalModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Добавить новость.</h3>
                    <div className="w-full flex flex-col gap-2 mt-[15px]">
                        <input onChange={e => setAnimalsInp(prev => ({ ...prev, title: e.target.value }))} value={animalInp.title} type="text" placeholder="Название" className="input input-bordered" />
                        <input onChange={e => setAnimalsInp(prev => ({...prev, desc: e.target.value}))} value={animalInp.desc} type="text" placeholder="Описание" className="input input-bordered" />
                        <input onChange={e => setAnimalsInp(prev => ({...prev, image: e.target.value}))} value={animalInp.image} type="text" placeholder="Картинка URL" className="input input-bordered" />
                        
                        <button onClick={addAnimal} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Добавить</button>

                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>     
        </>
    )
}

export default Adminpanel