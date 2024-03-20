import { firebaseDatabase, db } from '../utils/firebaseUtils';

export default class DadosFormService {

    static getData = async (value, callback) => {
        const starCountRef = firebaseDatabase.ref(db, value);

        firebaseDatabase.onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    };

    static createAluno(aluno) {
        const newKey = firebaseDatabase.push(firebaseDatabase.child(firebaseDatabase.ref(db), 'alunos')).key;

        firebaseDatabase.set(firebaseDatabase.ref(db, 'alunos/' + newKey), {
            ativo: true,
            id: newKey,
            dadosPessoais: {
               nome: aluno.nome,
               dataNascimento: aluno.dataNascimento,
               cidade: aluno.endCidade,
               estado: aluno.endEstado,
               telefone: aluno.telefone,
               dataCadastro: new Date().toLocaleString(),
               pesoJejum: aluno.pesoJejum,
               altura: aluno.altura,
               horarioTreino: aluno.horarioTreino,
               tipoTreino: aluno.tipoTreino,
               isNew: true
           }
        });
    }
}
