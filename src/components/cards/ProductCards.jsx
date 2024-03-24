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
                    className='card w-[250px] h-[350px] card-compact bg-base-100 shadow-xl max-h-[55vh] cursor-pointer'
                    data-aos='zoom-in'
			    >
                    <figure>
                        <img
                            src={i.data().image}
                            alt='product'
                            className='h-[250px] w-full object-cover'
                        />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title text-[18px] text-black'>
                            {i.data().name}
                        </h2>
                    </div>
			    </div>
            ))
        }
		</>
	)
}

export default ProductCards
