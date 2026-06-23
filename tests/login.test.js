import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages:[
    {duration: '10s', target:10}, // durante 10segundos coloque 10 usuários virtuais para executar meus testes
    {duration: '20s', target:10}, 
    {duration: '10s', target:30},//durante mais 10s coloque 30 usuários virtuais
    {duration: '20s', target:0},//nos 20 segundos finais devem zerar os usuários virtuais
  ],
  thresholds: {
    http_req_duration: ['p(90)<3000','max<5000'], //percentil 90 TEM QUE SER menor que 10 milisegundos e o max menor que 1
    http_req_failed: ['rate<0.01'] 
  }
}

    export default function () {
    // Aqui é o teste em si
    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

   const res = http.post(url, payload, params);

   check (res, {
    'Validar que o status code é 200': (r)=> r.status === 200,
    'Validar que o token é string': (r) => typeof(r.json().token) === 'string'
   })

   sleep(1);
    
}