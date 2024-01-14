import { firebaseDatabase, db } from '../utils/firebaseUtils';

export default class AlunosService {

    static getAlunos = async (callback) => {
        const starCountRef = firebaseDatabase.query(firebaseDatabase.ref(db, 'alunos'), firebaseDatabase.orderByChild('nome'));

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };
}
