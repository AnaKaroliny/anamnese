import { firebaseDatabase, db } from '../utils/firebaseUtils';

export default class ExercicioService {

    static getMusculos = async (callback) => {
        const starCountRef = firebaseDatabase.query(firebaseDatabase.ref(db, 'musculos'));

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };

    static getExercicios = async (callback) => {
        const starCountRef = firebaseDatabase.query(firebaseDatabase.ref(db, 'exercicios'));

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };

    static setExercicio = async (exercicioNome, musculoNome, groupId) => {
        const newKey = firebaseDatabase.push(firebaseDatabase.child(firebaseDatabase.ref(db), 'exercicios')).key;

        firebaseDatabase.update(firebaseDatabase.ref(db, `exercicios/` + groupId + '/'), {
            label: musculoNome
        });

        firebaseDatabase.set(firebaseDatabase.ref(db, `exercicios/` + groupId + '/' + newKey + '/'), {
            label: exercicioNome
        });
    };
}
