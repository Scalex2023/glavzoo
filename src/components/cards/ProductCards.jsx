import { app, db } from '../../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore"; 

function ProductCards() {

    const [products] = useCollection(
        collection(getFirestore(app), 'products'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

	return (
		<>
        {
            products?.docs.map(i => (
                <div
                    className='card w-[95%] md:w-[31%] h-[480px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
                    data-aos='zoom-in'
			    >
                    <figure>
                        <img
                            src={i.data().image}
                            alt='product'
                            className='h-[250px] min-h-[250px] w-full object-cover'
                        />
                    </figure>
                    <div className='card-body'>
                        <h2 className='font-semibold text-center text-[18px] text-[#525252]'>
                            {i.data().name}
                        </h2>
                        <h2 className='text-center mt-2 text-[16px] text-[#525252]'>
                            {i.data().desc}
                        </h2>
                    </div>
                    <a href='#contacts' className='mb-5 flex justify-center mx-auto max-w-[250px] px-[45px] rounded-3xl text-white py-[10px] bg-[#4C67EA]'>Подробнее</a>
			    </div>
            ))
        }
		</>
	)
}

export default ProductCards
