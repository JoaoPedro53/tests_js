async function allUsers() {
    const res = await fetch("http://localhost:8080/v1/users");
    const data = await res.json();
    return data;
}

// assync -> permire usa o await dentro da função e faz a função sempre retornar uma promisse.

// await -> colocado antes do fetch, porque faz com que ela espere uma resposta, para assim dar 
// continuidade, caso não tenha await, a function vai retornar <pending> porque ela não espera. 