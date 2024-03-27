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

    static updateDadosPessoais = async (id, dadosPessoais, callback) => {
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

    static getTreinos = async (id, diaDaSemana, callback) => {
        const starCountRef = firebaseDatabase.ref(db, `alunos/${id}/treinos/${diaDaSemana}/`);

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };

    static updateTreinos = async (id, treino, diaDaSemana) => {
        const newKey = firebaseDatabase.push(firebaseDatabase.ref(db, `alunos/${id}/treinos/${diaDaSemana}/`)).key;
        treino.id = newKey;

        firebaseDatabase.set(firebaseDatabase.ref(db, `alunos/${id}/treinos/${diaDaSemana}/${newKey}/`), treino);
    };

    static removerExercicioDoTreino = async (id, diaDaSemana, exercicioId) => {
        firebaseDatabase.remove(firebaseDatabase.ref(db, `alunos/${id}/treinos/${diaDaSemana}/${exercicioId}`));
    };

    static ativarOuDesativar = async (id, ativo, callback) => {
        firebaseDatabase.update(firebaseDatabase.ref(db, `alunos/${id}/`), {
            ativo: ativo
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
