import { firebaseDatabase, db } from '../utils/firebaseUtils';

export default class AlunosService {

    static getAlunos = async (callback) => {
        const starCountRef = firebaseDatabase.query(firebaseDatabase.ref(db, 'alunos'), firebaseDatabase.orderByChild('nome'));

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };

    static getAluno = async (id, callback) => {
        const starCountRef = firebaseDatabase.ref(db, `alunos/${id}`);

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };

    static updateAlunoDadosPessoais = async (id, dadosPessoais, callback) => {
        firebaseDatabase.update(firebaseDatabase.ref(db, `alunos/${id}/dadosPessoais/`), {
            dadosPessoais: dadosPessoais
        })
        .then(() => {
            callback({
                success: true
            });
        })
        .catch((error) => {
            callback({
                success: false,
                error: error
            });
        });
    };
}
