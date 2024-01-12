import { firebaseDatabase, db } from '../utils/firebaseUtils';

export default class DadosFormService {

    static getData = async (value, callback) => {
        const starCountRef = firebaseDatabase.ref(db, value);

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };
}
