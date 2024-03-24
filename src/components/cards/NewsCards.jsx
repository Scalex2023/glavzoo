import { app, db } from '../../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore"; 

function NewsCards() {

    const [news] = useCollection(
        collection(getFirestore(app), 'news'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

	return (
		<div className='flex flex-col md:flex-row justify-center items-center gap-10'>

            {
                news?.docs.map(i => (
                    <div
                        className='flex justify-center relative h-[580px] items-start flex-col w-[95%] md:w-[350px] border text-center pb-10 rounded-[20px]'
                        data-aos='zoom-in'
                    >
                        <img
                            src={i.data().image}
                            alt='404'
                            className='rounded-t-[20px] min-h-[250px] h-[250px] w-full object-cover'
                        />
                        <h1 className='text-[#3a3a3a] h-[70px] ml-2 text-start font-bold text-[24px] mt-5'>
                            {i.data().title}
                        </h1>
                        <p className='text-[#919191] ml-2 text-start max-w-[100%] h-[80px] mt-[5px] px-[5px]'>
                            {i.data().desc}
                        </p>
                        <div className='w-full flex justify-center flex-col items-center'>
                            <a href='#contacts' className='mb-5 absolute bottom-4 flex justify-center mx-auto mt-5 max-w-[250px] px-[45px] rounded-3xl text-white py-[10px] bg-[#4C67EA]'>Заказать расчет</a>
                        </div>
                    </div>
                ))
            }
			
		</div>
	)
}

export default NewsCards
